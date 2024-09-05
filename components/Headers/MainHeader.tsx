import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { commonThemeData } from "../../themes/Common";
import { useNavigation } from "@react-navigation/native";
import { DrawerNavigationProp } from "@react-navigation/drawer";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootDrawerParamList } from "../../types/RootDrawerParamList";
import ReactNativeHapticFeedback from 'react-native-haptic-feedback';
import triggerHapticFeedback from "../../assets/Common/HabticFeedback";

// Define a type for drawer navigation
type DrawerNavProp = DrawerNavigationProp<RootDrawerParamList>;
type StackNavProp = NativeStackNavigationProp<RootDrawerParamList>;

// Custom content for the left side of the header
export const LeftContent = () => {
    const navigation = useNavigation<DrawerNavProp>();
    
    const triggerDrawer = () => {
        triggerHapticFeedback()
        navigation.openDrawer();
    };


    return (
        <TouchableOpacity onPress={triggerDrawer} style={styles.iconWrapper}>
            <Image source={require('../../assets/images/more.png')} style={styles.icon} />
        </TouchableOpacity>
    );
};

// Custom content for the right side of the header
export const RightContent = () => {
    const navigation = useNavigation<StackNavProp>();
    return (
        <TouchableOpacity onPress={() => navigation.navigate("Details")} style={styles.iconWrapper}>
            <Image source={require('../../assets/images/plus-rounded.png')} style={styles.icon} />
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    iconWrapper: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
    },
    icon: {
        width: 18,
        height: 18,
        tintColor: commonThemeData.primaryColor || '#000',
    },
});
