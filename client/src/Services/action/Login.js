import axios from 'axios'

export const registerPolice = async (data)=>{
    try {
      const res = await axios.post('http://localhost:8000/users/register/police',data,{
        headers:{
          'Content-Type': 'multipart/form-data'
        }
       })  
      return res
    } catch (error) {
        return error
    }
}