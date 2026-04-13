import { useState } from "react";
import { View, StyleSheet, Text, Button } from "react-native";

export default function Home(){

  const [contador, setContador] = useState<number>(0)

  const onClick = () =>{
    setContador(contador+1);
  }

  return(
    <View style={styles.principal}>
      <Text>Quantidade: {contador}</Text>
      <Button title="AumentaContador" onPress={onClick} color={"blue"}/>
    </View>
  );



}

const styles = StyleSheet.create({
  principal :{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})