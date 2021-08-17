import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import styles from '../Home/styles';
import Size from '../../component/Size';
import Button from '../../component/Button';
import Footer from '../../component/Footer';


export default function Detail({navigation}) {

  navigation.setOptions({
    headerTitle: 'Saia Longa'
  })

 return (
   <ScrollView style={styles.detalheContainer}>
       <Image source={require('../../assets/saia_longa.jpg')}
         style={styles.macacaoImagem}
         resizeMode="cover"
       />
       <View>
         <View>
           <Text style={[styles.detalheTitle, {fontSize: 24}]}>R$99,90</Text>
         </View>
         <View opacity={0.4}>
           <Text style={[styles.detalheTitle, {fontSize: 30}]}>Saia Longa</Text>
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
              Saia Longa
            </Text>
            <Text style={styles.sizeContent}>
            Saia feminina confeccionada em tecido plano com estampa listrada. 
            O modelo tem recorte e caimento rodado. O comprimento é longo. 
            Possui elástico embutido na parte posterior do cós.
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
       
   </ScrollView>
  );
}