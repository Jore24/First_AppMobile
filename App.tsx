import { HomeScreen } from './src/Presentation/views/home/Home';

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RegisterScreen from './src/Presentation/views/register/Register';
import { View, Text, StyleSheet } from 'react-native';
import { ProfileInfoScreen } from './src/Presentation/views/profile/info/ProfileInfo';
import { RolesScreen } from './src/Presentation/views/roles/Roles';

export type RootStackParamList = {
  HomeScreen: undefined;
  RegisterScreen: undefined;
  ProfileInfoScreen: undefined;
  RolesScreen: undefined;
};
const Stack = createNativeStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: true,

          headerStyle: {
            backgroundColor: '#f4511e',
          },
        }}
      >
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ProfileInfoScreen"
          component={ProfileInfoScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="RolesScreen"
          component={RolesScreen}
          options={{ headerShown: true, title: 'Selecciona un rol' }}
        />

        <Stack.Screen
          name="RegisterScreen"
          component={RegisterScreen}
          options={{
            header: props => (
              <View style={{ backgroundColor: '#f4511e' }}>
                <Text
                  style={{
                    paddingVertical: 30,
                    marginTop: 10,
                  }}
                >
                  Register
                </Text>
              </View>
            ),
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
