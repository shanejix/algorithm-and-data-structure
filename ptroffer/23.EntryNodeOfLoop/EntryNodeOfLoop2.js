// 题目描述
// 给一个链表，若其中包含环，请找出该链表的环的入口结点，否则，输出null。


function ListNode(x){
    this.val = x;
    this.next = null;
}

//思路一：快慢指针：

//确定是否有环：一个指针走一步，一个指针走两步；指针相遇则有环，且相遇的节点在环中；快指针的下一个节点为空则不存在环

//确定环中节点的个数：从快慢指针相遇的结点开始计数，回到当前节点的的个数即为环中节点的个数

//确定入口节点：快指针先走环中节点个数步，快慢指针同时出发，相遇节点即为环的入口节点


//更加优雅的写法

function EntryNodeOfLoop(pHead)
{
    if (pHead == null || pHead.next== null ||pHead.next.next) {
        return null;
    }

    //fast and slow

    let slow = pHead.next;
    let fast = pHead.next.next;

    //cilcle?

    while (slow!=fast) {
        if (fast.next && fast.next.next) {
            slow = slow.next;
            fast = fast.next.next;
        } else {
            return null;
        }
    }

    //slow == fast

    fast = pHead;

    while (slow != fast) {
        fast = fast.next;
        slow = slow.next;
    }
    return slow;
}