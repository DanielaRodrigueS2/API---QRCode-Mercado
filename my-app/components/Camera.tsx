import {CameraView, CameraType, useCameraPermissions} from 'expo-camera'
import { useState } from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import React from 'react'

type CameraProps ={
    visibilidade: boolean;
    setVisibilidade: React.Dispatch<React.SetStateAction<boolean>>
}

const Camera = (props: CameraProps) =>{

    const [facing, setFacing] = useState<CameraType>('back');
    const [permission, requestPermissiom] = useCameraPermissions();

    function toggleCameraFacing(){
        setFacing(current => (current === "back" ? "front" : "back"));
    }

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

    console.log('Aqui foi')

    return(
        <View style={styles.cameraContainer}>
            <CameraView 
                style={styles.camera}
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
            <Pressable onPress={() => props.setVisibilidade(false)}  
                style={{
                    position: 'absolute',
                    marginTop: 50,
                    marginRight: 30,
                    padding: 20 ,
                    alignSelf: 'flex-end'
                }} 
            >

                <Text style={{
                        fontSize: 28,
                        color: 'white',
                        alignSelf: 'center',
                    }}
                >
                    X
                </Text>
            </Pressable>
        </View>
    )

}

const styles = StyleSheet.create({
    permissao:{
        flex: 0.3,
        backgroundColor: '#62a0c4',
        alignItems: 'center',
        justifyContent: 'space-around',
        width: '80%',
        position: 'absolute',
        height: '50%',
        borderWidth: 5,
        borderRadius: 10,
        borderColor: 'black'
    },

    texto:{
        fontSize: 18,
        color: 'white',
        alignSelf: 'center',
    },

    botao:{
        backgroundColor: '#275791',
        borderWidth: 3,
        borderColor: 'black',
        borderRadius: 20,
        paddingHorizontal: 18,
        paddingVertical: 6,
        alignItems: 'center',
    },
    cameraContainer:{
        flex: 1,
        position: 'absolute',
        width: '100%',
        height: '100%',
    },
    camera:{
        width: '100%', 
        height: '100%',
    }
})

export default Camera