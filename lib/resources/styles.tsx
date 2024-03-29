import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    textInput: {
        fontSize: 18,
        color: 'FF8DC4',
        borderWidth: 3,
        borderColor: '#CC8899',
        borderRadius: 5,
        paddingHorizontal: 10,
        paddingVertical: 15,
        marginHorizontal: 15,
        marginTop: 15,
    },
    error: {
        color: 'red',
        paddingHorizontal: 15,
        fontWeight: '500',
        fontSize: 15

    },
    button: {
        padding: 15,
        margin: 15,
        borderRadius: 10,
        backgroundColor: '#1E90FF',
        alignItems: 'center'
    },
    buttonText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white'
    }
})

export default styles