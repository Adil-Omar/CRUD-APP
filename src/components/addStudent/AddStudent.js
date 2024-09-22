import React,{useState} from 'react';
import * as yup from 'yup';
import './style.css'
export default function AddStudent(props) {
const [name,setName]=useState('')
const [email,setEmail]=useState('')
const [rollNo,setRollNo]=useState('')
const [error,setError]=useState('')

let scheme=yup.object().shape({
    name:yup.string().min(4).max(12).required().typeError("Invalid number"),
    email:yup.string().email().required().typeError("Invalid email"),
    rollNo:yup.number().required().typeError("Must be a number")
})


const onClickHandler= async ()=> {
    // console.log("Name",name)
    // console.log("Email",email)
    // console.log("RollNo",rollNo)
    // if(name==""||email==""||rollNo==""){
    //     alert("Please fill all fields")
    //     return;
    // }
    // if(isNaN(rollNo)){
    //     alert("Roll No should be a number")
    //     return;
    // }
    // if(email.includes('@')===false){
    //     alert("Email does not have @")
    //     return;
    // }
    // if(email.includes('.')===false){
    //     alert("Email does not have .")
    //     return;
    // }
    let data={
        name:name,
        email:email,
        rollNo:rollNo,
    }
    try{
        let result=await scheme.validate(data)
        props.onAddHandler(data)
        console.log("result",result)
        setError('')
        setName('');
        setEmail('');
        setRollNo('');
        
    }catch(error){
        console.log("Error",error.toString());
        setError(error.toString())
    }
}

  return (
    <div className="input" >
        <h1 >Students List</h1>
        <span style={{backgroundColor:"red",color:"white",fontSize:"x-large"}}>{error}</span><br />
        <label htmlFor="name"> Name*:
        </label>
      <input onChange={(e)=>setName(e.target.value)} value={name}  type="text" name="" id="name" placeholder='Enter Name' />
        <label htmlFor="email"> Email*:
        </label>
      <input onChange={(e)=>setEmail(e.target.value)}  type="text" value={email} name="" id="email" placeholder='Enter Email' />
        <label htmlFor="rollNo"> Roll No*:
        </label>
      <input onChange={(e)=>setRollNo(e.target.value)}  type="text" name="" value={rollNo} placeholder='Enter Roll No' id="rollNo" />
      <button onClick={onClickHandler} style={{backgroundColor:"blue",color:"white"}} > Add Student</button>
    </div>
  )
}
