const expres=require('express')
const router=expres.Router()

router.get('',(request,response)=>{
    response.send("Service Page")
})
router.get('/:id',(request,response)=>{
    if(request.params.id<Arraylength){
    response.send(`This is id Value : ${userData[request.params.id].name}`)
    }
    else{
        response.send("Invalid!")
    }
})


const userData=[{
    name:"saro",
    id:212222

},
{
    name:"vasanth"
},
{
    name:"Nagaraj"
}]

const Arraylength=userData.length
module.exports=router
