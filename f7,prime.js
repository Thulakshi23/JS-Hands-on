function isPrime(number) {
    if (number <= 1) {
        return (false) 
    }

    for (let i = 2; i < number; i++) {
        if (number % i === 0) {
            return (false)
        }
    }
    return (true)   
}

let num = 72;
    console.log(`Is ${num} prime? ${isPrime(num)}`); 