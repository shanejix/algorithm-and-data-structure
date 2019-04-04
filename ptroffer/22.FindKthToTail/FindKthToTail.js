// 题目描述
// 输入一个链表，输出该链表中倒数第k个结点

/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/


//思路一：注意k的取值范围：可能非法，可能越界

//先遍历得到链表的的长度len，再遍历len-k+1个长度得到第k个节点


function FindKthToTail(head, k)
{
    let len = 0;
    while (head) {
        len++;
        head = head.next;
    }
    if (len == 0 || k < 1 || k > len) {
        return 
    }

    for (let i = 1; i < len - k + 1; i++){
        head = head.next;
    }

    return head.next;
}