import React from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity, ViewPropTypes } from 'react-native';
import styles from './styles';
import {MaterialIcons} from '@expo/vector-icons';
import Roupas from '../../component/Roupas';
import {useNavigation} from '@react-navigation/native';

export default function Home() {

  const navigation = useNavigation();

 return (
   <View style={styles.container}>
   <View>
     <Image source={require('../../assets/Logo.jpg')} style={styles.logo}/>
   </View>
      <View style={styles.header}>       
        <Image source={require('../../assets/banner.jpg')} 
        style={styles.headerImagem}/>
        <View style={styles.textContainer}>
          <Text style={styles.text}>Moda</Text>
          <Text style={styles.text}>•</Text>
          <Text style={styles.text}>Destaques</Text>
          <TouchableOpacity style={{position: 'absolute', right: 0, alignSelf: 'center'}}>
            <MaterialIcons name="filter-list"
              size={24}
              color="#000"
            />
          </TouchableOpacity>        
      </View>
        <View style={styles.line}/>
        <ScrollView style={{height: '100%'}}>
          <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
            <Roupas img={require('../../assets/camisa_cropped.jpg')}
            cost="R$89,90" onClick={()=>navigation.navigate('Detail')}>Camisa Cropped</Roupas>
            <Roupas img={require('../../assets/macacao_jeans_azul.jpg')}
            cost="R$119,90" onClick={()=>navigation.navigate('Macacao')}>Macacão Jeans Azul</Roupas>          
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
            <Roupas img={require('../../assets/saia_longa.jpg')}
            cost="R$99,90" onClick={()=>navigation.navigate('Saia')}>Saia Longa Listrada</Roupas>
            <Roupas img={require('../../assets/vestido_jeans.jpg')}
            cost="R$129,90" onClick={()=>navigation.navigate('Vestido')}>Vestido Jeans Longo</Roupas>          
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
            <Roupas img={require('../../assets/blusa_moletom.jpg')}
            cost="R$189,90" onClick={()=>navigation.navigate('Blusa')}>Blusa Moletom com Bolso Canguru</Roupas>
            <Roupas img={require('../../assets/camiseta_manga_longa.jpg')}
            cost="R$59,90" onClick={()=>navigation.navigate('Camiseta')}>Camiseta Manga Longa</Roupas>          
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
            <Roupas img={require('../../assets/jaqueta_jeans.jpg')}
            cost="R$199,90" onClick={()=>navigation.navigate('Jaqueta')}>Jaqueta Jeans</Roupas>
            <Roupas img={require('../../assets/short_estampado.jpg')}
            cost="R$129,90" onClick={()=>navigation.navigate('Shorts')}>Short Estampado</Roupas>          
          </View>          
          <View>
            <Image source={require('../../assets/bannerfooter.jpg')} style={styles.bannerImagem} />
          </View>
          <View style={{height: 480}}/>
          </ScrollView>
        </View>
   </View>
  );
}