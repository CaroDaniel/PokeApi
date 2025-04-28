import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Aleatorios from './src/Componentes/Aleatorios';
import Capturados from './src/Componentes/Capturados_Originales';
import Favoritos from './src/Componentes/Favoritos';
import Listas from './src/Componentes/Listas';
import Usuarios from './src/Componentes/Usuarios';
import Pokemon from './src/Componentes/Pokemon';
import { TapGesture } from 'react-native-gesture-handler/lib/typescript/handlers/gestures/tapGesture';
import { createStackNavigator } from '@react-navigation/stack';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
function ListaStack() {
    return (
    <Stack.Navigator>
    <Stack.Screen name="Lista" component={Listas} />
    <Stack.Screen name="Pokemon" component={Pokemon} />
    </Stack.Navigator>
    );
   }
   

export default function App() {
    return (

        <NavigationContainer>
            <Tab.Navigator>
                <Tap.Screen name="ListaStack" component={ListaStack} />
                <Tap.Screen name="Aleatorios" component={Aleatorios} />
                <Tap.Screen name="Capturados" component={Capturados} />
                <Tap.Screen name="Favoritos" component={Favoritos} />
                <Tap.Screen name="Usuario" component={Usuarios} />
            </Tab.Navigator>
        </NavigationContainer>

    );
}