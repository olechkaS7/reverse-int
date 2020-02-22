module.exports = function reverse(n) {
    const abs = Math.abs(n);
    const str = String(abs);
    const arr = str.split('');
    arr.reverse();
    const reverseStr = arr.join('');
    const number = parseInt(reverseStr, 10);

    return number;
}
