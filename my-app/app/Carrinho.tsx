import { View, Text, Pressable, StyleSheet, ScrollView, FlatList } from "react-native"
import { useRouter } from "expo-router"
import { SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";
import Botao from "@/components/Botao";
import CardCompra from "@/components/CardCompra"


export default function Carrinho(){

    const dados = [
        {
            "_id": "6a2c1b616187e8e065c53398",
            "linkAcesso": "https://portalsped.fazenda.mg.gov.br/portalnfce/sistema/qrcode.xhtml?p=31260618809277000800652580000189061101509526%7C2%7C1%7C1%7CC5F83403AEE954A6BB42167A1AC480FCD0F9EB3A",
            "local": "CASA FIDELIS LTDA",
            "dataEmissao": "12/06/2026 10:59:06",
            "cnpj": "188092770",
            "endereco": "AV. DOUTOR MANOEL ALVES PEREIRA, 277, CENTRO, 3107406 - BOM DESPACHO, MG",
            "valorTotal": 25.3,
            "produtos": [
                {
                    "nome": "ALHO GRAUDO KG",
                    "qtd": 0.055,
                    "un": "KG",
                    "valorTotal": 1.42
                },
                {
                    "nome": "COXINH ASA FR AUR IQF 1KG ",
                    "qtd": 1,
                    "un": "PC",
                    "valorTotal": 16.98
                },
                {
                    "nome": "ENERGETICO BALY MELANCIA S/ACU 473ML ",
                    "qtd": 1,
                    "un": "LT",
                    "valorTotal": 6.98
                }
            ],
            "__v": 0
        },
        {
            "_id" : "6a2c12cc55e9f6bcd09b976e",
            "linkAcesso": "https://portalsped.fazenda.mg.gov.br/portalnfce/sistema/qrcode.xhtml?p=31260618809277000800652580000180301214461177%7C2%7C1%7C1%7C0D3DC5A799A754F775EABEB13F600D3129F060A2",
            "local": "CASA FIDELIS LTDA",
            "dataEmissao": "08/06/2026 09:14:06",
            "cnpj": "188092770",
            "endereco": "AV. DOUTOR MANOEL ALVES PEREIRA, 277, CENTRO, 3107406 - BOM DESPACHO, MG",
            "valorTotal": 35.31,
            "produtos": [
                {
                    "nome": "MARIA MOLE FIDEL KG",
                    "qtd": 0.15,
                    "un": "KG",
                    "valorTotal": 7.19
                },
                {
                    "nome": "COX ASA TEMP RESF K",
                    "qtd": 0.764,
                    "un": "KG",
                    "valorTotal": 12.91
                },
                {
                    "nome": "REFRIG SUKITA LIMAO 2L ",
                    "qtd": 1,
                    "un": "PE",
                    "valorTotal": 7.49
                },
                {
                    "nome": "REFRIG PEPSI BLACK 2L ",
                    "qtd": 1,
                    "un": "PE",
                    "valorTotal": 8.99
                }
            ],
            "__v": 0
        }
    ]

    const router = useRouter();

    return(
        <SafeAreaView style={styles.principal}>  

            <View style={styles.header}>
                <Text></Text>
            </View>

            <FlatList data={dados}  style={{width: '100%', backgroundColor: '#919191'}} keyExtractor={(item) => item._id} renderItem={({item}) => (<CardCompra data={item.dataEmissao} conteudo={item} ></CardCompra>)}  contentContainerStyle={styles.main}/>

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