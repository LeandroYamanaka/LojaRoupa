import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from './pages/Home';
import Detail from './pages/Detail';
import Macacao from './pages/Macacao';
import Blusa from './pages/Blusa';
import Camiseta from './pages/Camiseta';
import Jaqueta from './pages/Jaqueta';
import Saia from './pages/Saia';
import Shorts from './pages/Shorts';
import Vestido from './pages/Vestido';


const Stack = createStackNavigator();


function Routes(){
    return(
        
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Home"
                    component={Home}
                    options={{headerShown: false}}
                />
                <Stack.Screen
                    name="Detail"
                    component={Detail}        
                />
                <Stack.Screen
                    name="Macacao"
                    component={Macacao}        
                />
                <Stack.Screen
                    name="Blusa"
                    component={Blusa}        
                />
                <Stack.Screen
                    name="Camiseta"
                    component={Camiseta}        
                />
                <Stack.Screen
                    name="Jaqueta"
                    component={Jaqueta}        
                />
                <Stack.Screen
                    name="Saia"
                    component={Saia}        
                />
                <Stack.Screen
                    name="Shorts"
                    component={Shorts}        
                />
                <Stack.Screen
                    name="Vestido"
                    component={Vestido}        
                />
            </Stack.Navigator>
        
        </NavigationContainer>
        
      
        
    );
}

export default Routes;