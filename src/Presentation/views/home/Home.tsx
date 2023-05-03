import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  ToastAndroid,
} from 'react-native';
import { StackNavigationProp, StackScreenProps } from '@react-navigation/stack';
import RoundedButton from '../../components/RoundedButton';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native';
import { RootStackParamList } from '../../../../App';
import useViewModel from './ViewModel';
import CustomTextInput from '../../components/CustomTextInput';
import styles from './Styles';
import { useEffect } from 'react';

interface Props extends StackScreenProps <RootStackParamList, 'HomeScreen'> {};

export const HomeScreen = ({navigation, route}:Props) => {
  const { email, password, errorMessage, onChange, login, user } = useViewModel();

  useEffect(() => {
    if (errorMessage !== '') {
      ToastAndroid.show(errorMessage, ToastAndroid.SHORT);
    }
  }, [errorMessage]);
  
  useEffect(() => {
    if (user?.id !== null && user?.id !== undefined) {
      if(user.roles?.length! > 1){
        navigation.replace('RolesScreen');
      }
      else{
      navigation.replace('ProfileInfoScreen');
    }
    }

  }, [user]);

  return (
    <View style={styles.container}>
      <Image
        style={styles.imageBackground}
        source={require('../../../../assets/chef.jpg')}
      />

      <View style={styles.logoContainer}>
        <Image
          style={styles.logoImage}
          source={require('../../../../assets/logo.png')}
        />
        <Text style={styles.logoText}> FOOD APP </Text>
      </View>

      <View style={styles.form}>
        <CustomTextInput
          image={require('../../../../assets/email.png')}
          placeholder="Email"
          value={email}
          keyboardType="email-address"
          property="email"
          onChangeText={onChange}
        />

        <CustomTextInput
          image={require('../../../../assets/password.png')}
          placeholder="Password"
          value={password}
          keyboardType="default"
          property="password"
          onChangeText={onChange}
          secureTextEntry={true}
        />

        <View style={{ marginTop: 30 }}>
          <RoundedButton
            text="Entrar"
            onPress={() => login()}
          ></RoundedButton>
        </View>
        <View style={styles.formRegister}>
          <Text>¿No tienes cuenta? </Text>
          <TouchableOpacity
            onPress={() => navigation.navigate('RegisterScreen')}
          >
            <Text style={styles.formRegisterText}>Registrate</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

