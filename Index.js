// import { unlink } from 'fs';

const fs=require('fs');
// console.log('fetching the data')
// const data=fs.readFile('demo.txt','utf-8',(err,data)=>{
//     console.log('data fetching');
//     console.log(data);

// })
// console.log("hello world")



fs.writeFile('newtext','this is text file',(err,data)=>{
    console.log("file is created");
})


fs.unlink('newtext',(err,data)=>{
    console.log("file is deleted");
})



fs.writeFile('services','this is services file',(err,data)=>{
    console.log("first file  is created")
})
fs.unlink('services',(err,data)=>{
    console.log("first file is deleted");
})



fs.writeFile('homesection','this is home file',(err,data)=>{
    console.log('second file is created');

})
fs.unlink ('homesection',(err,data)=>{
    console.log("second file is deleted")
})

fs.writeFile('about','this is about section',(err,data)=>{
    console.log("third file is created");
})

fs.unlink('about',(err,data)=>{
    console.log("third file is deleted")
})


fs.writeFile('portfolio','this is my portfolio',(err,data)=>{
    console.log("fourth file is created");
})

fs.unlink('portfolio',(err,data)=>{
    console.log("fourth file is deleted");
})

fs.writeFile('contactus','this is contact us section',(data,err)=>{
    console.log("fifth file is created");
})

fs.unlink('contactus',(err,data)=>{
    console.log("fifth file is created")
})