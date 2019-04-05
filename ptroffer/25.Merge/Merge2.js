// 题目描述
// 输入两个单调递增的链表，输出两个链表合成后的链表，当然我们需要合成后的链表满足单调不减规则

function ListNode(x){
    this.val = x;
    this.next = null;
}

//思路二：递归实现

function Merge(pHead1, pHead2)
{
    if (pHead1 == null) {
        return pHead2;
    } else if (pHead2 == null) {
        return pHead1;
    }

    let res = null;

    if (pHead1.val < pHead2.val) {
        res = pHead1;
        res.next = Merge(pHead1.next, pHead2);
    } else {
        res = pHead2;
        res.next = Merge(pHead1, pHead2.next);
    }

    return res;
}