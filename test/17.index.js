var findPeakGrid = function(mat) {
    let top = 0, bottom = mat.length - 1, inner = 0;
    while (top < bottom) {
        const middle = top + bottom >> 1;
        const currentArray = mat[middle];
        let left = 0, right = currentArray.length - 1;
        while (left < right) {
            const index = left + right >> 1;
            if (
                currentArray[index + 1] 
                && currentArray[index] < currentArray[index + 1]
            ) {
                left = index + 1;
            } else {
                right = index;
            }
        }
        inner = left;
        // 当前行最大
        if (
            mat[middle + 1]
            && currentArray[left] < mat[middle + 1][left]
        ) {
            top = middle + 1;
        } else {
            bottom = middle;
        }
    }
    return [top, inner];
};

console.log(findPeakGrid([[25,37,23,37,19],[45,19,2,43,26],[18,1,37,44,50]]));