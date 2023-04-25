import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  ToastAndroid,
} from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import RoundedButton from '../../components/RoundedButton';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native';
import { RootStackParamList } from '../../../../App';
import useViewModel from './ViewModel';
import CustomTextInput from '../../components/CustomTextInput';
import styles from './Styles';

export const HomeScreen = () => {
  const { email, password, onChange } = useViewModel();
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

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
            onPress={() => {
              console.log('Email: ' + email);
              console.log('Password: ' + password);
            }}
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

