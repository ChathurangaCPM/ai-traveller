import { DrawerContentComponentProps } from "@react-navigation/drawer";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const CustomDrawerContent: React.FC<DrawerContentComponentProps> = ({ navigation }) => {
    // const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <SafeAreaView>
                <Text style={styles.title}>Custom Drawer</Text>
                <TouchableOpacity
                    style={styles.item}
                    onPress={() => navigation.navigate('Home')}
                >
                    <Text>Home</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.item}
                    onPress={() => navigation.navigate('Profile')}
                >
                    <Text>Profile</Text>
                </TouchableOpacity>
            </SafeAreaView>
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 16,
    },
    item: {
        padding: 16,
    },
});

export default CustomDrawerContent;