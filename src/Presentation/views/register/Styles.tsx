import React from 'react';
import { StyleSheet } from 'react-native';

const RegisterStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  loading: {
    position: 'absolute',
    bottom: 0,
    top: 0,
    right: 0,
    left: 0,
  },
  imageBackground: {
    width: '100%',
    height: '100%',
    opacity: 0.7,
    bottom: '30%',
  },
  form: {
    width: '100%',
    height: '72%',
    backgroundColor: 'white',
    position: 'absolute',
    bottom: 0,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    padding: 30,
  },
  formText: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  formTextInput: {
    flex: 1,
    borderBottomWidth: 1,
    borderBottomColor: 'black',
    marginLeft: 15,
  },
  formInput: {
    flexDirection: 'row',
    marginTop: 24,
  },
  logoContainer: {
    position: 'absolute',
    alignSelf: 'center',
    top: '2%',
    alignItems: 'center',
  },
  formIcon: {
    width: 25,
    height: 25,
    marginRight: 10,
    marginTop: 5,
  },
  logoImage: {
    width: 100,
    height: 100,
  },
  logoText: {
    color: 'white',
    fontSize: 20,
    marginTop: 10,
    fontWeight: 'bold',
  },
  formRegister: {
    marginTop: 20,
    alignSelf: 'center',
    flexDirection: 'row',
  },
  formRegisterText: {
    color: 'orange',
    fontStyle: 'italic',
    borderBottomWidth: 1,
    borderBottomColor: 'orange',
    fontWeight: 'bold',
  },
});

export default RegisterStyles;
