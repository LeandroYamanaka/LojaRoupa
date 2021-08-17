import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import styles from '../Home/styles';
import Size from '../../component/Size';
import Button from '../../component/Button';
import Footer from '../../component/Footer';


export default function Detail({navigation}) {

  navigation.setOptions({
    headerTitle: 'Blusa Moletom'
  })

 return (
   <ScrollView style={styles.detalheContainer}>
       <Image source={require('../../assets/blusa_moletom.jpg')}
         style={styles.macacaoImagem}
         resizeMode="cover"
       />
       <View>
         <View>
           <Text style={[styles.detalheTitle, {fontSize: 24}]}>R$189,90</Text>
         </View>
         <View opacity={0.4}>
           <Text style={[styles.detalheTitle, {fontSize: 30}]}>Blusa Moletom</Text>
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
              Blusa Moletom
            </Text>
            <Text style={styles.sizeContent}>
            Blusão masculino confeccionado em moletom. O modelo tem caimento solto ao corpo e as 
            mangas longas com acabamento em ribana. Possui bolso frontal aplicado tipo canguru e a 
            gola com capuz.
            </Text>
            <Text style={styles.sizeList}>
              Cor: Azul
            </Text>
            <Text style={styles.sizeList}>
            Composição: 75% Algodão 25% Poliéster | Forro de Capuz 50% Algodão 50% Poliéster
            </Text>
          </View>
          <Button/>
          <View style={styles.buttonLine}/>
       </View>
       <Footer/>
       
   </ScrollView>
  );
}