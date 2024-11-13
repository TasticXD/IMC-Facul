import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Calculadora from './telas/Calculadora';
import Inicial from './telas/Inicial';
import Camera from './telas/Camera';
import PesquisarAPI from './telas/PesquisarAPI';
const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Inicial'>
        <Stack.Screen name="Inicial" component={Inicial} options={({ navigation }) => ({ navigation })} />
        <Stack.Screen name="Calculadora" component={Calculadora} />
        <Stack.Screen name="Camera" component={Camera} />
        <Stack.Screen name= "PesquisarAPI" component={PesquisarAPI}/> 
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
