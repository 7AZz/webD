// WAP to print the biggest number in Array

const arr=[12,35,8756,1212,675,122,5555];
let max=arr[0];

for(let i=1; i<arr.length; i++){
    if(max<arr[i]){
        max = arr[i];
    }
}
console.log("The lasrgest number in Array: "+ max);