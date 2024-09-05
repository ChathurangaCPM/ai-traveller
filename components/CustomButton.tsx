import { StyleSheet, Text, TouchableOpacity } from "react-native"
import { commonThemeData } from "../themes/Common";

const CustomButton:React.FC = () => {
    return(
        <TouchableOpacity style={styles.buttonWrapper}>
            <Text style={styles.buttonText}>View More</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    buttonWrapper: {
        padding: commonThemeData.button.padding,
        borderRadius: commonThemeData.radius,
        backgroundColor: commonThemeData.primaryColor
    },
    buttonText:{
        color: commonThemeData.button.textColor,
        textAlign: 'center'
    }
})

export default CustomButton;