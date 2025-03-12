// WAP to print all the even numbers in Array

const numbers = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

for (let i = 0; i < numbers.length; i++) {
    if(numbers[i] % 2 == 0){
        console.log(numbers[i]);
    }
}