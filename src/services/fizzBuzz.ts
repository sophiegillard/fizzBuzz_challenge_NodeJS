function fizzBuzz(n: number): number | string {
    if (n % 3 === 0 && n % 5 === 0) return "FizzBuzz";
    if (n % 3 === 0) return "Fizz";
    if (n % 5 === 0) return "Buzz";
    return n;
}

function generateFizzBuzz(limit: number): (number | string)[] {
    const result: (number | string)[] = [];
    for (let i = 1; i <= limit; i++) {
        result.push(fizzBuzz(i));
    }
    return result;
}

export { fizzBuzz, generateFizzBuzz };
