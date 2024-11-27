import { Box, Button, Input } from "@mui/material";
import { useForm } from "react-hook-form";
import { useAuth } from "../provider/AuthProvider";
import { useNavigate } from "react-router";



const  LoginPage=()=> {

  const {login} = useAuth()
  const navigate = useNavigate()

  const {register,reset,handleSubmit} = useForm()

  const onSubmit = (data) =>{
    
   const result =  login(data)

   if(result){
    reset()
    navigate('/')
   }
  }
 

  return (
    
      <Box sx={{display:"flex",justifyContent:"center",alignItems:"center",height:"100vh",width:"100%"}}>

        <Box component={"form"} onSubmit={handleSubmit(onSubmit)} sx={{backgroundColor:"#fff",p:10,width:"40%"}}>
          <div><Input sx={{width:"100%",mb:4}} type="email" {...register("email")} placeholder="Enter Email"/></div>
          <div><Input sx={{width:"100%",mb:4}} type="password" {...register("password")} placeholder="Enter Password"/></div>
         <div style={{textAlign:"center"}}> <Button type="submit" variant="contained">Login</Button></div>
        </Box>
        </Box>
  );
}


export default LoginPage