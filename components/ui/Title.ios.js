import {StyleSheet, Text, Platform} from "react-native";
import Colors from "../../constants/colors";
function TitleIos({children}){
    return(
        <Text style = {styles.title}>{children}</Text>
    );
}

export default TitleIos;

const styles = StyleSheet.create({
    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 24,
        // fontWeight: 'bold',
        color: Colors.accent500,
        textAlign: 'center',
        // borderWidth: Platform.OS === 'android' ? 2 : 0,
        // borderWidth: Platform.select({ios: 0, android: 2}),
        borderColor: Colors.accent500,
        padding: 12,
        maxWidth: '80%', //si riferiscono al contenitore in cui è presente il titolo
        width: 300
    },

});