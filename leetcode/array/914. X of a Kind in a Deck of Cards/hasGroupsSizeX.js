/**
 * 思路：
 * 
 * 1.对数组进行排序
 * 
 * 2.遍历数组，求出相同数字的长度
 * 
 * 3.校验相同数数字的长度是否都是最对相同数字的整数倍
 * 
*/

export var hasGroupsSizeX = function(deck) {
    //反向测试
    if (deck.length == 1 || deck.length == 0) {
        return false;
    }

    let dst = [];
    let min = Number.MAX_SAFE_INTEGER;
    let res = true;

    deck.sort((a, b) => a - b);

    for (let i = 0, len = deck.length; i < len; i++){
        let temparr = [];
        temparr.push(deck[i]);
        for (let j = i+1; j < len-1; j++){
            if (deck[i] == deck[j]) {
                temparr.push(deck[j]);
            } else {
                if (temparr.length < min) min = temparr.length;
                dst.push([].concat(temparr));
                i = j;
                temparr.length = 0;
                break;
            }
        }
        
    }

    dst.every(item => {
        if (item.length % min != 0) {
            res = false;
            return false;
        }
    })

    return res;
};

