import React from 'react';
import { View, Image, Text } from 'react-native';
import styles from '../Home/styles';

export default function Cards() {
 return (
   <View>
   <Text style={styles.cardText}>Formas de Pagamento</Text>
     <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
       <Image source={require('../../assets/visa.png')} style={styles.cardImagem}/>
       <Image source={require('../../assets/mastercard.png')} style={styles.cardImagem}/>
     </View>
     <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
       <Image source={require('../../assets/diners.png')} style={styles.cardImagem}/>
       <Image source={require('../../assets/american-express.png')} style={styles.cardImagem}/>
     </View>
     <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
       <Image source={require('../../assets/paypal.png')} style={styles.cardImagem}/>
       <View>
       <Image source={require('../../assets/transfer.png')} style={styles.cardImagem}/>
        <Text style={styles.transferText}>Transferência Bancária</Text>
        </View>
     </View>
   </View>
  );
}