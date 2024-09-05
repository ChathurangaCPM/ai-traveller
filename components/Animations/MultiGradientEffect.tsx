import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';


const MultiGradientEffect = () => {
  return (
    <View style={styles.container}>
      {/* Background Gradient */}
      <LinearGradient
        colors={['#0f0c29', '#302b63', '#24243e']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.gradientBackground}
      />

      {/* Overlay Gradient */}
      <LinearGradient
        colors={['#6a11cb', '#2575fc']}
        start={{ x: 1, y: 0 }}
        end={{ x: 0, y: 1 }}
        style={styles.gradientOverlay}
      />

      {/* Accent Gradient */}
      <LinearGradient
        colors={['rgba(255,255,255,0.1)', 'rgba(255,255,255,0.3)']}
        start={{ x: 0.5, y: 0.5 }}
        end={{ x: 1, y: 1 }}
        style={styles.gradientAccent}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position:'absolute',
    top: 0,
    width: Dimensions.get('screen').width,
    zIndex:999,
    height: 100,
  },
  gradientBackground: {
    ...StyleSheet.absoluteFillObject,
  },
  gradientOverlay: {
    ...StyleSheet.absoluteFillObject,
    opacity: 0.8, // Adjust to make it more or less prominent
  },
  gradientAccent: {
    ...StyleSheet.absoluteFillObject,
    opacity: 0.6, // Adds a subtle highlight effect
  },
});

export default MultiGradientEffect;
