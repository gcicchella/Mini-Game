import {TextInput, View, StyleSheet, Alert} from "react-native";
import PrimaryButton from "../components/ui/PrimaryButton";
import Colors from "../constants/colors";
import {useState} from "react";
import Title from "../components/ui/Title";
import Card from "../components/ui/Card";
import InstructionText from "../components/ui/InstructionText";

function StartGameScreen({onPickNumber}){
    const [enteredNumber, setEnteredNumber] = useState('');

    function numberInputHandler(enteredText){
        setEnteredNumber(enteredText);
    }

    function resetInputHandler(){
        setEnteredNumber('');
    }

    function confirmInputHandler(){
        const chosenNumber = parseInt(enteredNumber);
        if(isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99){
            Alert.alert('Valore non corretto',
                'Inserisci un numero tra 1 e 99',
                [{text: 'OK', style: 'destructive', onPress: resetInputHandler}])
            return;
        }
        console.log('Valid Number: ' + chosenNumber);
        onPickNumber(chosenNumber);
    }

    return(
        <View style = {styles.rootContainer}>
            <Title>Indovina il numerello</Title>
            <Card>
                <InstructionText>Inserisci un numero</InstructionText>
                <TextInput
                    style = {styles.numberInput}
                    maxLength = {2}
                    keyboardType = "number-pad"  //permette di poter scrivere solo numeri
                    autoCapitalize = "none" //non viene scritto automaticamente in maiuscolo
                    autoCorrect = {false}
                    onChangeText = {numberInputHandler}
                    value = {enteredNumber}
                />
                <View style = {styles.buttonsContainer}>
                    <View style = {styles.buttonContainer}>
                        <PrimaryButton onPressButton={resetInputHandler}>Reset</PrimaryButton>
                    </View>

                    <View style = {styles.buttonContainer}>
                        <PrimaryButton onPressButton={confirmInputHandler}>Conferma</PrimaryButton>
                    </View>

                </View>
            </Card>
        </View>
    );
}

export default StartGameScreen;

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        marginTop: 100,
        alignItems: 'center'
    },

    numberInput: {
        height: 50,
        width: 50,
        fontSize: 32,
        borderBottomColor: Colors.accent500,
        borderBottomWidth: 2,
        color: Colors.accent500,
        marginVertical: 8,
        fontWeight: 'bold',
        textAlign: 'center'
    },

    buttonsContainer: {
      flexDirection: 'row',
    },

    buttonContainer: {
        flex: 1,
    },
});