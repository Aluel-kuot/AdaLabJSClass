let num=[3,5,10,30,8,6]
for(let i = 0; i< num.length; i++){
    console.log( "option3",num[i])

    if (i===3){
    continue;
        
    }
    console.log("continue",num[i])
}