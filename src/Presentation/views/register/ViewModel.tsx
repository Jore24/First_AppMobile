import React, { useEffect, useState } from 'react';
import { ApiDelivery } from '../../../Data/source/remote/api/ApiDelivery';
import { RegisterAuthUseCase } from '../../../Domain/useCases/auth/RegisterAuth';

const RegisterViewModel = () => {
  const [errorMessages, setErrorMessages] = useState('');
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
    if (isValidForm()) {
      const response = await RegisterAuthUseCase(values);
      console.log('result: del view model' + JSON.stringify(response));
    }
  };
  const isValidForm = (): boolean => {
    if (values.name === '') {
      setErrorMessages('El nombre es requerido');
      return false;
    }
    if (values.lastname === '') {
      setErrorMessages('El apellido es requerido');
      return false;
    }
    if (values.phone === '') {
      setErrorMessages('El telefono es requerido');
      return false;
    }
    if (values.email === '') {
      setErrorMessages('El email es requerido');
      return false;
    }
    if (values.password === '') {
      setErrorMessages('La contraseña es requerida');
      return false;
    }
    if (values.confirmPassword === '') {
      setErrorMessages('La confirmacion de contraseña es requerida');
      return false;
    }
    if (values.password !== values.confirmPassword) {
      setErrorMessages('Las contraseñas no coinciden');
      return false;
    }

    return true;
  };

  return {
    ...values,
    onChange,
    register,
    errorMessages,
  };
};

export default RegisterViewModel;
