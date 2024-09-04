import { View, Text, Button } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";


export default function Home(){

    const navegacao = useNavigation()

    return(
        <View>
            <Text>
                Homeeeeee
            </Text>
            <Button title='Navegar' onPress={() => navegacao.navigate('Leitor')} />
        </View>
    )
}