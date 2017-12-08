// Write your cade below:
module.exports = function main(testnumber,mynumber) {
    let arr1 = testnumber.toString().split('');
    let arr2 = mynumber.toString().split('');
    let count1 = 0;
    let count2 = 0;
    for(let item of arr1){
        for(let str of arr2){
            if(item === str) {count1++;}
        }
    }
    for(let i=0;i<4;i++){
        if(arr1[i] === arr2[i]){count2++;}
    }
    return  count2.toString() +"A" + (count1-count2).toString()+ "B";

};

