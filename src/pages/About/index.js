import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from '../Home/styles';

export default function About() {
 return (
   <View style={styles.aboutcontainer}>
       <Image source={require('../../assets/bannerfooter.jpg')} 
       style={styles.aboutImagem} />
       <Text style={styles.aboutText}>
       A loja Bazzaar foi criada para você que quer renovar o guarda-roupa
        com consciência, estilo e economia. Explore, se divirta e crie seu próprio
        estilo. Conte com nossas inúmeras opções de vestuário e acessórios.
       </Text>
       <Image source={require('../../assets/bannerEnd.jpg')} 
       style={styles.aboutEnd}/>
   </View>
  );
}