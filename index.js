const countSteps = (num) => {
    let steps = 0
    while(num != 0) {
        if(num % 2 === 0) {
            num = num / 2
            steps += 1
        } else {
            num -= 1
            steps += 1
        }
    }
    return steps
}

console.log(countSteps(14)) // 6
console.log(countSteps(8)) // 4
console.log(countSteps(123)) // 12