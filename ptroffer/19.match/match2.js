// 题目描述
// 请实现一个函数用来匹配包括'.'和'*'的正则表达式。
// 模式中的字符'.'表示任意一个字符，而'*'表示它前面的字符可以出现任意次（包含0次）。
// 在本题中，匹配是指字符串的所有字符匹配整个模式。
// 例如，字符串"aaa"与模式"a.a"和"ab*ac*a"匹配，但是与"aa.a"和"ab*a"均不匹配

//思路一：利用js的正则


//思路二: 每次从字符串中和模式中拿出一个字符做比较，注意‘.’

//模式中不存在*时，相对简单，如果模式和字符串中的第一个字符相匹配，字符串和模式上都向后移动一个字符

//然后匹配剩余的字符

//模式中存在*时，可以在模式上向后移动两个字符，也可以保持模式不变

//s, pattern都是字符串
function match(s, pattern) {
    if (s == null || pattern == null) return false;
    return matchCore(s, pattern, 0, 0);
}

function matchCore(s, pattern, strd, patternd) {
    if (s.length == strd && pattern.length == patternd) return true;
    //两个字符串都为空，返回true

    if (s.length != strd && pattern.length == patternd) return false;
    /*当第一个字符串不空，而第二个字符串空了，返回false（因为这样，就无法
    匹配成功了,而如果第一个字符串空了，第二个字符串非空，还是可能匹配成
    功的，比如第二个字符串是“a*a*a*a*”,由于‘*’之前的元素可以出现0次，
    所以有可能匹配成功）
    */


    /**
     之后就开始匹配第一个字符，这里有两种可能：匹配成功或匹配失败。但考虑到pattern
    下一个字符可能是‘*’， 这里我们分两种情况讨论：pattern下一个字符为‘*’或
    不为‘*’
     */
    //if the next character in pattern is not '*'

    /**
     pattern下一个字符不为‘*’：这种情况比较简单，直接匹配当前字符。如果
            匹配成功，继续匹配下一个；如果匹配失败，直接返回false。注意这里的
            “匹配成功”，除了两个字符相同的情况外，还有一种情况，就是pattern的
            当前字符为‘.’,同时str的当前字符不为‘\0’。
     */
    if (pattern[patternd + 1] == '*') {
        if (pattern[patternd] == s[strd] || (pattern[patternd] == '.' && strd != s.length))
            return match(s, patternd, strd + 1, patternd + 1);
        else
            return false;
    }
    //if the next character is '*'

    /*
    pattern下一个字符为‘*’时，稍微复杂一些，因为‘*’可以代表0个或多个。
            这里把这些情况都考虑到：
               a>当‘*’匹配0个字符时，str当前字符不变，pattern当前字符后移两位，
                跳过这个‘*’符号；
               b>当‘*’匹配1个或多个时，str当前字符移向下一个，pattern当前字符
                不变。（这里匹配1个或多个可以看成一种情况，因为：当匹配一个时，
                由于str移到了下一个字符，而pattern字符不变，就回到了上边的情况a；
                当匹配多于一个字符时，相当于从str的下一个字符继续开始匹配）
    */
    else {
        if (pattern[patternd] == s[strd] || (pattern[patternd] == '.' && strd != s.length))
            return match(s, patternd, strd, patternd + 2) || match(s, patternd, strd + 1, patternd);
        else
            return match(s, patternd, strd, patternd + 2);
    }
}