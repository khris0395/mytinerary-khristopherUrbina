import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


const setUser = createAction("setUser", (datos)=>{
    return {
        payload:datos,
    }

})

const logout = createAction("logout");



const login = createAsyncThunk("login", async({email,password}) => {

    const credentials = {
        email:email,
        password:password
    }
    const response = await axios.post("http://localhost:8080/api/auth/signIn",credentials)
    
    localStorage.setItem("token",response.data.token)
    return response.data
   
    
})

const registerUser = createAsyncThunk(
    "user/register", 
    async (userData, { rejectWithValue }) => {
      try {
        const response = await axios.post(
          "http://localhost:8080/api/users/register", 
          userData
        );
        return response.data; // En caso de éxito, devolvemos los datos
      } catch (error) {
        // Si ocurre un error, devolvemos el mensaje de error
        return rejectWithValue(error.response?.data?.messages || "Error desconocido");
      }})

export {login,setUser,logout, registerUser};