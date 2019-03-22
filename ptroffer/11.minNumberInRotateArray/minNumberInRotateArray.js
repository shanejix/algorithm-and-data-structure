// 题目描述
// 把一个数组最开始的若干个元素搬到数组的末尾，我们称之为数组的旋转。
// 输入一个非减排序的数组的一个旋转，输出旋转数组的最小元素。
// 例如数组{ 3, 4, 5, 1, 2 } 为{ 1, 2, 3, 4, 5 } 的一个旋转，该数组的最小值为1。
// NOTE：给出的所有元素都大于0，若数组大小为0，请返回0。


function minNumberInRotateArray(rotateArray)
{
    if (!rotateArray || rotateArray.length == 0) {
        return 0;
    }

    let front = 0
    let end = rotateArray.length - 1;
    let mid = front;

    while (rotateArray[front] >= rotateArray[end]) {
        if (end - front == 1) {
            mid = front;
            break;
        }
        mid = front + (end - front >> 2);

        if (rotateArray[front] == rotateArray[end] && rotateArray[front] == rotateArray[mid]) {
            return midInOrder(rotateArray, front, end);
        }
        if (rotateArray[mid] > rotateArray[front]) {
            mid = front;
        } else if (rotateArray[mid] < rotateArray[end]) {
            mid = end;
        }
    }

    return rotateArray[mid];

}

function midInOrder(rotateArray, front, end) {
    let res = rotateArray[front];
    for (let i = front+1; i <= end; i++){
        if (rotateArray[i] < res) {
            res = rotateArray[i];
        }
    }
    return res;
}




/*

//废弃

function minNumberInRotateArray(rotateArray)
{
    if (!rotateArray || rotateArray.length == 0) {
        return 0;
    }

    let front = 0
    let end = rotateArray.length - 1;
    let mid = rotateArray[0];
    let res = rotateArray[0];

    if ( mid< rotateArray[end]) {
        return mid;
    } else {
        mid = front + (end - front >> 2);
        if (rotateArray[mid] > rotateArray[front]) {
            
        } else if (rotateArray[mid] < rotateArray[end]) {
            
        } else if (rotateArray[mid] == rotateArray[front] && rotateArray[mid] == rotateArray[end]) {
            rotateArray.forEach(ele => {
                if (ele < res) {
                    res = ele;
                }
            })
            return res;
        }
    }
    }

    */