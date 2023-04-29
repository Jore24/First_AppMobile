import React, { useState } from 'react';
import  {ApiDelivery} from '../../../Data/source/remote/api/ApiDelivery';
import { RegisterAuthUseCase } from '../../../Domain/useCases/auth/registerAuth';



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
      const {result, error} = await RegisterAuthUseCase(values);
      console.log("result: "+JSON.stringify(result));
      console.log("error: "+error);

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
