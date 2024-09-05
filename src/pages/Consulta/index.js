import { View, Text, ImageBackground, Image, TouchableOpacity, FlatList, SafeAreaView } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import styles from "./styles";
import { useState } from "react";

// Falta só a list

export default function Consulta() {

    const navegacao = useNavigation()

    return (
        <SafeAreaView>
            <View style={styles.container}>
                <ImageBackground
                    style={styles.background}
                    source={require('../../../assets/images/Background.png')}
                    resizeMode="cover"
                >
                    <View style={styles.section}>
                        <Image
                            style={styles.image}
                            source={require('../../../assets/images/LogoFeira.png')}
                        />
                        <Text style={styles.text}>Consulta</Text>
                        <TouchableOpacity
                            style={styles.button}
                            onPress={() => navegacao.navigate('Home')}
                        >
                            <Text style={styles.textButton}>VOLTAR</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.sectionList}>
                        <View style={styles.sectionRow}>
                            <Text style={styles.title}>Visita</Text>
                            <Text style={styles.title}>Sala</Text>
                            <Text style={styles.title}>Data e Hora</Text>
                        </View>

                        <FlatList

                        />

                    </View>
                </ImageBackground>
            </View>
        </SafeAreaView>
    )
}