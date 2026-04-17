import React from "react";
import { View, Pressable, StyleSheet } from "react-native";
import {Ionicons} from '@expo/vector-icons'

type ButtonProps = {
    nome: React.ComponentProps<typeof Ionicons>['name'],
    onPress?: () => void;
}

const Botao = (props : ButtonProps) =>{

    return(
        <View>
            <Pressable onPress={props.onPress} style={styles.botao}>
                <Ionicons name={props.nome} size={40} color="white" />
            </Pressable>
        </View>

    )
}

const styles = StyleSheet.create({
    botao:{
        backgroundColor: 'black'
    }
})

export default Botao;