import React, { useEffect, useState } from 'react';
import { ApiDelivery } from '../../../Data/source/remote/api/ApiDelivery';
import { RegisterAuthUseCase } from '../../../Domain/useCases/auth/RegisterAuth';
import * as ImagePicker from 'expo-image-picker';
import { RegisterWithImageAuthUseCase } from '../../../Domain/useCases/auth/RegisterWithImageAuth';
import { ImageInfo } from 'expo-image-picker';
import { SaveUserLocalUseCase } from '../../../Domain/useCases/userLocal/SaveUserLocal';
import { useUserLocal } from '../../hooks/userLocal';

const RegisterViewModel = () => {
  const [errorMessages, setErrorMessages] = useState('');
  const [values, setValues] = useState({
    name: '',
    lastname: '',
    phone: '',
    email: '',
    image: '',
    password: '',
    confirmPassword: '',
  });
  const [file, setFile] = useState<ImagePicker.ImageInfo>();
  const { user, getUserSession } = useUserLocal();
  const [loading, setLoading] = useState(false);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      quality: 0.5,
    });

    if (!result.canceled) {
      // libreria deprecated
      onChange('image', result.assets[0].uri);
      setFile(result.assets[0]);
    }
  };
  const takePhoto = async () => {
    let result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      quality: 0.5,
    });

    if (!result.canceled) {
      // libreria deprecated
      onChange('image', result.assets[0].uri);
      setFile(result.assets[0]);
    }
  };

  const onChange = (property: string, value: any) => {
    setValues({ ...values, [property]: value });
  };

  const register = async () => {
    if (isValidForm()) {
      setLoading(true);
      //const response = await RegisterAuthUseCase(values);
      const response = await RegisterWithImageAuthUseCase(values, file!);
      setLoading(false);
      console.log('result:' + JSON.stringify(response));
      if (response.success) {
        await SaveUserLocalUseCase(response.data);
        getUserSession();
      } else {
        setErrorMessages(response.message);
      }
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
    if (values.image === '') {
      setErrorMessages('La imagen es requerida');
      return false;
    }

    return true;
  };

  return {
    ...values,
    onChange,
    register,
    pickImage,
    takePhoto,
    user,
    errorMessages,
    loading,
  };
};

export default RegisterViewModel;
