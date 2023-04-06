function divideArray(num){
    if(num.length<=1){
        return num;
    }
let middle=Math.floor(num.length/2)
let left =num.slice(0,middle);
let right=num.slice(middle)
return sortedArray(divideArray (left), divideArray(right))
}
function sortedArray(left,right){
    let newArray =[]
    while(left.length && right.length){
        if (left[0]< right[0])
        newArray.push(left.shift())
    
    else{
            newArray. push(right.shift())
    }
    
}
const sorted =[...newArray,...left,...right]
return sorted
}
const num=[10,2,56,3,8,4,12]
console.log(divideArray(num))


//Revision
function dividesArray(arr){
if (arr.length<= 1){
return arr;
}
let middle=Math.floor(arr.length/2)
let left=arr.slice(0,middle)
let right=arr.slice(middle)
return sortsArray(dividesArray(left) ,dividesArray(right))
}
function sortsArray(left,right){
    let emptyArray=[]
    while (left.length && right.length){
    if (left[0]<right[0]){
    emptyArray.push(left.shift())
    }
    else{
      emptyArray.push(right.shift())  
    }
}
return [...emptyArray,...right,...left]

}
const arr=[-6,20,8,-2,4]
console.log(dividesArray (arr))

