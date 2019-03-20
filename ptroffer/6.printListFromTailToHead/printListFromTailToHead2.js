/**
 * 题目描述
 * 输入一个链表，按链表值从尾到头的顺序返回一个ArrayList。
*/

//思路：询问面试官是否允许修改输入数据

//打印操作一般不允许修改输入数据

//思路：后进先出，利用栈的特点解决

//思路二：递归的本质就是栈结构，---递归实现：先递归输出该节点的后面的结点，再输出该节点

function ListNode(x){
    this.val = x;
    this.next = null;
}

function printListFromTailToHead(head)
{
    
    //negative

    //boundary

    //functional
    let new_head = new ListNode();

    if (head) {
        
        if (head.next) {
            printListFromTailToHead(head.next)
        }
    
        new_head.next = head;
    
    }
}