import { ScrollView, StyleSheet } from "react-native";
import { useState } from "react";
import HotelCard from "./HotelCard";

const HotelListCard: React.FC = () => {

    return (
        <ScrollView horizontal style={styles.wrapContainer} showsHorizontalScrollIndicator={false}>
            <HotelCard />
            <HotelCard />
            <HotelCard />
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    wrapContainer: {
        paddingHorizontal: 20,
        marginBottom: 20
    },
})

export default HotelListCard;