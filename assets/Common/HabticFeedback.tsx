import ReactNativeHapticFeedback from 'react-native-haptic-feedback';

const triggerHapticFeedback = (type: string = 'impactMedium') => {
    const options = {
        enableVibrateFallback: true,
        ignoreAndroidSystemSettings: false,
    };

    ReactNativeHapticFeedback.trigger(type, options);
};

export default triggerHapticFeedback;
