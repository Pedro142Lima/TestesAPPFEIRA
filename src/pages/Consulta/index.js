import { View, Text, ImageBackground, Image, TouchableOpacity, FlatList, SafeAreaView } from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import styles from "./styles";

const fetchWithTimeout = (url, options, timeout = 10000) => { // Timeout aumentado para 10 segundos
  return Promise.race([
    fetch(url, options),
    new Promise((_, reject) =>
      setTimeout(() => reject(new Error('Request timed out')), timeout)
    )
  ]);
};

const buscarQRCodes = async () => {
  try {
    const response = await fetchWithTimeout('http://192.168.100.10:3000/api/qrcodes');
    const data = await response.json();
    if (response.ok) {
      console.log('QR Codes recebidos:', data.qrcodes);
      setQRCodes(data.qrcodes);
    } else {
      console.error('Erro ao buscar QR Codes:', data);
    }
  } catch (error) {
    console.error('Erro na requisição:', error);
  }
};

export default function Consulta() {
  const navegacao = useNavigation();
  const [qrcodes, setQRCodes] = useState([]);

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
