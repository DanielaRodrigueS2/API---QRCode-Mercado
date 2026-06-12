import React , {useState} from "react";
import { Pressable, Text, View, StyleSheet } from "react-native";
import { useRouter } from "expo-router";

type CompraEspecifica = {
    id: string,
    dataCompra: string,
    valor: number,
}

const CompraEspecifica = (props: CompraEspecifica) => {

    const router = useRouter();

    return(
        <Pressable style={estiloCompras.clicavel}>
            <Text style={estiloCompras.texto}>ID: {props.id}</Text>
            <Text style={estiloCompras.texto}>Data: {props.dataCompra}</Text>
            <Text style={estiloCompras.texto}>Valor: {props.valor}</Text>
        </Pressable>
    )

}


const estiloCompras = StyleSheet.create({
    clicavel:{
        backgroundColor: 'black',
        alignItems: 'center',
        justifyContent: 'space-around',
        padding: 10,
        borderRadius: 20,
        width: '100%',
        margin: 5,
        flexDirection: 'row'
    },

    texto:{
        fontSize: 12,
        color: 'white'
    }
})

export default CompraEspecifica
