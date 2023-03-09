import React, { useEffect } from 'react';
import Talk from 'talkjs';

function Chat() {
    useEffect(() => {
        // Initialize TalkJS SDK
        Talk.ready.then(() => {
            const me = new Talk.User({
                id: "1234",
                name: "John",
                email: "john@example.com",
                photoUrl: "https://demo.talkjs.com/img/alice.jpg",
                welcomeMessage: "Hey there! How can I help you today?",
                role: "user"
            });

            // Authenticate user with TalkJS
            const session = new Talk.Session({
                appId: "tq5UXJMd",
                me: me
            });

            // Create chatbox
            const conversation = session.getOrCreateConversation("CONVERSATION_ID");
            const chatbox = session.createChatbox(conversation);
            chatbox.mount(document.getElementById("talkjs-container"));
        });
    }, []);

    return (
        <div id="talkjs-container" style={{ height: '500px' }}>
            Loading chat...
        </div>
    );
}

export default Chat;