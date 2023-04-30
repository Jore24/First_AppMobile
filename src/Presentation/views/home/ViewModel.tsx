import React, { useState } from 'react';
import { LoginAuthUseCase } from '../../../Domain/useCases/auth/LoginAuth';
import { SaveUserUseCase } from '../../../Domain/useCases/userLocal/SaveUser';
import { GetUserUseCase } from '../../../Domain/useCases/userLocal/GetUser';
import { useEffect } from 'react';
import {useUserLocal} from '../../hooks/userLocal';


const HomeViewModel = () => {
  const [errorMessage, setErrorMessage] = useState('');
  const [values, setValues] = useState({
    email: '',
    password: '',
  });
  const {user} = useUserLocal();
  console.log('user de sesión a través de los hooks: ', JSON.stringify(user));

  
  const onChange = (property: string, value: any) => {
    setValues({ ...values, [property]: value });
  };

  const login = async () => {
    if (isValidForm()) {
      const response = await LoginAuthUseCase(values.email, values.password);
      console.log('Response: ', JSON.stringify(response));
      if (!response.success) {
        setErrorMessage(response.message);
        return;
      }
      else{
        await SaveUserUseCase(response.data);
      }
    }
  };
  const isValidForm = (): boolean => {
    if (values.email === '') {
      setErrorMessage('El email es requerido');
      return false;
    }
    if (values.password === '') {
      setErrorMessage('La contraseña es requerida');
      return false;
    }

    return true;
  };

  return {
    ...values,
    errorMessage,
    user,
    onChange,
    login
    
  };
};

export default HomeViewModel;
