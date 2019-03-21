// 题目描述
// 用两个栈来实现一个队列，完成队列的Push和Pop操作。 队列中的元素为int类型。


// 思路：双栈法
// 数据栈：栈A用来作入队列
// 辅助栈：栈B用来出队列，当栈B为空时，栈A全部出栈到栈B,栈B再出栈（即出队列）

let stackA = [];
let stackB = [];

function push(node)
{
    stackA.push(node);
}
function pop()
{
    if (stackB.length == 0) {
        
        if (stackA == 0){
            return null
        } else {
            while (stackA.length !== 0) {
                stackB.push(stackA.pop())
            }
            return stackB.pop();
        }
        
    } else {
        return stackB.pop();
    }
}