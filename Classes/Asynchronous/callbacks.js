
//callbsack Function
function add(num,callback){
    console.log(num);
    console.log({callback})

callback(num);

}
function nums(a){
    console.log(a+30)
};
add(12,nums);

