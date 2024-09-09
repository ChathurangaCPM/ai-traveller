import React, { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    FlatList,
    KeyboardAvoidingView,
    Platform,
    StyleSheet,
    ListRenderItem,
    TouchableOpacity,
    Image,
} from 'react-native';
import HotelListCard from './ChatCard/HotelsList';

import { Message } from '../types/ChatView';
import AttractionListCard from './ChatCard/Attractions/AttractionList';
import { commonThemeData } from '../themes/Common';
import triggerHapticFeedback from '../assets/Common/HabticFeedback';
import OnGoingPlaningTripCard from './OngoingPlanigTripCard';



const ChatMainView: React.FC = () => {
    const [messages, setMessages] = useState<Message[]>([]);
    const [input, setInput] = useState<string>('');
    const [inputHeight, setInputHeight] = useState<number>(40); // Initial height
    const [scrollEnabled, setScrollEnabled] = useState<boolean>(false); // To control scrolling



    const sendMessage = () => {
        if (input.trim()) {
            // Options for the feedback

            triggerHapticFeedback()
            const newMessage: Message = { id: Date.now().toString(), text: input, sender: 'user', type: 'text' };
            setMessages(prevMessages => [newMessage, ...prevMessages]);

            // Simulate a response message and a card
            const responseMessage: Message = {
                id: (Date.now() + 1).toString(),
                text: 'This is an automated response',
                sender: 'response',
                type: 'text',
            };

            const responseCard: Message = {
                id: (Date.now() + 2).toString(),
                text: 'This is a card component',
                sender: 'response',
                type: 'card',
            };

            const responseAttractionsCard: Message = {
                id: (Date.now() + 2).toString(),
                text: 'This is a card component',
                sender: 'response',
                type: 'attractionCard',
            };

            setMessages(prevMessages => ([
                ...prevMessages,
                responseCard,
                responseAttractionsCard,
                responseMessage,
                newMessage
            ]));
            setInput('');
        }
    };

    const renderItem: ListRenderItem<Message> = ({ item }) => {
        if (item.type === 'card') {
            return <HotelListCard />;
        }
        if (item.type === 'attractionCard') {
            return <AttractionListCard />;
        }
        return (
            <View style={[styles.messageContainer, item.sender === 'user' ? styles.userMessage : styles.responseMessage]}>
                <Text style={styles.messageText}>{item.text}</Text>
            </View>
        );
    };

    return (
        <KeyboardAvoidingView
            style={styles.container}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            keyboardVerticalOffset={Platform.OS === 'ios' ? 95 : 0}
        >
            {/* Currently Planing Trip */}
            <OnGoingPlaningTripCard />
            <FlatList
                data={messages}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                contentContainerStyle={styles.messagesList}
                inverted
            />

            <View style={[styles.inputContainer, {alignItems: inputHeight > 40 ? 'flex-end' : 'center'}]}>
                <TextInput
                    value={input}
                    onChangeText={setInput}
                    style={[styles.input, { height: inputHeight, borderRadius: inputHeight > 40 ? 15 : 20 }]} // Dynamic height
                    placeholder="Type a message..."
                    placeholderTextColor="#888"
                    multiline={true} // Enable multiline input
                    onContentSizeChange={(e) => {
                        // Adjust the height dynamically, but not exceed 100px
                        const newHeight = e.nativeEvent.contentSize.height;
                        setInputHeight(newHeight > 100 ? 100 : newHeight);
                        setScrollEnabled(newHeight > 100);
                    }}
                />
                <TouchableOpacity onPress={sendMessage} style={styles.sendButtonWrapper}>
                    <Image source={require('../assets/images/send.png')} style={styles.sendIcon} />
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    messagesList: {
        // paddingHorizontal: 10,
        paddingVertical: 20,
    },
    messageContainer: {
        // paddingVertical: 10,
        paddingHorizontal: 15,
        marginHorizontal: 10,
        borderRadius: commonThemeData.radius + 10,
        marginBottom: 10,
        maxWidth: '80%',
    },
    userMessage: {
        backgroundColor: commonThemeData.primaryColorShade,
        alignSelf: 'flex-end',
    },
    responseMessage: {
        backgroundColor: '#fff',
        alignSelf: 'flex-start',
    },
    messageText: {
        fontSize: 16,
        paddingVertical: 10
    },
    cardContainer: {
        padding: 15,
        backgroundColor: '#FFF',
        borderRadius: 10,
        borderColor: '#ccc',
        borderWidth: 1,
        marginBottom: 10,
        alignSelf: 'flex-start',
        maxWidth: '80%',
    },
    cardText: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        gap: 10
        // borderTopWidth: 1,
        // borderColor: '#ccc',
    },
    input: {
        flex: 1,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 20,
        paddingHorizontal: 15,
        paddingVertical: 10,
        maxHeight: 100, // Set maxHeight for the TextInput
        minHeight: 40,
        fontSize: 16
        // lineHeight: 40
    },
    sendButtonWrapper: {
        width: 38,
        height: 38,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: commonThemeData.primaryColorShade,
        borderRadius: 40,
        // opacity: 0.5
    },
    sendIcon: {
        width: 18,
        height: 18,
        tintColor: commonThemeData.primaryColor
    }
});

export default ChatMainView;
