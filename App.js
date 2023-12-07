import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import Inputs from './components/Inputs';
import Result from './components/Result';
import { Zocial } from "@expo/vector-icons";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor='#6a51ae' style='auto'/>
      <Stack.Navigator >
        <Stack.Screen name="Home" 
          options={{ 
            title: "   Electronic Coil Winding", 
            headerLeft: () => <Zocial name="windows" size={20} color="#fff" />,
            headerStyle: {
              backgroundColor: "#6a51ae",
            },
            contentStyle: {
              backgroundColor: "lightblue",
            }
          }} 
          component={Inputs} 
        />
        <Stack.Screen 
          name="Result" 
          options={{ 
            title: "Result Coil Winding",
            headerRight: () => <Zocial name="windows" size={20} color="#fff" />,
            headerStyle: {
              backgroundColor: "#6a51ae",
            },
          }} 
          component={Result} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },  
});
