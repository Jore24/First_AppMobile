//import React, {useState} from 'react';
import React, { ScrollView} from 'react-native';
//react-native-keyboard-aware-scroll-view
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  ToastAndroid,
  ActivityIndicator,
} from 'react-native';
import { StackNavigationProp, StackScreenProps } from '@react-navigation/stack';
import RoundedButton from '../../components/RoundedButton';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native';
import { RootStackParamList } from '../../../../App';
import useViewModel from './ViewModel';
import CustomTextInput from '../../components/CustomTextInput';
import styles from './Styles';
import { useEffect, useState } from 'react';
import ModalPickImage from '../../components/ModalPickImage';
import { MyColors } from '../../theme/AppTheme';

interface Props extends StackScreenProps <RootStackParamList, 'RegisterScreen'> {};


const RegisterScreen = ({navigation, route}: Props ) => {

  const {
    name,
    lastname,
    phone,
    email,
    password,
    confirmPassword,
    errorMessages,
    image,
    user,
    loading,
    onChange,
    register,
    pickImage,
    takePhoto
  } = useViewModel();
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    if (errorMessages !== '') {
      ToastAndroid.show(errorMessages, ToastAndroid.LONG);
    }
  }, [errorMessages]);

  useEffect(() => {
    if (user?.id !== null && user?.id !== undefined) {
      navigation.replace('ProfileInfoScreen');
    }

  }, [user]);

  //const onRegister = async () => {
  //  await register();
  //};

  return (
    <View style={styles.container}>

      <Image
        style={styles.imageBackground}
        source={require('../../../assets/../../assets/chef.jpg')}
      />
      
      <View style={styles.logoContainer}>
        <TouchableOpacity onPress={() => setModalVisible(true)}> 
        {
          image == ''
          ?  
            <Image
            style={styles.logoImage}
            source={require('../../../../assets/user_image.png')}
            />
         : 
           <Image
           style={styles.logoImage}
           source={{uri: image}}
        />
        }
         
          
        </TouchableOpacity>
        <Text style={styles.logoText}> SELECCIONA UNA IMAGEN </Text>
        
      </View>
   

      <View style={styles.form}>
        <ScrollView>
          <Text style={styles.formText}>REGISTRARSE</Text>
          <CustomTextInput
            image={require('../../../../assets/user.png')}
            placeholder="Nombres"
            value={name}
            keyboardType="default"
            property="name"
            onChangeText={onChange}
            secureTextEntry={false}
          />
          <CustomTextInput
            image={require('../../../../assets/my_user.png')}
            placeholder="Apellidos"
            value={lastname}
            keyboardType="default"
            property="lastname"
            onChangeText={onChange}
            secureTextEntry={false}
          />
          <CustomTextInput
            image={require('../../../../assets/email.png')}
            placeholder="Correo Electrónico"
            value={email}
            keyboardType="email-address"
            property="email"
            onChangeText={onChange}
            secureTextEntry={false}
          />

          <CustomTextInput
            image={require('../../../../assets/user.png')}
            placeholder="Teléfono"
            value={phone}
            keyboardType="phone-pad"
            property="phone"
            onChangeText={onChange}
            secureTextEntry={false}
          />
          <CustomTextInput
            image={require('../../../../assets/password.png')}
            placeholder="Contraseña"
            value={password}
            keyboardType="default"
            property="password"
            onChangeText={onChange}
            secureTextEntry={true}
          />
          <CustomTextInput
            image={require('../../../../assets/confirm_password.png')}
            placeholder="Confirmar Contraseña"
            value={confirmPassword}
            keyboardType="default"
            property="confirmPassword"
            onChangeText={onChange}
            secureTextEntry={true}
          />

          <View style={{ marginTop: 30 }}>
            <RoundedButton
              text="Registrarse"
              onPress={() => register()}
            ></RoundedButton>
          </View>
        </ScrollView>
      </View>
      <ModalPickImage
        openGallery={ pickImage}
        openCamera={ takePhoto}
        modalUseState={modalVisible}
        setModalUseState={setModalVisible}
      />
      {
        loading &&
        <ActivityIndicator style = {styles.loading} size="large" color={MyColors.primary} />
      }

    </View>
  );
};
export default RegisterScreen;
