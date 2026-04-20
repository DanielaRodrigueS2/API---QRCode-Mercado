import { useState } from "react";
import { View, StyleSheet, Text,Image, Pressable} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Camera from "@/components/Camera";
import Botao from "@/components/Botao";

export default function Home(){

  const [contador, setContador] = useState<number>(0);
  const [visivel, setVisivel] = useState(false);

  return(
    <SafeAreaView style={styles.principal}>
      <View style={styles.header}>
        <Text></Text>
      </View>

      <View style={styles.main}>
        <Image source={require("../assets/images/qrCode.png")} style={styles.imagem}></Image>
        <Text style={styles.textScan}>Escaneie sua nota fiscal aqui</Text>

        <Pressable style={({pressed}) => [
            {
              backgroundColor: pressed ? 'darkblue' : 'blue',
              opacity: pressed ? 0.7 : 1,
              top: pressed ? 4 : 0
            },
            styles.botao
          ]}
          onPress={() => setVisivel(true)}
        >
          <Text style={styles.textButton}>Scanner</Text>
        </Pressable>

        {visivel && <Camera visibilidade={visivel}  setVisibilidade={setVisivel}/>}

      </View>

      <View style={styles.footer}>
        <Botao nome="cart"></Botao>
        <Botao nome="camera"></Botao>
        <Botao nome="settings"></Botao>
      </View>
    </SafeAreaView>
  );

}

const styles = StyleSheet.create({
  principal :{
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
  botao:{
    backgroundColor: '#275791',
    borderWidth: 3,
    borderColor: 'black',
    borderRadius: 20,
    paddingHorizontal: 18,
    paddingVertical: 6
  },
  textButton:{
    color: 'white',
    fontSize: 20
  },
  textScan:{
    color: 'black',
    fontSize: 25,
    margin: 20
  },
  imagem:{
    width: 256,
    height: 310
  }
})