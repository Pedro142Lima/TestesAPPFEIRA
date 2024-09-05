import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
    },
    image: {
        width: 150,
        height: 150,
    },
    section: {
        paddingTop: 50,
        alignItems: 'center',
        justifyContent: 'center',
        gap: 30
    },
    text: {
        fontWeight: "900",
        color: '#fff',
        fontSize: 30
    },
    button: {
        width: '50%',
        height: 50,
        textAlign: 'center',
        justifyContent: 'center',
        backgroundColor: 'orange',
        borderRadius: 12
    },
    textButton: {
        color: '#fff',
        textAlign: 'center',
        fontWeight: "900",
        fontSize: 30,
    },
    sectionList: {
        backgroundColor: '#fff',
        width: '90%',
        height: '100%',
        alignItems: 'center',
        alignSelf: 'center',
        paddingTop: 20,
        marginTop: 20
    },
    sectionRow: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 50
    },
    title: {
        fontWeight: "500",
        color: '#000',
        fontSize: 15
    },
});

export default styles;