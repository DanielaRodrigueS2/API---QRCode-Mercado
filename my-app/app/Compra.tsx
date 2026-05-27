import React from "react";
import { View, Text, Pressable } from "react-native";
import { Router, useRouter } from "expo-router";


type Produtos = {
    nome: string,
    valor: string,
    unidade: string,
    quantidade: string
}

export default function Compra(props : Produtos){

    const router = useRouter();

    return(
        <View>

        </View>
    )


}