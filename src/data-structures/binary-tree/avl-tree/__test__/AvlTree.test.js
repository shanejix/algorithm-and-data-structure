import AvlTree from "../AvlTree";

describe("AvlTree", () => {
  it("should do simple left-left rotation", () => {
    const tree = new AvlTree();

    tree.insert(4);
    tree.insert(3);
    tree.insert(2);

    expect(tree.toString()).toBe("2,3,4");
    expect(tree.root.value).toBe(3);
    expect(tree.root.height).toBe(1);

    tree.insert(1);

    expect(tree.toString()).toBe("1,2,3,4");
    expect(tree.root.value).toBe(3);
    expect(tree.root.height).toBe(2);

    tree.insert(0);

    expect(tree.toString()).toBe("0,1,2,3,4");
    expect(tree.root.value).toBe(3);
    expect(tree.root.left.value).toBe(1);
    expect(tree.root.height).toBe(2);
  });

  it("should do complex left-left rotation", () => {
    const tree = new AvlTree();

    tree.insert(30);
    tree.insert(20);
    tree.insert(40);
    tree.insert(10);

    expect(tree.root.value).toBe(30);
    expect(tree.root.height).toBe(2);
    expect(tree.toString()).toBe("10,20,30,40");

    tree.insert(25);
    expect(tree.root.value).toBe(30);
    expect(tree.root.height).toBe(2);
    expect(tree.toString()).toBe("10,20,25,30,40");

    tree.insert(5);
    expect(tree.root.value).toBe(20);
    expect(tree.root.height).toBe(2);
    expect(tree.toString()).toBe("5,10,20,25,30,40");
  });

  
});
