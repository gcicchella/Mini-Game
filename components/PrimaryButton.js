import {View, Text, Pressable, StyleSheet} from "react-native";

function PrimaryButton({children, onPressButton}) {
    return(
        <View style={styles.buttonOuterContainer}>
            <Pressable
                style={({ pressed}) =>
                pressed
                    ? [styles.buttonInnerContainer, styles.buttonPressed]
                    : styles.buttonInnerContainer
                }
                onPress={onPressButton}
                android_ripple={{color: '640233'}}
                >
                <Text style={styles.buttonText}> {children} </Text>
            </Pressable>
        </View>
    );
}

export default PrimaryButton;

const styles = StyleSheet.create({
    buttonOuterContainer: {
        borderRadius: 28,
        margin: 4,
        overflow: 'hidden' //nasconde gli effetti  presenti al di fuori di questo container
    },
    buttonInnerContainer: {
        backgroundColor: '#72063c',
        paddingVertical: 8,
        paddingHorizontal: 16,
        elevation: 2
    },
    buttonText: {
        color: 'white',
        textAlign: 'center'
    },
    buttonPressed: {
        opacity: 0.75
    }
});