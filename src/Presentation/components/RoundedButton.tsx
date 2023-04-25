import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { MyColors } from '../theme/AppTheme';

interface Props {
  text: string;
  onPress: () => void;
}

const RoundedButton = ({ text, onPress }: Props) => {
  return (
    <TouchableOpacity style={styles.roundedButton} onPress={() => onPress()}>
      <Text style={styles.textButton}>{text}</Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  roundedButton: {
    backgroundColor: MyColors.primary,
    width: '100%',
    height: 43,
    borderRadius: 50,
    justifyContent: 'center',
    marginBottom: 20,
  },
  textButton: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 15,
    textAlign: 'center',
    padding: 10,
  },
});

export default RoundedButton;
