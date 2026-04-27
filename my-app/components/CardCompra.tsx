import React, { useState } from "react"
import { View, Pressable, Text, StyleSheet, FlatList } from "react-native"
import { Ionicons } from "@expo/vector-icons"

type Compras = {
    id: string,
    nome: string
}

type CardCompraProps ={
    data: string
    conteudo: Compras[]
}

const CardCompra = (props: CardCompraProps) => {

    const [visivel, setVisivel] = useState<Boolean> (false);

    const alteraVisibilidade = () =>{
        console.log(visivel)
        setVisivel(!visivel);
    }

    return(
        <View style={stylesCardCompra.card}>
            <View  style={stylesCardCompra.header}>
                <Text  style={stylesCardCompra.texto}>{props.data}</Text>
                <Pressable onPress={alteraVisibilidade} style={stylesCardCompra.botao}>
                    <Ionicons name="chevron-down-outline" size={25} color='white' />
                </Pressable>
            </View>

            {visivel && (
                <FlatList
                    style={{backgroundColor: '#275791', width: '100%'}}
                    contentContainerStyle={stylesCardCompra.compras}
                    data={props.conteudo}
                    keyExtractor={(item) => item.id}
                    renderItem={({item}) => (
                        <Text>
                            {item.nome}
                        </Text>
                    )}
                    scrollEnabled={false}
                />



            )}

        </View>

    )

}

const stylesCardCompra = StyleSheet.create({
    card:{
        marginVertical: 10,
        flexDirection: 'column',
        width: '80%',
        height: 'auto'
    },

    header:{
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        backgroundColor: 'black',
        padding: 15,
    },

    texto:{
        fontSize: 20,
        color: 'white'
    },

    botao:{
        marginRight: 10,
        marginTop: 5
    },

    compras:{
        padding: 10
    }

})

export default CardCompra