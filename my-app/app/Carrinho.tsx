import { View, Text, Pressable, StyleSheet } from "react-native"
import { useRouter } from "expo-router"
import { SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";
import Botao from "@/components/Botao";
import CardCompra from "@/components/CardCompra"


export default function Carrinho(){

    const router = useRouter();

    return(
        <SafeAreaView style={styles.principal}>  

            <View style={styles.header}>
                <Text></Text>
            </View>

            <View style={styles.main}>
                <CardCompra data="janeiro" ></CardCompra>
            </View>

            <View style={styles.footer}>
                <Botao onPress={() => router.navigate('/Carrinho')} nome="cart"></Botao>
                <Botao  onPress={() => router.navigate('/Home')} nome="camera"></Botao>
                <Botao nome="settings"></Botao>
            </View>
            
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    principal: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column'
    },

    header:{
        flex: 0.1,
        width: '100%',
        alignItems: 'center',
        backgroundColor: 'black'
    },
    main:{
        flex: 0.8,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        backgroundColor: '#919191'
    },
    footer:{
        flex: 0.1,
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        backgroundColor: 'black'
    },


})