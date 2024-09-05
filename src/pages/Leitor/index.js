import { CameraView, useCameraPermissions, Camera } from 'expo-camera';
import { CameraType } from 'expo-camera/build/legacy/Camera.types';
import React, { useState, useEffect } from 'react';
import { useNavigation } from "@react-navigation/native";
import { Button, StyleSheet, Text, View, Image, TouchableOpacity, ImageBackground } from 'react-native';
import styles from './styles';

export default function Leitor() {

  const enviarQRCodeParaAPI = async (qrCode) => {
    try {
      const response = await fetch('http://localhost:3000/api/qrcode', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ qrCode }),
      });
  
      const data = await response.json();
      if (response.ok) {
        console.log('QR Code enviado com sucesso:', data);
      } else {
        console.error('Erro ao enviar QR Code:', data);
      }
    } catch (error) {
      console.error('Erro na requisição:', error);
    }
  };
  

  const navegacao = useNavigation()

  const [facing, setFacing] = useState(CameraType.back);
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);

  useEffect(() => {
    const getCameraPermissions = async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === "granted");
    };

    getCameraPermissions();
  }, []);

  const handleBarcodeScanned = ({ data }) => {
    setScanned(true);
    alert(`QR-CODE scanneado com sucesso!`);
    
    // Enviar o QR Code para a API
    enviarQRCodeParaAPI(data);
  };
  

  if (hasPermission === null) {
    return <Text>Precisamos da permissão do uso da câmera para funcionar. </Text>;
  }
  if (hasPermission === false) {
    return <Text>Acesso negado!</Text>;
  }

  return (
    <View style={styles.container}>
      <CameraView
        onBarcodeScanned={scanned ? undefined : handleBarcodeScanned}
        barcodeScannerSettings={{
          barcodeTypes: ["qr", "pdf417"],
        }}
        style={StyleSheet.absoluteFillObject}
      />
      {scanned && (
        <Button title={"Aperte para scannear novamente!"} onPress={() => setScanned(false)} />
      )}
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={require('../../../assets/images/scanImg.png')}
        />
      </View>

      <ImageBackground
        style={styles.section}
        source={require('../../../assets/images/BackgroundInv.png')}
        resizeMode="cover"
      >
        <Text style={styles.textButton}>Escaneie o QR-Code</Text>
        <TouchableOpacity
          style={styles.button}
          resizeMode="cover"
          onPress={() => navegacao.navigate('Home')}
        >
          <Text style={styles.textButton}>VOLTAR</Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>

  );
}


