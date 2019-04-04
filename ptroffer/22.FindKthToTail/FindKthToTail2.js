// 题目描述
// 输入一个链表，输出该链表中倒数第k个结点



//思路一：注意k的取值范围：可能非法，可能越界

//先遍历得到链表的的长度len，再遍历len-k+1个长度得到第k个节点


//思路二：双指针——遍历一遍的实现方法：

//first指针先走k-1步后，last指针和first指针同时向后遍历，直到last走到链表结尾，first指针即为所得

//特别注意，k的非法取值，以及越界情况。first走不到k-1步的情况


function ListNode(x){
    this.val = x;
    this.next = null;
}

function FindKthToTail(head, k)
{
    if (!head || k < 1) {
        return null;
    }
    
    let first = head;
    let last = null;

    for (let i = 0; i < k - 1; i++){
        if (first.next != null) {
            first = first.next;
        } else {
            return null;
        }
    }

    last = head;

    while (first.next != null) {
        first = first.next;
        last = last.next;
    }
    return last;
}