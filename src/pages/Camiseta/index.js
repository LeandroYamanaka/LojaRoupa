import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import styles from '../Home/styles';
import Size from '../../component/Size';
import Button from '../../component/Button';
import Footer from '../../component/Footer';


export default function Detail({navigation}) {

  navigation.setOptions({
    headerTitle: 'Camiseta Manga Longa'
  })

 return (
   <ScrollView style={styles.detalheContainer}>
       <Image source={require('../../assets/camiseta_manga_longa.jpg')}
         style={styles.macacaoImagem}
         resizeMode="cover"
       />
       <View>
         <View>
           <Text style={[styles.detalheTitle, {fontSize: 24}]}>R$59,90</Text>
         </View>
         <View opacity={0.4}>
           <Text style={[styles.detalheTitle, {fontSize: 30}]}>Camiseta Manga Longa</Text>
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
              Camiseta Manga Longa
            </Text>
            <Text style={styles.sizeContent}>
            Camiseta masculina confeccionada em malha. A peça tem aplicação de bolso na parte frontal. 
            A modelagem é ampla. O decote é redondo e as mangas são longas.
            </Text>
            <Text style={styles.sizeList}>
              Cor: Azul
            </Text>
            <Text style={styles.sizeList}>
            Composição: 75% Algodão 25% Poliéster
            </Text>
          </View>
          <Button/>
          <View style={styles.buttonLine}/>
       </View>
       <Footer/>
       
   </ScrollView>
  );
}