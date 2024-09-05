export interface Message {
    id: string;
    text: string;
    sender: 'user' | 'response';
    type?: 'text' | 'card' | 'attractionCard';
}