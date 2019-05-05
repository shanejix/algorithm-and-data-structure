// 题目描述
// 输入一个复杂链表（每个节点中有节点值，以及两个指针，一个指向下一个节点，
// 另一个特殊指针指向任意一个节点），返回结果为复制后复杂链表的head。
// （注意，输出结果中请不要返回参数中的节点引用，否则判题程序会直接返回空）

//思路：递归

function RandomListNode(x){
    this.label = x;
    this.next = null;
    this.random = null;
}
/*
function Clone(pHead)
{
    if (!pHead) {
        return null;
    }

    let newhead = new RandomListNode(pHead.label);
    newhead.random = pHead.random;

    newhead.next = Clone(pHead.next);
    
    return newhead;
}*/

//思路二：

//遍历链表，并创建新的链表，并且创建random的哈希表——空间换取时间

//思路三：

//1.遍历链表，依次复制新的节点到当前节点的后面

//2.重新遍历链表，修改新节点上的random指向

//3.再次遍历链表，拆分新的链表和旧的链表

function Clone(pHead)
{
    if (!pHead) {
        return;
    }
    //遍历并且复制节点，并且将复制的结点放在当前节点的后面
    let curr = pHead;
    while (curr) {
        let next = new RandomListNode(curr.label);
        next.next = curr.next;
        curr.next = next;
        curr = next.next;
    }
    //遍历，赋值random指针
    curr = pHead;
    while (curr) {
        let randNode = curr.random;
        curr.next.random = randNode.next;
        curr.next = curr.next.next;
    }
    //拆分
    let newhead = new RadioNodeList(null);
    let newheadClone = new RadioNodeList(null);;
    while (pHead) {
        newhead.next = pHead;
        newheadClone.next = pHead;
        pHead = pHead.next.next;
    }
    
    return newheadClone.next;
}

