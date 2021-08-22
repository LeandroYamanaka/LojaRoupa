import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from './pages/Home';
import About from './pages/About';
import Cards from './pages/Cards';
import Category from './pages/Category';
import {Entypo, Feather} from '@expo/vector-icons'

const Tab = createBottomTabNavigator();

export default function Tabs() {
 return (
    <Tab.Navigator 
    screenOptions={{
      tabBarStyle:{
        backgroundColor: '#121212',
        paddingBottom: 5,
        paddingTop: 5
      },
      tabBarActiveTintColor: '#FFF',

    }}
    >
        <Tab.Screen name="Home" component={Home} 
        options={{tabBarIcon:({size, color})=>(
        <Entypo name="home" size={size} color={color}/>
        )
        }}/>               
        <Tab.Screen name="Categoria" component={Category}
        options={{tabBarIcon:({size, color})=>(
        <Entypo name="open-book" size={size} color={color}/>
        )
        }}
        />               
        <Tab.Screen name="Sobre" component={About}
        options={{tabBarIcon:({size, color})=>(
        <Entypo name="news" size={size} color={color}/>
        )
        }}
        />               
        <Tab.Screen name="Cartões" component={Cards}
        options={{tabBarIcon:({size, color})=>(
        <Entypo name="credit-card" size={size} color={color}/>
        )
        }}
        />             
    </Tab.Navigator>
  );
}