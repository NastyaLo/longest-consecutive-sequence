module.exports = function longestConsecutiveLength(array) {
    if (array.length < 2) return array.length;

    array.sort((a, b) => a - b);

    let maxLength = 1;
    let localMaxLength = 1;

    for (let i = 1; i < array.length; i++) {
        if (array[i] == ( array[i - 1] + 1 )) {
            localMaxLength++;
        } else {
            if (localMaxLength > maxLength) {
                maxLength = localMaxLength;
            }
                localMaxLength = 1;
        }
    }

    return maxLength;
}
