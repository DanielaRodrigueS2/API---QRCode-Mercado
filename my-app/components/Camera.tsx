import {CameraView, CameraType, useCameraPermissions} from 'expo-camera'
import { useState } from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'

type CameraProps ={
    visibilidade: boolean;
    setVisibilidade: React.Dispatch<React.SetStateAction<boolean>>
}

const Camera = (props: CameraProps) =>{

    const [facing, setFacing] = useState<CameraType>('back');
    const [permission, requestPermissiom] = useCameraPermissions();

    if (!permission){
        // Permissao da camera carregando/recusada
        return <View></View>
    }

    if(!permission.granted){
        // Permissao nao foi garantida ainda
        return(
            <View style={styles.permissao}>
                <Text style={styles.texto}>Precisamos de permissão para acessar a câmera</Text>
                <Pressable onPress={requestPermissiom} style={styles.botao}>
                    <Text style={styles.texto}>
                        Garantir Permissao
                    </Text>
                </Pressable>
                <Pressable onPress={() => props.setVisibilidade(false)} style={styles.botao}>
                    <Text style={styles.texto}>Fechar</Text>
                </Pressable>
            </View>

        )
    }

    function toggleCameraFacing(){
        setFacing(current => (current === "back" ? "front" : "back"));
    }

    return(
        <View>
            <CameraView 
                facing={facing} 
                barcodeScannerSettings={
                    {
                        barcodeTypes: ["qr"],
                    }
                }
                onBarcodeScanned={
                    ({data}) =>{
                        console.log(data)
                    }
                }
            />
        </View>
    )

}

const styles = StyleSheet.create({
    permissao:{
        flex: 0.5,
        backgroundColor: '#62a0c4',
        alignItems: 'center',
        justifyContent: 'center',
        width: '80%'
    },

    texto:{
        fontSize: 20,
        color: 'white'
    },

    botao:{
        backgroundColor: '#275791',
        borderWidth: 3,
        borderColor: 'black',
        borderRadius: 20,
        paddingHorizontal: 18,
        paddingVertical: 6
    },
    camera:{
        flex: 1
    }
})

export default Camera