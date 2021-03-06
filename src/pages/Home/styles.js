import { Dimensions, StyleSheet } from "react-native";

const styles = StyleSheet.create({

    //Logo//
    logo:{
    width: '100%',
    height: 50,
    marginTop: 10,
    marginBottom: 20,
    justifyContent: 'center'    
    },

    //Menu//
    menu:{
    flexDirection: 'row',
    width: '100%',
    height: 30,
    backgroundColor: '#c6c6c6',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 5
    },

    menuText:{
    marginHorizontal: 3
    },
    //Home//
    container:{
        flex: 1,
        width: '100%',
        backgroundColor: '#FFF'
    },

    header:{
        marginBottom: 8
    },

    headerImagem:{
        width: '100%',
        height: '14%'    
    },

    textContainer:{
        flexDirection: 'row',
        marginVertical: '5%',
        marginHorizontal: '5%',
        
    },

    text:{
        fontFamily: 'Anton_400Regular',
        fontSize: 26,
        marginHorizontal: '1%'
    },

    line:{
        borderBottomColor: '#D8D8D8',
        borderBottomWidth: 2
    },

    //Roupas//

    roupasContainer:{
        paddingVertical: '2%',
        alignItems: 'center',
        justifyContent: 'center'
    }, 

    roupasImagens:{
        width: 175,
        height: 225
    },

    roupasText:{
        fontSize: 16
    },

    //Detalhes//

    detalheContainer:{
        flex: 1,
        width: '100%',
        backgroundColor: '#FFF'
    },

    detalheImagem:{
        width: '100%',
        height: '60%'
    },

    detalheTitle:{
        fontFamily: 'Anton_400Regular',
        marginLeft: 10,
    },

    //Size//

    sizeContainer:{
        width: 150,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
        borderColor: '#e6e6e6',
        borderWidth: 3,
        marginHorizontal: 10
               
    },

    sizeText:{
        color: '#FFF',
        fontSize: 18,
        textAlign: 'center',
        textAlignVertical: 'center'
    },

    sizeContent:{
        fontSize: 16,
        lineHeight: 25,
        marginVertical: '2%',
        paddingHorizontal: '2%'
    },

    sizeTitle:{
        fontSize: 22,
        marginVertical: '2%'
    },

    sizeList:{
        fontSize: 16,
        lineHeight: 25
    },

    //Button//

    buttonContainer:{
        alignItems: 'center',
        justifyContent: 'center'
    },

    btnContainer:{
        width: '90%',
        height: 50,
        backgroundColor: '#17181a',
        borderRadius: 5,
        marginVertical: '5%',
        justifyContent: 'center',
        alignItems: 'center'
    },

    buttonTitle:{
        fontSize: 17,
        color: '#FFF'
    },

    buttonLine:{
        borderWidth: 1,
        borderBottomColor: '#DDD',
        marginVertical: '2%',
        
    },

    //Footer//

    footerTitle:{
        fontSize: 24,
        fontFamily: 'Anton_400Regular',
        marginVertical: '2%',
        paddingHorizontal: '2%'
    },

    //Macacao//

    macacaoImagem:{
        width: '100%',
        height: '36%'
    },

    //Banner//

    bannerImagem:{
        width: '100%',
        height: '19%',
        marginBottom: 10
    },

    bannerEnd:{
        width: '100%',
        height: '19%'
    },

    //Social//

    social:{
        width: '100%',
        height: 70,
        justifyContent:'center',
        alignItems: 'center',
        flexDirection: 'row',    
    },

    socialImagem:{
        width: 20,
        height: 20,
        marginHorizontal: 10
    },

    socialText:{
        alignSelf: 'center',
        fontSize: 18,
        fontFamily: 'Anton_400Regular'
    },

    //About//
    aboutContainer:{
        width: '100%',
        height: '100%'
    },

    aboutImagem:{
        width: '100%',
        height: '28%',
        marginTop: 15
    },

    aboutText:{
        marginTop: 10,
        marginLeft: 20,
        marginRight: 20,
        marginBottom: 10,
        fontSize: 18
    },

    aboutEnd:{
        width: '100%',
        height: '31%'
    },

    //Cards//

    cardImagem:{
        width: 110,
        height: 110,
        alignSelf: 'center',
        marginTop: 10          
    },

    cardText:{
        alignSelf: 'center',
        fontSize: 22,
        marginTop: 15,
        fontFamily: 'Anton_400Regular'
    },

    trasnferText:{
        alignSelf: 'center',
    },

    //Category//

    categoryImagem:{
        width: 110,
        height: 140,
        marginTop: 20
    },

    categoryText:{
        fontSize: 18,
        alignSelf: 'center',
        marginTop: 5
    }


});

export default styles;