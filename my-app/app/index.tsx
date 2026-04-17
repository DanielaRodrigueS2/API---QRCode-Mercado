import { useState } from "react";
import { View, StyleSheet, Text,Image, Pressable} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Botao from "@/components/Botao";

export default function Home(){

  const [contador, setContador] = useState<number>(0)

  const onClick = () =>{
    setContador(contador+1);
  }

  return(
    <SafeAreaView style={styles.principal}>
      <View style={styles.header}>
        <Text></Text>
      </View>

      <View style={styles.main}>
        <Image></Image>
        <Text style={styles.textScan}>Escaneie sua nota fiscal aqui</Text>

        <Pressable style={styles.botao}>
          <Text style={styles.textButton}>Scanner</Text>
        </Pressable>

      </View>

      <View style={styles.footer}>

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
    backgroundColor: 'gray'
  },
  footer:{
    flex: 0.1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: 'black'
  },
  botao:{
    backgroundColor: 'blue',
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
  }
})