import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { commonThemeData } from "../themes/Common";

const OnGoingPlaningTripCard:React.FC = () => {
    return(
        <TouchableOpacity style={styles.wrapContainer}>
            <Image source={require('../assets/images/trip-color.png')} style={styles.icon}/>
            <View>
                <Text style={styles.mainTitle}>Travel to ella</Text>
                <Text style={styles.tagline}>Click here to view trip plan</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    wrapContainer:{
        padding: commonThemeData.cardPadding,
        paddingHorizontal: 20,
        borderBottomWidth: 1,
        borderBottomColor: commonThemeData.borderColor,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 5
    },
    icon:{
        width:35,
        height:35
    },
    mainTitle:{
        fontWeight: '500',
        marginBottom:2
    },
    tagline:{
        color: commonThemeData.text.dark,
        fontSize: 12
    }
})

export default OnGoingPlaningTripCard;