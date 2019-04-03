// 题目描述
// 在一个排序的链表中，存在重复的结点，请删除该链表中重复的结点，
// 重复的结点不保留，返回链表头指针。
// 例如，链表1 -> 2 -> 3 -> 3 -> 4 -> 4 -> 5 处理后为 1 -> 2 -> 5


//思路一：遍历链表，判断当前节点值和下一个节点值，如果下一个节点值不等于当前节点值则将当前节点值

//加入新的链表；如果下一个节点值等于当前，则指向当前节点的指针和指向下一个节点的值的指针都向后移动一个

//位置，直到不相等为止


//思路二：递归实现

function ListNode(x) {
    this.val = x;
    this.next = null;
}

function deleteDuplication(pHead) {
    if (pHead == null || pHead.next == null) {
        return pHead; 
    }
    if (pHead.val == pHead.next.val) {
        var pNode = pHead.next;
        while (pNode != null && pNode.val == pHead.val) {
            pNode = pNode.next;
        }
        return deleteDuplication(pNode);
    } else {
        pHead.next = deleteDuplication(pHead.next);
        return pHead;
    }
}