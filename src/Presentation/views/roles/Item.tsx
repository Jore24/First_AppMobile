import React from 'react';
import { TouchableOpacity, Text, Image, View, StyleSheet } from 'react-native/';
import { Rol } from '../../..//Domain//entitys///Rol';
import { MyColors } from '../../theme/AppTheme';


interface Props {
  rol: Rol;
  height: number;
  width: number;
}
export const RolesItem = ({ rol, height, width }: Props) => {
  return (
    <TouchableOpacity
      style={{ ...styles.container, height: height, width: width }}
    >
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={{ uri: rol.image }} />
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{rol.name}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    paddingBottom: 40,
    paddingHorizontal: 7,
  },
  image: {
    flex: 1,
    resizeMode: 'contain'
  },
  imageContainer: {
    flex: 1,
    backgroundColor: 'white',
    borderRadius: 18,
    
  },
  titleContainer:{
    height: 50,
    backgroundColor: MyColors.primary,
    borderBottomLeftRadius: 18,
    borderBottomRightRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title:{
    color: 'white',
  }
});
