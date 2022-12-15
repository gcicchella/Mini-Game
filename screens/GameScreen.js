import {Text, View, StyleSheet} from "react-native";

function GameScreen() {
    return (
        <View style={styles.screen}>
            <Text>Ho pensato al numero</Text>
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