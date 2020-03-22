module.exports = function check(str, bracketsConfig) {
    let stack = [];
    let myStr = str.split('');

    if (myStr.length % 2 != 0) {
        return false;
    }

    for (let i = 0; i < myStr.length; i++) {
        for (let j = 0; j < bracketsConfig.length; j++) {
            if (stack.length != 0 && stack[stack.length - 1] == bracketsConfig[j][0] && myStr[i] == bracketsConfig[j][1]) {
                stack.pop();
            }else if (myStr[i] == bracketsConfig[j][0]) {
                stack.push(myStr[i]);
            }
        }
    }
    if (stack.length == 0) {
        return true;
    }else{
        return false;
    }
}
