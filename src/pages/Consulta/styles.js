import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    background: {
        width: '100vw',
        height: '70vh'
    },
    section: {
        paddingTop: 50,
        alignItems: 'center',
        justifyContent: 'center',
        gap: 30
    },
    image: {
        width: 150,
        height: 150,
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
        width: '85vw',
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
        fontSize: 30
    },
});

export default styles;