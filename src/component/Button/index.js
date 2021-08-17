import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from '../../pages/Home/styles';

export default function Button() {
 return (
   <View style={styles.buttonContainer}>
       <TouchableOpacity style={styles.btnContainer}>
           <Text style={styles.buttonTitle}>Comprar</Text>
       </TouchableOpacity>
   </View>
  );
}