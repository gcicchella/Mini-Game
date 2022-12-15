import {TextInput, View, StyleSheet, Alert} from "react-native";
import PrimaryButton from "../components/PrimaryButton";
import {useState} from "react";


function StartGameScreen(){
    const [enteredNumber, setEnteredNumber] = useState('');

    function numberInputHandler(enteredText){
        setEnteredNumber(enteredText);
    }

    function resetInpuntHandler() {
        setEnteredNumber('');
    }
    function confirmInputHandler(){
        const chooseNumber = parseInt(enteredNumber); //converto il numero in intero, perchè il numero viene visto come stringa
        if(isNaN(chooseNumber) || chooseNumber <=0 || chooseNumber >99){
            Alert.alert(
                'Numero non valido.',
                'Riprova!',
                [{text: 'Ok', style: 'destructive', onPress: resetInpuntHandler }]
            );
            return;
        }
        console.log('Numero valido!');
    }
    return (
        <View style={style.inputContainer}>
            <TextInput
                style={style.numberInput}
                maxLength={2}
                keyboardType={"number-pad"}
                autoCapitalize='none' //permette che non viene scritto automaticamente in maiuscolo
                autoCorrect={false} //disabilita l'autocorrezione
                onChangeText={numberInputHandler}
                value={enteredNumber}
            />
            <View style={style.buttonsContainer}>
                <View style={style.buttonContainer}>
                    <PrimaryButton onPressButton={resetInpuntHandler}> Resetta </PrimaryButton>
                </View>
                 <View style={style.buttonContainer}>
                <PrimaryButton onPressButton={confirmInputHandler}> Conferma </PrimaryButton>
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