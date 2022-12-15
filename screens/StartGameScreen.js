import {TextInput, View, StyleSheet} from "react-native";
import PrimaryButton from "../components/PrimaryButton";

function StartGameScreen(){
    return (
        <View style={style.inputContainer}>
            <TextInput
                style={style.numberInput}
                maxLength={2}
                keyboardType={"number-pad"}
                autoCapitalize='none' //permette che non viene scritto automaticamente in maiuscolo
                autoCorrect={false} //disabilita l'autocorrezione
            />
            <View style={style.buttonsContainer}>
                <View style={style.buttonContainer}>
                    <PrimaryButton> Resetta </PrimaryButton>
                </View>
                 <View style={style.buttonContainer}>
                <PrimaryButton> Conferma </PrimaryButton>
                 </View>
            </View>
        </View>
    );
}

export default StartGameScreen;

const style = StyleSheet.create({
    inputContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 100,
        marginHorizontal: 24,
        padding: 16,
        backgroundColor: '#3b021f',
        borderRadius: 8,
        elevation: 4,    //ombra per android
        //ombra per ios
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 6,
        shadowOpacity: 1
    },
    numberInput: {
        height: 50,
        width: 50,
        fontSize: 32,
        borderBottomColor: '#ddb52f',
        borderBottomWidth: 2,
        color: '#ddb52f',
        marginVertical: 8,
        frontWeight: 'bold',
        textAlign: 'center'
    },
    buttonsContainer: {
        flexDirection: "row"
    },
    buttonContainer: {
        flex: 1
    }
});