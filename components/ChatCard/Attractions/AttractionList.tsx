import { ScrollView, StyleSheet } from "react-native";
import AttractionCard from "./AttractionCard";

const AttractionListCard: React.FC = () => {

    return (
        <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.wrapContainer}
            keyboardShouldPersistTaps="handled"
        >
            <AttractionCard />
            <AttractionCard />
            <AttractionCard />
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    wrapContainer: {
        paddingHorizontal: 20,
        marginBottom: 20,
        gap: 20
    },
})

export default AttractionListCard;