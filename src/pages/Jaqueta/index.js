import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import styles from '../Home/styles';
import Size from '../../component/Size';
import Button from '../../component/Button';
import Footer from '../../component/Footer';


export default function Detail({navigation}) {

  navigation.setOptions({
    headerTitle: 'Jaqueta Jeans'
  })

 return (
   <ScrollView style={styles.detalheContainer}>
       <Image source={require('../../assets/jaqueta_jeans.jpg')}
         style={styles.macacaoImagem}
         resizeMode="cover"
       />
       <View>
         <View>
           <Text style={[styles.detalheTitle, {fontSize: 24}]}>R$199,90</Text>
         </View>
         <View opacity={0.4}>
           <Text style={[styles.detalheTitle, {fontSize: 30}]}>Jaqueta Jeans</Text>
         </View>
         <View style={{flexDirection: 'row', width: '100%'}}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <Size bgColor="#17181a" color="#FFF">P</Size>
              <Size>M</Size>
              <Size>G</Size>
            </ScrollView>            
         </View>
          <View style={styles.sizeContent}>
            <Text style={styles.sizeTitle}>
              Jaqueta Jeans
            </Text>
            <Text style={styles.sizeContent}>
            Jaqueta masculina confeccionada em jeans. O modelo é trucker com recortes, 
            caimento reto, manga longa com punhos e gola esporte. Possui quatro bolsos 
            frontais sendo dois com lapela. O fechamento é por vista com botões. 
            Possui recorte interno em pelo sintético.
            </Text>
            <Text style={styles.sizeList}>
              Cor: Azul
            </Text>
            <Text style={styles.sizeList}>
            Composição: 100% Algodão | Forro de bolso 50% Algodão 50% Poliéster | Forro da gola 100% Poliéster
            </Text>
          </View>
          <Button/>
          <View style={styles.buttonLine}/>
       </View>
       <Footer/>
       
   </ScrollView>
  );
}