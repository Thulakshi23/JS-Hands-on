function rotateArray(arr, k) {
    const n = arr.length;

    // Limit "k" to the array length to avoid performing unnecessary rotations
    k = k % n;
    
    if (k === 0) return arr; // No rotation needed


    const rotatedPart = arr.slice(n - k); // Get the last k elements
    const remainingPart = arr.slice(0, n - k); // Get the rest of the elements
    
    return [...rotatedPart, ...remainingPart]; // Connect them
}


const array = [1, 2, 3, 4, 5];
const k = 2;
const rotatedArray = rotateArray(array, k);
    console.log(rotatedArray);
