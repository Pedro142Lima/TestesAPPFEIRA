import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'flex-end',
        width: '100%',
        height: '100%',
        marginBottom: "10%",

    },
    image: {
        width: 200,
        height: 200,
    },
    section: {
        width: '100%',
        height: 300,
        alignItems: 'center',
        justifyContent: 'center',
        gap: 40
    },
    button: {
        width: '60%',
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
        fontSize: '8vw',
    }
});

export default styles;