import express from 'express' 

const app = express();
const PORT = 5000 ;
app.use(express.json()); 
const teacher = []
app.get('/teachers', (req,res)=>{
res.json({
data:teacher,
message:"hello teachers"
})
}) 
 
app.post('/teacher' , (req,res)=>{
const id = Math.floor(Math.random() *10000);
const {name,age,mobile,email} = req.body 
if(!name){
return    res.json({
        message:"name is required"
    })
}
if(!age){
  return  res.json({
        message:"age is required"
    })
}

if(!mobile){
   return res.json({
        message:"mobile is required"
    })
}

if(!email){
  return  res.json({
        message:"email is required"
    })
}

const newteacher = {
    id:id,
    name:name,
    age:age,
    mobile:mobile,
    email:email
} 

teacher.push(newteacher) 
res.json({
    data:newteacher,
    message:" teachers data find succesfully"
})
})

app.get('/find' ,(req,res)=>{
const {id} = req.query
let finditeacher = null 
teacher.forEach((teach)=>{
if(teach.id == id){
finditeacher = teach
}
}) 

if(finditeacher == null) {
    res.json({
        message:"data is not find"
    })
}
res.json({
    data : finditeacher
})
})
// delete 

app.get("/delete" ,(req,res) =>{
const {id} = req.query  
let index ;
teacher.forEach((del,i)=>{
    if(del.id == id){
        index = i
    }

})
teacher.splice(index,1) ;
res.json({
    message:"data is delete"
})
})

app.listen(PORT,()=>{
    console.log("this runs succesfully")
})