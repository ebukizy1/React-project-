import axios from 'axios'
import React, { useCallback, useMemo, useState } from 'react'
import {useNavigate} from 'react-router-dom'

const AppUser = () => {
    const [data, setData] = useState([]);
    const navigate = useNavigate();

    const handleUserNavigate = useCallback((param)=>{
      navigate('/user', {state : {value : param}})
    }, []) 
  
    
      const appUserData = useCallback(async ()=>{
        try{
          const response = await axios.get('https://dummyjson.com/users');
            if(response.status === 200){
              setData(response.data.users);
            }

        }catch(error){
          console.log(error)
        }
      }, []);
      console.log(data)
      
      const userMemo = useMemo(()=>{
        if(data.length >0) {
          return data.map((value, index)=>(
            <div key={index} onClick={()=> handleUserNavigate(value)}>
                <div>
                    <img src={value.image} alt='value img' />
                    <p>{value.ip}</p>
                </div>
                <div>
                    <p>Address</p>
                    <div>
                      <p>{value.address.address}</p>
                      <p>{value.address.city}</p>
                    </div>
                </div>
            </div>   
          ))
        }
      }, [data, handleUserNavigate])
      
                      

       
    


  return (
    <div>
        <button onClick={appUserData}> click me</button>
        <div>{userMemo}</div>
    </div>
  )
}
export default AppUser

