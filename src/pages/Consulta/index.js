import { View, Text, ImageBackground, Image, TouchableOpacity, FlatList, SafeAreaView } from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import styles from "./styles";

export default function Consulta() {
    const navegacao = useNavigation();
    const [qrcodes, setQRCodes] = useState([]);

    // Função para buscar QR Codes da API
    const buscarQRCodes = async () => {
        try {
            
            const response = await fetch('http://192.168.100.10:3000/api/qrcodes');
            const data = await response.json();
            if (response.ok) {
                setQRCodes(data.qrcodes); // Armazena os QR Codes no estado
            } else {
                console.error('Erro ao buscar QR Codes:', data);
            }
        } catch (error) {
            console.error('Erro na requisição:', error);
        }
    };

    
    useEffect(() => {
        buscarQRCodes();
    }, []);

  
    const renderItem = ({ item }) => (
        <View style={styles.sectionRow}>
            <Text style={styles.title}>{item.id}</Text>
            <Text style={styles.title}>{item.code}</Text>
        </View>
    );

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
                            <Text style={styles.title}>ID</Text>
                            <Text style={styles.title}>QR Code</Text>
                        </View>

                        <FlatList
                            data={qrcodes} // Dados que serão renderizados
                            renderItem={renderItem} // Função que renderiza cada item
                            keyExtractor={(item) => item.id.toString()} // Chave única para cada item
                        />
                    </View>
                </ImageBackground>
            </View>
        </SafeAreaView>
    );
}

