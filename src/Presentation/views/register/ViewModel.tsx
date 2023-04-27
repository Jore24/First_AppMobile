import React, { useState } from 'react';
import  {ApiDelivery} from '../../../Data/source/remote/api/ApiDelivery';



const RegisterViewModel = () => {
  const [values, setValues] = useState({
    name: '',
    lastname: '',
    phone: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const onChange = (property: string, value: any) => {
    setValues({ ...values, [property]: value });
  };

  const register = async () => {
    try{
      console.log("hola")
      const response = await ApiDelivery.post('/users/create', values);
      console.log(JSON.stringify(response.data));

    }catch (e){
      console.log('error'+e);
      console.log('hola, error!!')
      

    }
    
  };
  
  return {
    ...values,
    onChange,
    register,
  };
};

export default RegisterViewModel;
