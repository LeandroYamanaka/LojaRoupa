import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import styles from '../Home/styles';
import Size from '../../component/Size';
import Button from '../../component/Button';
import Footer from '../../component/Footer';


export default function Detail({navigation}) {

  navigation.setOptions({
    headerTitle: 'Short Estampado'
  })

 return (
   <ScrollView style={styles.detalheContainer}>
       <Image source={require('../../assets/short_estampado.jpg')}
         style={styles.macacaoImagem}
         resizeMode="cover"
       />
       <View>
         <View>
           <Text style={[styles.detalheTitle, {fontSize: 24}]}>R$89,90</Text>
         </View>
         <View opacity={0.4}>
           <Text style={[styles.detalheTitle, {fontSize: 30}]}>Short Estampado</Text>
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
              Short Estampado
            </Text>
            <Text style={styles.sizeContent}>
            Short masculino confecciondo em tecido plano com linho, fibra nobre de aspecto natural. 
            O modelo tem estampa floral, caimento soltinho e comprimento mais curto. Possui dois bolsos 
            frontais e um posterior. O cós tem elástico embutido e cordão para ajuste.
            </Text>
            <Text style={styles.sizeList}>
              Cor: Estampado
            </Text>
            <Text style={styles.sizeList}>
            Composição: 42% Algodão 38% Viscose 14% Modal 6% Linho | Forro do bolso 59% Algodão 41% Poliéster
            </Text>
          </View>
          <Button/>
          <View style={styles.buttonLine}/>
       </View>
       <Footer/>
       
   </ScrollView>
  );
}