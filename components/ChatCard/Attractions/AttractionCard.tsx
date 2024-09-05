import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigatorProps } from "react-native-screens/lib/typescript/native-stack/types";
import CustomButton from "../../CustomButton";
import { commonThemeData } from "../../../themes/Common";
const { width } = Dimensions.get('screen');


const AttractionCard: React.FC = () => {
    const navigation = useNavigation<NativeStackNavigatorProps>();
    return (
        <View style={styles.wrapCard}>
            <TouchableOpacity onPress={() => navigation.navigate('Details')}>
                <Image
                    style={styles.image}
                    source={{ uri: 'https://www.jetwinghotels.com/wp-content/uploads/2019/06/bentota-hotels-category-744x653-1.jpg' }}
                />
                <View style={styles.distanceWrapper}>
                    <Image style={styles.distanceIcon} source={require('../../../assets/images/direction.png')} />
                    <Text style={styles.distanceText}>5Km</Text>
                </View>
            </TouchableOpacity>
            <View style={styles.cardContent}>
                <Text style={styles.mainTitle}>Jetwing Hotel</Text>
                <View style={styles.ratingWrapper}>
                    <Image
                        style={styles.ratingIcon}
                        source={require('../../../assets/images/star.png')}
                    />
                    <Text style={styles.ratingText}>4.5 Rating</Text>
                </View>
                <CustomButton />
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    wrapCard: {
        width: width - 100,
        borderWidth: 1,
        borderColor: commonThemeData.borderColor,
        borderRadius: commonThemeData.radius,
        backgroundColor: '#fff',
        marginBottom: 10,
        // padding: commonThemeData.cardPadding,
        shadowColor: "#000",
        shadowOffset: {
            width: 2,
            height: 2,
        },
        shadowOpacity: 0.05,
        shadowRadius: 1.00,

        elevation: 1,
        marginRight: 20
    },
    image: {
        height: 150,
        borderRadius: commonThemeData.radius
    },
    distanceWrapper: {
        position: 'absolute',
        bottom: 10,
        right: 10,
        paddingVertical:3,
        paddingHorizontal: 10,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.7)',
        gap: 5,
        borderRadius: commonThemeData.radius,
    },
    distanceIcon: {
        width: 12,
        height: 12,
        tintColor: '#fff'
    },
    distanceText: {
        textTransform: 'uppercase',
        color: '#fff',
        fontSize: 12,
        fontWeight: 'bold',
    },

    cardContent: {
        padding: 10,
        flexDirection: 'column',
        gap: 10
    },
    ratingWrapper: {
        flexDirection: 'row',
        gap: 2,
        alignItems: 'center'
    },
    ratingIcon: {
        width: 15,
        height: 15,
        tintColor: '#FEB603'
    },
    ratingText: {

    },
    mainTitle: {
        fontWeight: 'bold',
    }
})

export default AttractionCard;