function mergesort(array) {
    const n = array.length;
    
    for (let size = 1; size < n; size *= 2) {
        for (let left = 0; left < n - 1; left += 2 * size) {
            const mid = Math.min(left + size - 1, n - 1);
            const right = Math.min(left + 2 * size - 1, n - 1);
            mergeArr (array, left, mid, right);
        }
    }
    
    return array;
}

function mergeArr(arr, l, m, r) {
    let i = l;
    let j = m + 1;

    while (i <= m && j <= r) {
        if (arr[i] <= arr[j]) {
            i++
        } else {
            const t = arr[j];
            
            for(let k = j; k > i; k--){
                arr[k] = arr[k - 1];
            }
            
            arr[i] = t;
            i++
            j++
            m++
        }
    }
}
