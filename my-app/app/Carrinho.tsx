import { View, Text, Pressable } from "react-native"
import { useRouter } from "expo-router"



export default function Carrinho(){

    const router = useRouter();

    return(
        <View>  
            <Text>Carrinho</Text>
            <Pressable onPress={() => router.navigate('/Home')}>
                <Text>
                    Clique aqui
                </Text>
            </Pressable>
        </View>
    )
}