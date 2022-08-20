//.padstart(6)
//.padend(7)
// const fun = 'ashu'
// fun.padStart(6);

// const fun = (a,b,c,d) => {
//     console.log(a);
// }
// fun(1,2,3,4,) // will print the value of a only.

let obj ={
    username0 : 'santa',
    username1 : 'rudolf',
    username2 : 'Mr.NANi'
}
//   ------------------>  //object.keys(obj) its now an array.
// console.log(Object.values(obj));


// Object.keys(obj).forEach((key,index) =>{
//     console.log(key.obj[key]);
// }) 
// Object.values(obj).forEach((key,index) =>{
//     console.log(key.obj[key]);
// }) 
// Object.entries(obj).forEach((key,index) =>{
//     console.log(key.obj[key]);
// }) 
Object.entries(obj).map(value =>{
    return value[1] + value[0].replace('username',' ');
})

// MAP METHOD  ---> MAP ARRAY KE EK EK FUNCTION KO PAKADTA