import { useNavigation } from "@react-navigation/native"
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { commonThemeData } from "../../themes/Common";

const AttractionDetails: React.FC = () => {
    const navigation = useNavigation();
    return (
        <>
            <TouchableOpacity style={styles.closeButton} onPress={() => navigation.goBack()}>
                <Image style={styles.closeIcon} source={require('../../assets/images/close.png')} />
            </TouchableOpacity>
            <ScrollView>

                <View style={styles.coverImageWrapper}>
                    <Image style={styles.coverImage} source={{ uri: 'https://scontent.fcmb3-2.fna.fbcdn.net/v/t39.30808-6/458631939_122172976592316385_6521955159622793488_n.jpg?stp=cp6_dst-jpg_p960x960&_nc_cat=103&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeHUPUA2ukQ7TyZ5mglXa92CRhfnoW4XCopGF-ehbhcKip6V8EPhEurnbuC8OcacrmQT1XVFBXOIZ-UFgDhSAKNs&_nc_ohc=Hj_PVSUSDMgQ7kNvgGzX_yP&_nc_zt=23&_nc_ht=scontent.fcmb3-2.fna&oh=00_AYDDnEkP6xJx9Jd_qTH6Q6XXHCLazA7ZnDptLcwagEFR5w&oe=66DFD150' }} />
                </View>

                <Text>Attraction Details page</Text>
            </ScrollView>
        </>
    )
}


const styles = StyleSheet.create({
    closeButton: {
        position: 'absolute',
        right: 10,
        top: 10,
        zIndex: 10,
        width: 30,
        height: 30,
        borderRadius: 40,
        backgroundColor: 'rgba(255,255,255,0.5)',
        alignItems: 'center',
        justifyContent: 'center'
    },
    closeIcon: {
        width: 10,
        height: 10
    },
    coverImageWrapper: {
        width: '100%',
        height: 300,
        borderBottomLeftRadius: commonThemeData.radius,
        borderBottomRightRadius: commonThemeData.radius,
        overflow: 'hidden'
    },
    coverImage: {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        position: 'absolute'
    }
})

export default AttractionDetails;