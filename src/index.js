module.exports = function check(str, bracketsConfig) {
    if (str.length % 2) return false;
    let symbArr = str.split('');

    for (let i = 0; i < symbArr.length; i++) {
        bracketsConfig.forEach(bracket => {
            {
                if (symbArr[i] === bracket[0] && symbArr[i + 1] === bracket[1]) {
                    symbArr.splice(i, 2);
                    i -= 2;
                }
            }
        });
    }
    return symbArr.length === 0;
};
