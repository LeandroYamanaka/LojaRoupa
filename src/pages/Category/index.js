import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import styles from '../Home/styles';

export default function Category() {
 return (
   <View>
     <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
        <TouchableOpacity>
        <Image source={require('../../assets/feminino.jpg')} style={styles.categoryImagem}/>
        <Text style={styles.categoryText}>Feminino</Text>
        </TouchableOpacity>
        <TouchableOpacity>
        <Image source={require('../../assets/masculino.jpg')} style={styles.categoryImagem}/>
        <Text style={styles.categoryText}>Masculino</Text>
        </TouchableOpacity>
     </View>
     <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
        <TouchableOpacity>
        <Image source={require('../../assets/infantil.jpg')} style={styles.categoryImagem}/>
        <Text style={styles.categoryText}>Infantil</Text>
        </TouchableOpacity>
        <TouchableOpacity>
        <Image source={require('../../assets/moda_praia.jpg')} style={styles.categoryImagem}/>
        <Text style={styles.categoryText}>Moda Praia</Text>
        </TouchableOpacity>
     </View>
     <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
        <TouchableOpacity>        
        <Image source={require('../../assets/moda_intima.jpg')} style={styles.categoryImagem}/>
        <Text style={styles.categoryText}>Moda Íntima</Text>
        </TouchableOpacity>
        <TouchableOpacity>
        <Image source={require('../../assets/acessorios.jpg')} style={styles.categoryImagem}/>
        <Text style={styles.categoryText}>Acessórios</Text>
        </TouchableOpacity>
     </View>
   </View>
  );
}