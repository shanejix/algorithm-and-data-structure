// 题目描述
// 在一个排序的链表中，存在重复的结点，请删除该链表中重复的结点，
// 重复的结点不保留，返回链表头指针。
// 例如，链表1 -> 2 -> 3 -> 3 -> 4 -> 4 -> 5 处理后为 1 -> 2 -> 5


//思路一：遍历链表，判断当前节点值和下一个节点值，如果下一个节点值不等于当前节点值则将当前节点值

//加入新的链表；如果下一个节点值等于当前，则指向当前节点的指针和指向下一个节点的值的指针都向后移动一个

//位置，直到不相等为止


function ListNode(x) {
    this.val = x;
    this.next = null;
}

// function deleteDuplication(pHead) {

//     if (!pHead || !pHead.next) {
//         return pHead;
//     }

//     let curr = pHead;
//     let next = pHead.next;
//     let res = null;

//     while (curr && next && next.next) {
//         if (curr == next) {
//             next++;
//         } else {
//             res.next = curr;
//             curr = next.next;
//             next = next.next;
//         }
//     }

//     return res
// }

function deleteDuplication(pHead) {
    var resHead = pHead
    if (pHead == null) {
        return null;
    }

    var pPreNode = null
    var pNode = pHead
    while (pNode != null) {
        var pNext = pNode.next
        var needDelete = false
        if (pNext != null && pNext.val == pNode.val) {
            needDelete = true
        }

        if (!needDelete) {
            pPreNode = pNode
            pNode = pNode.next
        }
        else {
            value = pNode.val
            pToBeDel = pNode
            while (pToBeDel != null && pToBeDel.val == value) {
                pNext = pToBeDel.next
                pToBeDel = null
                pToBeDel = pNext
            }

            if (pPreNode == null) {
                resHead = pNext
            } else {
                pPreNode.next = pNext
            }
            pNode = pNext
        }
    }
    return resHead
}