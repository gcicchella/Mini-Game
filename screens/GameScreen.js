import {Text, View, StyleSheet} from "react-native";
import {useState} from "react";

import Title from "../components/ui/Title";
import NumberContainer from "../components/game/NumberContainer";

function generateRandomBetween(min, max, exclude){
    const rndNum = Math.floor(Math.random() * (max - min)) + min;

    if(rndNum === exclude){
        return generateRandomBetween(min, max, exclude);
    }
    else {
        return rndNum;
    }
}
function GameScreen({userNumber}) {
    const initialGuess = generateRandomBetween(1, 100, userNumber);
    const [currentGuess, setCurrentGues] = useState(initialGuess);

    return (
        <View style={styles.screen}>
            <Title>Ho pensato al numero</Title>
            <NumberContainer>{currentGuess}</NumberContainer>
                <View>
                    <Text>Più grande o più piccolo?</Text>
                </View>
            <View>
                <Text> Numeri già scelti  </Text>
            </View>
        </View>
    );
}

export default GameScreen;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 20
    }
});