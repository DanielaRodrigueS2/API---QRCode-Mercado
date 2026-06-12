import React, { useState } from "react"
import { View, Pressable, Text, StyleSheet, FlatList } from "react-native"
import { Ionicons } from "@expo/vector-icons"
import CompraEspecifica from "./CompraEspecifica"

interface Produtos {
    nome: string,
    qtd: number,
    un: string,
    valorTotal: number
}

interface Compras {
    _id: string,
    local: string,
    dataEmissao: string,
    cnpj: string,
    endereco: string
    valorTotal: number,
    produtos: Produtos[]
}

type CardCompraProps ={
    data: string
    conteudo: Compras
}

const CardCompra = (props: CardCompraProps) => {

    const [visivel, setVisivel] = useState<Boolean> (false);

    const alteraVisibilidade = () =>{
        console.log(visivel)
        setVisivel(!visivel);
        console.log(props.conteudo)
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
                keyExtractor={(item) => item._id}
                renderItem={({item}) => (
                    <CompraEspecifica id = {item._id} dataCompra={item.dataEmissao} valor={item.valorTotal}/>
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