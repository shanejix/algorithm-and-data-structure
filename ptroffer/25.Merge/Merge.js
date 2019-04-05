// 题目描述
// 输入两个单调递增的链表，输出两个链表合成后的链表，当然我们需要合成后的链表满足单调不减规则

function ListNode(x){
    this.val = x;
    this.next = null;
}

function Merge(pHead1, pHead2)
{
    if (!pHead1 && !pHead2) {
        return null;
    }

    let resHead = new ListNode(null);

    let p1 = pHead1;
    let p2 = pHead2;
    let p3 = resHead;

    while (p1 && p2) {
        if (p1.val > p2.val) {
            p3.next = p2;
            p2 = p2.next;

        } else {
            p3.next = p1;
            p1 = p1.next;
        }
        p3 = p3.next;
    }

    if (p1) {
        p3.next = p1;
    }

    if (p2) {
        p3.next = p2;
    }

    return resHead.next;
}