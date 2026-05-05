import React, { useState } from "react"
import { View, Pressable, Text, StyleSheet, FlatList } from "react-native"
import { Ionicons } from "@expo/vector-icons"
import CompraEspecifica from "./CompraEspecifica"

type Compras = {
    id: string,
    dataCompra: string,
    valor: String
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
                style={{width: '100%', backgroundColor: '#275791', padding: 10, minWidth: '100%', alignItems: 'center'}}
                contentContainerStyle={stylesCardCompra.compras}
                data={props.conteudo}
                keyExtractor={(item) => item.id}
                renderItem={({item}) => (
                    <CompraEspecifica id = {item.id} dataCompra={item.dataCompra} valor={item.valor}/>
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
        height: 'auto',
        backgroundColor: 'white'
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
        alignItems: 'center',
        justifyContent: 'center'
    }


})

export default CardCompra