import { View, Text, Button, ImageBackground, Image, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import styles from "./styles";

// adiciona os inputs na segunda view

export default function Consulta() {

    const navegacao = useNavigation()

    return (
        <View>
            <ImageBackground
                source={require('../../../assets/images/Background.png')}
                resizeMode="cover"

            >
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => navegacao.navigate('Home')}
                ></TouchableOpacity>

            </ImageBackground>
        </View>
    )
}