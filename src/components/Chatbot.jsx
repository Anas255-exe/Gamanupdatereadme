import React, { useState } from 'react';
import './../css/chatbot_styles.css'; // Make sure you move your CSS file content into this file or import it
import Navbar from '../Navbar.jsx';
import Footer from '../Footer.jsx';

const Chatbot = () => {
    const [messages, setMessages] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const [isChatOpen, setIsChatOpen] = useState(false);

    const handleSendMessage = () => {
        if (inputValue.trim()) {
            setMessages([...messages, { text: inputValue, sender: 'user' }]);
            setInputValue('');
        }
    };

    const toggleChatbox = () => {
        setIsChatOpen(!isChatOpen);
    };

    return (
        <div><Navbar/>
            <div className='ChatBot'>
                <div className='Raahi'><h1>Raahi</h1>
                <h2>I am Raahi, your hamsafar!
                    How can I help you?</h2></div>
                <br></br>
                <div className='Initial_Prompt'>
                    <h3>Hello! I'm Raahi, your travel companion. What's your next destination?</h3>
                </div>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <div className='Type_Here'>
                    <input type="text" placeholder='Write a message here...' className='Input'></input>
                    <h2>Send</h2>
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default Chatbot;
