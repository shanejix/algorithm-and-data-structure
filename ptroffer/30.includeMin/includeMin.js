// 题目描述
// 定义栈的数据结构，请在该类型中实现一个能够得到栈中所含最小元素的min函数（时间复杂度应为O（1））。


//思路：辅助栈——更新保存最小值

//双栈：m_data;m_min

let m_data = [];
let m_min = [];

function push(node)
{
    m_data.push(node);
    if (m_min.length == 0 || node < m_min[m_min.length] {
        m_min.push(node);
    }
}
function pop()
{
    if (m_data.length == 0) {
        return null;
    }
    m_data.pop();
    m_min.pop();
}
function top()
{
    if (m_data.length == 0) {
        return null;
    }
    return m_data[m_data.length - 1];
}
function min()
{
    if (m_min.length == 0) {
        return null;
    }
    return m_min[m_min.length-1];
}