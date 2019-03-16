
/**
 * @param {string} s
 * @return {string}
 */

 //更优雅的解法
 
export default (s) => {

    //反转字符串函数
    const reverseString = (s) => {
        let res = '';
        for (let i = s.length - 1; i >= 0; i--){
            res += s[i];
        }
        return res;
    }

    //主逻辑
    let list = s.split(' ');

    return list.map(reverseString).join(" ");
}