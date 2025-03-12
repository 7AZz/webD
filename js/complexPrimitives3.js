// WAP that prints all the male people's first name given a complex object

const allusers = [{
    firstName : "Tanveer",
    gender : "male"
}, {
     firstName : "Khalid",
    gender : "male"
}, {
     firstName : "Pookie",
    gender : "female"
}]

for(let i = 0; i<allusers.length; i++){
    if(allusers[i]["gender"]== "male"){
        console.log(allusers[i]["firstName"])
    }
}