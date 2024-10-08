import { View, Text, ImageBackground, Image, TouchableOpacity, ScrollView, SafeAreaView } from "react-native";
import React from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import styles from "./styles";
import { Dimensions } from "react-native";
import { SelectList } from 'react-native-dropdown-select-list'


export default function Home() {
    const route = useRoute()
    const navegacao = useNavigation()
    const { width, height } = Dimensions.get('window');
    
    const fontSizeVW = width * 0.06; // 5vw
    const fontSizeVH = height * 0.68; // 5vh
    
    const [selected, setSelected] = React.useState("3ºAndar");
    const [salas, setSalas] = React.useState("");

    

   
  

    
    const data = [
        { key: '3ºAndar', value: '3ºAndar', },
        { key: '2ºAndar', value: '2ºAndar' },
        { key: '1ºAndar', value: '1ºAndar' },
        { key: 'Pátio', value: 'Pátio', },
    ]
    const Salas = {
        'Pátio': [
            { key: '1', value: 'Sala 4', },
            { key: '2', value: 'Sala 5', },
            { key: '3', value: 'Sala 6', },
        ],
        '1ºAndar': [
            { key: '4', value: 'Sala 15', },
            { key: '5', value: 'Sala 16', },
            { key: '6', value: 'Sala 17', },
            { key: '7', value: 'Sala 18', },
            { key: '8', value: 'Sala 19', },
            { key: '9', value: 'Sala 20', },
        ],
        '2ºAndar': [
            { key: '10', value: 'Sala 24', },
            { key: '11', value: 'Sala 25', },
            { key: '12', value: 'Sala 26', },
            { key: '13', value: 'Sala 27', },
        ],
        '3ºAndar': [
            { key: '14', value: 'Sala 30', },
            { key: '15', value: 'Sala 33', },
        ],
    }

    return (
        <SafeAreaView>
            <ScrollView style={{ display: 'flex' }}>
                <View style={styles.background}>

                    <View style={styles.header}>
                        <Text style={styles.titulo}>Validação de Entrada</Text>
                        <Image style={styles.image}
                            source={require('../../../assets/images/ilustracaoQr.png')}
                        >
                        </Image>
                    </View>
                    <ImageBackground
                        source={require('../../../assets/images/BackgroundInv.png')}
                        resizeMode="cover"

                        style={{
                            height: fontSizeVH
                        }}
                    >
                        <View style={styles.section}>

                            <TouchableOpacity
                                style={styles.consulta}
                                onPress={() => navegacao.navigate('Consulta')}
                            >

                                <Text style={styles.textConsulta}>CONSULTA</Text>
                            </TouchableOpacity>


                            <View style={styles.input}>

                                <SelectList
                                    boxStyles={{ borderRadius: 0, backgroundColor: '#fff' }}
                                    inputStyles={{ color: '#000', fontWeight: '300' }}
                                    dropdownStyles={{ borderRadius: 0, backgroundColor: '#fff' }}
                                    dropdownItemStyles={{ borderStyle: 'solid', borderColor: '#000', borderWidth: 0.5 }}
                                    dropdownTextStyles={{ color: '#000', fontWeight: '300' }}

                                    setSelected={(val) => setSelected(val)}
                                    data={data}
                                    save="value"
                                    defaultOption={'Pátio'}
                                />
                                <SelectList
                                    boxStyles={{ borderRadius: 0, backgroundColor: '#fff' }}
                                    inputStyles={{ color: '#000', fontWeight: '300' }}
                                    dropdownStyles={{ borderRadius: 0, backgroundColor: '#fff' }}
                                    dropdownItemStyles={{ borderStyle: 'solid', borderColor: '#000', borderWidth: 0.5 }}
                                    dropdownTextStyles={{ color: '#000', fontWeight: '300' }}

                                    setSelected={(val) => setSalas(val)}
                                    data={Salas[selected]}
                                    save="value"
                                    defaultOption={Salas[selected][0]}
                                />

                            </View>
                            <TouchableOpacity
                                style={styles.escanear}
                                onPress={() => navegacao.navigate('Leitor', {
                                    selectedAndar: selected,
                                    selectedSala: salas
                                  })}
                            >

                                <Text style={styles.textEscanear}>ESCANEAR</Text>
                            </TouchableOpacity>
                        </View>
                    </ImageBackground>
                </View >
            </ScrollView>
        </SafeAreaView>
    )
}