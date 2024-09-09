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
        backgroundColor: commonThemeData.secondaryColor
    },
    buttonText:{
        color: '#000',
        textAlign: 'center',
        fontWeight: '600'
    }
})

export default CustomButton;