// ou are given an integer array jobs, where jobs[i] is the amount of time it takes to complete the ith job.

// There are k workers that you can assign jobs to. Each job should be assigned to exactly one worker. The working time of a worker is the sum of the time it takes to complete all jobs assigned to them. Your goal is to devise an optimal assignment such that the maximum working time of any worker is minimized.

// Return the minimum possible maximum working time of any assignment.

//  

// Example 1:

// Input: jobs = [3,2,3], k = 3
// Output: 3
// Explanation: By assigning each person one job, the maximum time is 3.
// Example 2:

// Input: jobs = [1,2,4,7,8], k = 2
// Output: 11
// Explanation: Assign the jobs the following way:
// Worker 1: 1, 2, 8 (working time = 1 + 2 + 8 = 11)
// Worker 2: 4, 7 (working time = 4 + 7 = 11)
// The maximum working time is 11.
//  

// Constraints:

// 1 <= k <= jobs.length <= 12
// 1 <= jobs[i] <= 107

// You are given an integer array jobs, where jobs[i] is the amount of time it takes to complete the ith job.

// There are k workers that you can assign jobs to.Each job should be assigned to exactly one worker.The working time of a worker is the sum of the time it takes to complete all jobs assigned to them.Your goal is to devise an optimal assignment such that the maximum working time of any worker is minimized.

// Return the minimum possible maximum working time of any assignment.



//     Example 1:

// Input: jobs = [3, 2, 3], k = 3
// Output: 3
// Explanation: By assigning each person one job, the maximum time is 3.
// Example 2:

// Input: jobs = [1, 2, 4, 7, 8], k = 2
// Output: 11
// Explanation: Assign the jobs the following way:
// Worker 1: 1, 2, 8(working time = 1 + 2 + 8 = 11)
// Worker 2: 4, 7(working time = 4 + 7 = 11)
// The maximum working time is 11.


// Constraints:

// 1 <= k <= jobs.length <= 12
// 1 <= jobs[i] <= 107

// 方法一：二分查找 + 回溯 + 剪枝

/**
 * @param {number[]} jobs jobs[i] 是完成第 i 项工作要花费的时间
 * @param {number} k  k 位工人
 * @return {number}
 */
var minimumTimeRequired = function (jobs, k) {
    // 降序排列：优先分配工作量大的工作
    jobs.sort((a, b) => b - a);

    /**
     * 二分求解的思路：
     * 
     * 假设，当完成所有工作的最短时间已经确定为 limit 时，
     * 那么，对于任意长于 limit 的最短时间，都一定也存在可行的方案
     * 因此，可以考虑使用二分查找的方法寻找最小的存在可行方案的 limit 值
     * 
     */

    // 优化：二分查找的上下限

    // 下限为所有工作中的最大工作量: 工人数量 k 和 需要完成的工作数量（jobs.length) 相同
    let l = jobs[0]
    // 上限为所有工作的工作量之和: 只有一个工人
    let r = jobs.reduce((prev, curr, idx, jobs) => prev + curr);

    // 二分查找确定 limit
    while (l < r) {
        const mid = Math.floor((l + r) >> 1);
        if (check(jobs, k, mid)) {
            r = mid;
        } else {
            l = mid + 1;
        }
    }
    return l;
};

/**
 * 校验 第 i 个任务
 * @param {*} jobs jobs[i] 是完成第 i 项工作要花费的时间
 * @param {*} k  k 位工人
 * @param {*} limit 完成所有工作的最短时间
 * @returns 
 */
const check = (jobs, k, limit) => {
    const workloads = new Array(k).fill(0);
    return backtrack(jobs, workloads, 0, limit);
}

/**
 * 递归函数 backtrack(i) 递归地枚举第 i 个任务的分配方案
 * @param {*} jobs 
 * @param {*} workloads workloads[i] 表示第 i 个工人的当前已经被分配的工作量
 * @param {*} i 第 i 个任务
 * @param {*} limit 完成所有工作的最短时间
 * @returns 
 */
const backtrack = (jobs, workloads, i, limit) => {
    if (i >= jobs.length) {
        return true;
    }

    // 优先分配工作量大的工作
    let cur = jobs[i];
    for (let j = 0; j < workloads.length; ++j) {
        // 当工人 j 还没被分配工作时，不给工人 j+1 分配工作
        if (workloads[j] + cur <= limit) {
            workloads[j] += cur;
            if (backtrack(jobs, workloads, i + 1, limit)) {
                return true;
            }
            workloads[j] -= cur;
        }

        // 如果当前工人未被分配工作，那么下一个工人也必然未被分配工作
        // 或者当前工作恰能使该工人的工作量达到了上限
        // 这两种情况下我们无需尝试继续分配工作
        if (workloads[j] === 0 || workloads[j] + cur === limit) {
            break;
        }
    }
    return false;
}
