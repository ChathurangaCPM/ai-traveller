import { SafeAreaView, StyleSheet } from "react-native"
import { useTheme } from "../context/ThemeContext";
import ChatMainView from "../components/ChatMainView";

const HomeScreen:React.FC = () => {
    const { theme, toggleTheme } = useTheme();

    return(
        <SafeAreaView style={[styles.container, { backgroundColor: theme.backgroundColor }]}>
            <ChatMainView />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,  
    }
  });
  

export default HomeScreen;