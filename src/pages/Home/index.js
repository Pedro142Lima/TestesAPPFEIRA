import { View, Text, ImageBackground, Image, TouchableOpacity, ScrollView, SafeAreaView } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import styles from "./styles";


export default function Home() {

    const navegacao = useNavigation()
    const [selected, setSelected] = React.useState("3ºAndar");
    const [salas, setSalas] = React.useState("");

    const data = [
        { key: '3ºAndar', value: '3ºAndar', },
        { key: '2ºAndar', value: '2ºAndar' },
        { key: '1ºAndar', value: '3ºAndar' },
        { key: 'Pátio', value: 'Pátio', },
    ]
    const Salas = {
        'Pátio': [
            { key: '1', value: 'Sala4', },
            { key: '2', value: 'Sala5', },
            { key: '3', value: 'Sala6', },
        ],
        '1ºAndar': [
            { key: '4', value: 'Sala15', },
            { key: '5', value: 'Sala16', },
            { key: '6', value: 'Sala17', },
            { key: '7', value: 'Sala18', },
            { key: '8', value: 'Sala19', },
            { key: '9', value: 'Sala20', },
        ],
        '2ºAndar': [
            { key: '10', value: 'Sala24', },
            { key: '11', value: 'Sala25', },
            { key: '12', value: 'Sala26', },
            { key: '13', value: 'Sala27', },
        ],
        '3ºAndar': [
            { key: '14', value: 'Sala30', },
            { key: '15', value: 'Sala33', },
        ],
    }

    return (

        <SafeAreaView>
            <ScrollView>

                <View style={styles.container}>

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
                    >
                        <View style={styles.section}>
                            <View style={styles.aside}>
                                <TouchableOpacity
                                    style={styles.consulta}
                                    onPress={() => navegacao.navigate('Consulta')}
                                >

                                    <Text style={styles.textConsulta}>CONSULTA</Text>
                                </TouchableOpacity>
                            </View>

                            <View style={styles.input}>

                                <SelectList
                                    boxStyles={{ borderRadius: 0, backgroundColor:'#fff' }}
                                    inputStyles={{color:'#000', fontWeight:'300'}}
                                    dropdownStyles={{borderRadius: 0, backgroundColor:'#fff'}}
                                    dropdownTextStyles={{color:'#000', fontWeight:'300'}}

                                    setSelected={(val) => setSelected(val)}
                                    data={data}
                                    save="value"
                                    defaultOption={'Pátio'}
                                />
                                <SelectList
                                    boxStyles={{ borderRadius: 0, backgroundColor:'#fff' }}
                                    inputStyles={{color:'#000', fontWeight:'300'}}
                                    dropdownStyles={{borderRadius: 0, backgroundColor:'#fff'}}
                                    dropdownTextStyles={{color:'#000', fontWeight:'300'}}

                                    setSelected={(val) => setSalas(val)}
                                    data={Salas[selected]}
                                    save="value"
                                    defaultOption={Salas[selected][0]}
                                />

                            </View>
                            <TouchableOpacity
                                style={styles.escanear}
                                onPress={() => navegacao.navigate('Leitor')}
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

import { SelectList } from 'react-native-dropdown-select-list'

const App = () => {




};