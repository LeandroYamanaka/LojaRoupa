import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import styles from '../Home/styles';
import Size from '../../component/Size';
import Button from '../../component/Button';
import Footer from '../../component/Footer';


export default function Detail({navigation}) {

  navigation.setOptions({
    headerTitle: 'Vestido Jeans'
  })

 return (
   <ScrollView style={styles.detalheContainer}>
       <Image source={require('../../assets/vestido_jeans.jpg')}
         style={styles.macacaoImagem}
         resizeMode="cover"
       />
       <View>
         <View>
           <Text style={[styles.detalheTitle, {fontSize: 24}]}>R$129,90</Text>
         </View>
         <View opacity={0.4}>
           <Text style={[styles.detalheTitle, {fontSize: 30}]}>Vestido Jeans</Text>
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
              Vestido Jeans
            </Text>
            <Text style={styles.sizeContent}>
            Vestido feminino confeccionado em jeans leve. A modelagem conta com gola esporte e fechamento 
            por botões, similar a uma camisa alongada. A peça é levemente acinturada. As mangas são curtas. 
            As laterais possuem passantes e acompanha faixa para amarração feita do mesmo tecido.
            </Text>
            <Text style={styles.sizeList}>
              Cor: Azul
            </Text>
            <Text style={styles.sizeList}>
            Composição: 100% Liocel
            </Text>
          </View>
          <Button/>
          <View style={styles.buttonLine}/>
       </View>
       <Footer/>
       
   </ScrollView>
  );
}