// src/components/BotModal.tsx
import React, { useState } from 'react';

interface BotModalProps {
    onClose: () => void;
}

interface Message {
    sender: 'user' | 'bot';
    content: string;
}

const BotModal: React.FC<BotModalProps> = ({ onClose }) => {
    const [messages, setMessages] = useState<Message[]>([]);
    const [input, setInput] = useState('');

    const handleSend = () => {
        if (!input.trim()) return;

        const userMessage: Message = { sender: 'user', content: input };
        const botReply: Message = {
            sender: 'bot',
            content: `You asked: "${input}" — I'm still learning from Jelidah's portfolio but stay tuned!`,
        };

        setMessages((prev) => [...prev, userMessage, botReply]);
        setInput('');
    };

    return (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white rounded-xl w-full max-w-xl shadow-2xl flex flex-col h-[80vh] border border-gray-200">
                {/* Header */}
                <div className="flex justify-between items-center p-5 border-b bg-gray-100 rounded-t-xl">
                    <h2 className="text-xl font-semibold">AI Assistant</h2>
                    <button onClick={onClose} className="text-gray-500 hover:text-black text-lg">✖</button>
                </div>

                {/* Chat Content */}
                <div className="flex-1 overflow-y-auto p-6 space-y-4 bg-white">
                    {messages.map((msg, idx) => (
                        <div
                            key={idx}
                            className={`max-w-[80%] px-4 py-2 rounded-lg text-sm ${
                                msg.sender === 'user'
                                    ? 'bg-blue-100 self-end ml-auto'
                                    : 'bg-gray-100 self-start mr-auto'
                            }`}
                        >
                            <p className="text-gray-800">{msg.content}</p>
                        </div>
                    ))}
                </div>

                {/* Input Area */}
                <div className="p-4 border-t bg-gray-50 rounded-b-xl">
                    <div className="flex gap-3 items-center">
                        <input
                            type="text"
                            className="flex-1 border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-black"
                            placeholder="Ask me anything..."
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                        />
                        <button
                            onClick={handleSend}
                            className="bg-black text-white px-5 py-2 rounded-lg text-sm hover:bg-gray-900"
                        >
                            Send
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BotModal;
