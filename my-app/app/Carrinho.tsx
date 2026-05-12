import { View, Text, Pressable, StyleSheet, ScrollView, FlatList } from "react-native"
import { useRouter } from "expo-router"
import { SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";
import Botao from "@/components/Botao";
import CardCompra from "@/components/CardCompra"


export default function Carrinho(){

    const dados = [
        {
            id: '1',
            mes: 'Janeiro',
            compras: [
                {
                    id: '1', dataCompra: '21/01/2026', valor: '200',
                    produtos:[
                        {nome: 'Abacaxi', valor: '50', unidade: 'kg', quantidade: '0.20'},
                        {nome: 'Suco-Melancia', valor: '10', unidade: 'qtd', quantidade: '2'},
                        {nome: 'Banana', valor: '10', unidade: 'kg', quantidade: '0.6'}
                    ]
                },
                {
                    id: '2', dataCompra: '25/01/2026', valor: '150'
                }
            ]
        },
        {
            id: '2',
            mes: 'Fevereiro',
            compras: [
                {
                    id: '1', dataCompra: '03/02/2026', valor: '90'
                },
                {
                    id: '2', dataCompra: '23/02/2026', valor: '300'
                }
            ]
        }

    ]


    const router = useRouter();

    return(
        <SafeAreaView style={styles.principal}>  

            <View style={styles.header}>
                <Text></Text>
            </View>

            <FlatList data={dados}  style={{width: '100%', backgroundColor: '#919191'}} keyExtractor={(item) => item.id} renderItem={({item}) => (<CardCompra data={item.mes} conteudo={item.compras} ></CardCompra>)}  contentContainerStyle={styles.main}/>

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
        flex:0.1,
        width: '100%',
        alignItems: 'center',
        backgroundColor: 'black'
    },
    main:{
        flex: 0.8,
        alignItems: 'center',
        flexDirection: 'column',
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