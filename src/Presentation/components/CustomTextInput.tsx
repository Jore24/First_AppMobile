import React from 'react';
import { StyleSheet } from 'react-native';
import { View, Image, TextInput, KeyboardType } from 'react-native';

interface Props {
  image: any;
  placeholder: string;
  value: string;
  keyboardType: KeyboardType;
  secureTextEntry?: boolean;
  property: string;
  onChangeText: (property: string, value: any) => void;
}
const CustomTextInput = ({
  image,
  placeholder,
  value,
  keyboardType,
  secureTextEntry = false,
  property,
  onChangeText,
}: Props) => {
  return (
    <View style={styles.formInput}>
      <Image style={styles.formIcon} source={image} />
      <TextInput
        style={styles.formTextInput}
        placeholder={placeholder}
        keyboardType={keyboardType}
        value={value}
        onChangeText={text => onChangeText(property, text)}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  formIcon: {
    width: 25,
    height: 25,
    marginRight: 10,
    marginTop: 5,
  },
  formTextInput: {
    flex: 1,
    borderBottomWidth: 1,
    borderBottomColor: 'black',
    marginLeft: 15,
  },
  formInput: {
    flexDirection: 'row',
    marginTop: 25, //tamaño de la separacion entre los inputs
  },
});
export default CustomTextInput;
