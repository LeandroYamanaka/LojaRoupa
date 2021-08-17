import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import styles from '../../pages/Home/styles';
import Roupas from '../Roupas';

export default function Footer() {
 return (
   <View>
    <Text style={styles.footerTitle}>Você Também Pode Gostar</Text>
    <View style={{flexDirection: 'row'}}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={{marginHorizontal: 10}}>
                <Roupas img={require('../../assets/saia_longa.jpg')} cost="99,90">
                    Saia Longa
                </Roupas>
            </View>
            <View>
                <Roupas img={require('../../assets/vestido_jeans.jpg')} cost="129,90">
                    Vestido Jeans
                </Roupas>
            </View>
            <View>
                <Roupas img={require('../../assets/macacao_jeans_azul.jpg')} cost="119,90">
                    Saia Longa
                </Roupas>
            </View>
            <View style={{marginHorizontal: 10}}>
                <Roupas img={require('../../assets/short_estampado.jpg')} cost="129,90">
                    Short Estampado
                </Roupas>
            </View>
            <View>
                <Roupas img={require('../../assets/blusa_moletom.jpg')} cost="189,90">
                    Blusa Moletom
                </Roupas>
            </View>
            <View>
                <Roupas img={require('../../assets/jaqueta_jeans.jpg')} cost="199,90">
                    Jaqueta Jeans
                </Roupas>
            </View>
        </ScrollView>
    </View>
    <View style={{height: 500}}/>

   </View>
  );
}