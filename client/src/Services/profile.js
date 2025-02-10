import axios from 'axios'

const userData = localStorage.getItem("user-info"); 

const userObject = JSON.parse(userData);

const token = userObject?.token;  

console.log("Token:", token); 

export const getUserDetails = async()=>{
    try {
      const res = await axios.get(`http://localhost:8000/users/citizendetails`,{
        headers: {
            Authorization: `Bearer ${token}`,
          },
      }) 
      return res; 
    } catch (error) {
        return error
    }
}

export const updateUserDetails = async (data)=>{
    try {
       const res = await axios.put(`http://localhost:8000/users/updatedetails`,data,{
        headers: {
            Authorization: `Bearer ${token}`,
          },
      }) 
      return res;
    } catch (error) {
        return error
    }
}