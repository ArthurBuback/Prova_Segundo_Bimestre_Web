import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flex: 1,
        flexDirection: 'column',
        padding: 10,
        margin: 3,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'yellow'
    }, 
    informacao: {
        width: '120%',
        backgroundColor: 'white',
        padding: 10,
        color: 'black',
        borderWidth: 3,
        borderColor: 'black',
        borderRadius: 10,
        marginBottom: 10,
        textAlign: 'center'
    },
    confirmar: {
        width: '120%',
        backgroundColor: 'green',
        padding: 10,
        color: 'black',
        borderWidth: 3,
        borderColor: 'black',
        borderRadius: 10,
        marginBottom: 10,
        textAlign: 'center'
    },

        
})

export default styles;