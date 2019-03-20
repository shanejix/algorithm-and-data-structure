/**
 * 题目描述
 * 输入一个链表，按链表值从尾到头的顺序返回一个ArrayList。
*/

//思路：询问面试官是否允许修改输入数据

//打印操作一般不允许修改输入数据

//思路：后进先出，利用栈的特点解决

function ListNode(x){
    this.val = x;
    this.next = null;
}

function printListFromTailToHead(head)
{
    
    //negative

    //boundary

    //functional

    let nodes = [];

    let temp = new ListNode();

    while (head) {
        nodes.push(head)

        head = head.next;
    }
    temp.next = nodes.pop();
    head.next = temp.next;
    while (nodes.length != 0) {
        temp.next.next = nodes.pop();
        temp.next = temp.next.next;
    }
    return head;
}