import {Dimensions, StyleSheet, View} from "react-native";
import Colors from "../../constants/colors";

function Card({children}) {
    return (
        <View style = {styles.inputContainer}>{children}</View>
    );
}

export default Card;

const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    inputContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: deviceWidth < 380 ? 12 : 24,
        marginHorizontal: deviceWidth < 380 ? 12 : 24,
        padding: 16,
        backgroundColor: Colors.primary800,
        borderRadius: 8,
        elavation: 4,          //per l'ombra su android
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 8,
        shadowOpacity: 0.25
    },
})