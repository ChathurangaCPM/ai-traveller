import { useState } from "react";
import { GestureResponderEvent, StyleSheet, Text, View } from "react-native"

const HotelDetails: React.FC = () => {
   
    return (
        <View
            style={styles.touchableArea}
        >
            <Text style={styles.pressureText}>
                Pressure: grams
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    touchableArea: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#f2f2f2',
    },
    pressureText: {
      fontSize: 24,
      fontWeight: 'bold',
    },
  });
  

export default HotelDetails;