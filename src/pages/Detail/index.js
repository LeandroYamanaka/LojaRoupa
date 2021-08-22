import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import styles from '../Home/styles';
import Size from '../../component/Size';
import Button from '../../component/Button';
import Footer from '../../component/Footer';


export default function Detail({navigation}) {

  navigation.setOptions({
    headerTitle: 'Camisa Cropped'
    
  })

 return (
   <ScrollView style={styles.detalheContainer}>
       <Image source={require('../../assets/camisa_cropped.jpg')}
         style={styles.detalheImagem}
         resizeMode="cover"
       />
       <View>
         <View>
           <Text style={[styles.detalheTitle, {fontSize: 24}]}>R$89,90</Text>
         </View>
         <View opacity={0.4}>
           <Text style={[styles.detalheTitle, {fontSize: 30}]}>Camisa Cropped</Text>
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
              Camisa Cropped
            </Text>
            <Text style={styles.sizeContent}>
              Camiseta feminina desenvolvida em viscose leve. 
              O modelo é cropped com comprimento curto. A gola é esporte e as mangas são curtas. 
              A peça tem dois bolsos na parte frontal. O fechamento é frontal por botões.
            </Text>
            <Text style={styles.sizeList}>
              Cor: Branco
            </Text>
            <Text style={styles.sizeList}>
              Composição: 100% Viscose
            </Text>
          </View>
          <Button/>
          <View style={styles.buttonLine}/>
       </View>
       <Footer/>
       <View style={{height: 800}}/>
   </ScrollView>
  );
}