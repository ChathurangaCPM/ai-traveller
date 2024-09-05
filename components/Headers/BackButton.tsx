import { useNavigation } from "@react-navigation/native";
import { Button } from "react-native";


const BackButton: React.FC = () => {
    const navigation = useNavigation();
    return (
        <Button title="Go back" onPress={() => navigation.goBack()} />
    );
};

export default BackButton;
