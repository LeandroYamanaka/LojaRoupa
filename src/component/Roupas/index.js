import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import styles from '../../pages/Home/styles';

export default function Roupas(props) {

    function filterDesc(desc){
        if(desc.length < 27){
            return desc;
        }
        return `${desc.substring(0, 20)}...`;
    }

 return (
   <TouchableOpacity style={styles.roupasContainer} onPress={props.onClick}>
       <Image source={props.img}
       style={styles.roupasImagens}/>
       <Text style={styles.roupasText}>
        {filterDesc(props.children)}
       </Text>
       <View opacity={0.4}>
       <Text style={styles.roupasText}>{props.cost}</Text>
       </View>
   </TouchableOpacity>
  );
}