
/**
 * @param {string} s
 * @return {string}
 */

 //常用API解决
 
export default (s) => {

    //反转字符串
    const reverseString = (s) => {
        return s.split('').reverse().join('');
    }
    //主逻辑
    let list = s.split(' ');

    return list.map(reverseString).join(' ');
}