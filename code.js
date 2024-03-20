function mergesort(array) {
    const n = array.length;
    
    for(let size = 1; size < n; size *= 2) {
        for(let left = 0; left < n - 1; left += size * 2) {
            const mid = Math.min(left + size - 1, n - 1);
            const right = Math.min(left + 2 * size - 1, n - 1);
            mergeArr (array, left, mid, right);
        }
    }
    return array;
}

function mergeArr(arr, l, m, r){
    let i = 0;
    let j = 0;
    let k = l;
    const leftHalf = arr.slice(l, m + 1);
    const rightHalf = arr.slice(m + 1, r + 1);

    while (i < leftHalf.length && j < rightHalf.length){
        if (leftHalf[i] <= rightHalf[j]){
            arr[k++] = leftHalf[i++];
        } else {
            arr[k++] = rightHalf[j++];
        }
    }

    while (i < leftHalf.length){
        arr[k++] = leftHalf[i++];
    }

    while (j < rightHalf.length){
        arr[k++] = rightHalf[j++];
    }
}
