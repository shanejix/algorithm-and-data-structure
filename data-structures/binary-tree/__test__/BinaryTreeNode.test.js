import BinaryTreeNode from "../BinaryTreeNode";

describe("BinaryTreeNode", () => {
  it("should create node", () => {
    const node = new BinaryTreeNode();

    expect(node).toBeDefined();

    expect(node.value).toBeNull();
    expect(node.left).toBeNull();
    expect(node.right).toBeNull();

    const leftNode = new BinaryTreeNode(1);
    const rightNode = new BinaryTreeNode(3);
    const rootNode = new BinaryTreeNode(2);

    rootNode.setLeft(leftNode).setRight(rightNode);

    expect(rootNode.value).toBe(2);
    expect(rootNode.left.value).toBe(1);
    expect(rootNode.right.value).toBe(3);
  });

  it("should set parent", () => {
    const leftNode = new BinaryTreeNode(1);
    const rightNode = new BinaryTreeNode(3);
    const rootNode = new BinaryTreeNode(2);

    rootNode.setLeft(leftNode).setRight(rightNode);

    expect(rootNode.parent).toBeNull();
    expect(rootNode.left.parent.value).toBe(2);
    expect(rootNode.right.parent.value).toBe(2);
    expect(rootNode.right.parent).toEqual(rootNode);
  });

  it("should calculate node height", () => {
    const root = new BinaryTreeNode(1);
    const left = new BinaryTreeNode(3);
    const right = new BinaryTreeNode(2);
    const grandLeft = new BinaryTreeNode(5);
    const grandRight = new BinaryTreeNode(6);
    const grandGrandLeft = new BinaryTreeNode(7);

    expect(root.height).toBe(0);
    expect(root.balanceFactor).toBe(0);

    root.setLeft(left).setRight(right);

    expect(root.height).toBe(1);
    expect(left.height).toBe(0);
    expect(root.balanceFactor).toBe(0);

    left.setLeft(grandLeft).setRight(grandRight);

    expect(root.height).toBe(2);
    expect(left.height).toBe(1);
    expect(grandLeft.height).toBe(0);
    expect(grandRight.height).toBe(0);
    expect(root.balanceFactor).toBe(1);

    grandLeft.setLeft(grandGrandLeft);

    expect(root.height).toBe(3);
    expect(left.height).toBe(2);
    expect(grandLeft.height).toBe(1);
    expect(grandRight.height).toBe(0);
    expect(grandGrandLeft.height).toBe(0);
    expect(root.balanceFactor).toBe(2);
  });

  it("should calculate node height for right nodes as well", () => {
    const root = new BinaryTreeNode(1);
    const right = new BinaryTreeNode(2);

    root.setRight(right);

    expect(root.height).toBe(1);
    expect(right.height).toBe(0);
    expect(root.balanceFactor).toBe(-1);
  });

  it("should set null for left and right node", () => {
    const root = new BinaryTreeNode(2);
    const left = new BinaryTreeNode(1);
    const right = new BinaryTreeNode(3);

    root.setLeft(left);
    root.setRight(right);

    expect(root.left.value).toBe(1);
    expect(root.right.value).toBe(3);

    root.setLeft(null);
    root.setRight(null);

    expect(root.left).toBeNull();
    expect(root.right).toBeNull();
  });
});

it('should detect right uncle', () => {
  const grandParent = new BinaryTreeNode('grand-parent');
  const parent = new BinaryTreeNode('parent');
  const uncle = new BinaryTreeNode('uncle');
  const child = new BinaryTreeNode('child');

  expect(grandParent.uncle).not.toBeDefined();
  expect(parent.uncle).not.toBeDefined();

  grandParent.setLeft(parent);

  expect(parent.uncle).not.toBeDefined();
  expect(child.uncle).not.toBeDefined();

  parent.setLeft(child);

  expect(child.uncle).not.toBeDefined();

  grandParent.setRight(uncle);

  expect(parent.uncle).not.toBeDefined();
  expect(child.uncle).toBeDefined();
  expect(child.uncle).toEqual(uncle);
});

it('should detect left uncle', () => {
  const grandParent = new BinaryTreeNode('grand-parent');
  const parent = new BinaryTreeNode('parent');
  const uncle = new BinaryTreeNode('uncle');
  const child = new BinaryTreeNode('child');

  expect(grandParent.uncle).not.toBeDefined();
  expect(parent.uncle).not.toBeDefined();

  grandParent.setRight(parent);

  expect(parent.uncle).not.toBeDefined();
  expect(child.uncle).not.toBeDefined();

  parent.setRight(child);

  expect(child.uncle).not.toBeDefined();

  grandParent.setLeft(uncle);

  expect(parent.uncle).not.toBeDefined();
  expect(child.uncle).toBeDefined();
  expect(child.uncle).toEqual(uncle);
});
