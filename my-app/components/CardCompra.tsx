import { useState } from "react"
import { View, Pressable, Text, StyleSheet, FlatList } from "react-native"
import { Ionicons } from "@expo/vector-icons"

type CardCompraProps ={
    data: string
}

const CardCompra = (props: CardCompraProps) => {

    const [visivel, setVisivel] = useState<Boolean> (false);

    const alteraVisibilidade = () =>{
        setVisivel(!visivel);
    }

    return(
        <View style={stylesCardCompra.card}>
            <View  style={stylesCardCompra.header}>
                <Text  style={stylesCardCompra.texto}> Mês: {props.data}</Text>
                <Pressable onPress={alteraVisibilidade}>
                    <Ionicons name="chevron-down-outline" size={20} color='white'/>
                </Pressable>
            </View>

            {visivel && <View  style={stylesCardCompra.compras}></View>}

        </View>

    )

}

const stylesCardCompra = StyleSheet.create({
    card:{
        flex: 0.5,
        alignItems: 'center',
        flexDirection: 'column',
        width: '80%',
        height: 'auto'
    },

    header:{
        flex: 0.1,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        backgroundColor: 'black'
    },

    texto:{
        fontSize: 20,
        color: 'white'
    },

    compras:{
        flex: 0.9,
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'space-around',
        backgroundColor: '#275791',
    }

})

export default CardCompra