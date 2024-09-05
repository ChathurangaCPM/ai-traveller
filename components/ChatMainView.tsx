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



const ChatMainView: React.FC = () => {
    const [messages, setMessages] = useState<Message[]>([]);
    const [input, setInput] = useState<string>('');

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
            <FlatList
                data={messages}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                contentContainerStyle={styles.messagesList}
                inverted
            />

            <View style={styles.inputContainer}>
                <TextInput
                    value={input}
                    onChangeText={setInput}
                    style={styles.input}
                    placeholder="Type a message..."
                />
                <TouchableOpacity onPress={sendMessage} style={styles.sendButtonWrapper}>
                    <Image source={require('../assets/images/send.png')} style={styles.sendIcon}/>
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
        paddingVertical: 10,
        paddingHorizontal: 15,
        marginHorizontal: 10,
        borderRadius: commonThemeData.radius + 10,
        marginBottom: 10,
        maxWidth: '80%',
    },
    userMessage: {
        backgroundColor: '#DCF8C6',
        alignSelf: 'flex-end',
    },
    responseMessage: {
        backgroundColor: '#fff',
        alignSelf: 'flex-start',
    },
    messageText: {
        fontSize: 16,
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
        // borderTopWidth: 1,
        // borderColor: '#ddd',
        backgroundColor: '#fff',
    },
    input: {
        flex: 1,
        padding: 10,
        backgroundColor: '#f1f1f1',
        borderRadius: 20,
        marginRight: 10,
    },
    sendButtonWrapper:{
        width: 38,
        height: 38,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f1f1f1',
        borderRadius: 40
    },
    sendIcon:{
        width: 18,
        height: 18,
        tintColor: '#000'
    }
});

export default ChatMainView;
