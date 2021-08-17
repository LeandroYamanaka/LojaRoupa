import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import styles from '../../pages/Home/styles';

export default function Size(props) {
 return (
   <View>
   <TouchableOpacity style={[styles.sizeContainer, {backgroundColor: props.bgColor || '#FFF'}]}>
       <Text style={[styles.sizeText, {color: props.color || '#000' }]}>{props.children}</Text>
   </TouchableOpacity>
   </View>
  );
}