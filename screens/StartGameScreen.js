import {TextInput, View, StyleSheet, Alert, useWindowDimensions, KeyboardAvoidingView, ScrollView} from "react-native";
import PrimaryButton from "../components/ui/PrimaryButton";
import Colors from "../constants/colors";
import {useState} from "react";
import TitleIos from "../components/ui/Title";
import Card from "../components/ui/Card";
import InstructionText from "../components/ui/InstructionText";


function StartGameScreen({onPickNumber}){
    const [enteredNumber, setEnteredNumber] = useState('');

    const {width, height} = useWindowDimensions();

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

    const marginTopDistance = height < 300 ? 30 : 100;

    return(
        <ScrollView style={styles.screen}>
            <KeyboardAvoidingView style = {styles.screen} behavior={"position"} >
                <View style = {[styles.rootContainer, {marginTop: marginTopDistance}]}>
                    <TitleIos>Indovina il numerello</TitleIos>
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
            </KeyboardAvoidingView>
        </ScrollView>
    );
}

export default StartGameScreen;

//const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        //marginTop: deviceWidth < 400 ? 30 : 100,
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
    screen: {
        flex: 1
    }
});