import React from "react";

const ChatbotWidget: React.FC = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50 shadow-lg rounded-xl overflow-hidden bg-white border border-gray-200">
      <iframe
        title="Dialogflow Chatbot"
        height="430"
        width="350"
        src="https://bot.dialogflow.com/63daaf91-f05b-47c5-bb57-7295739b92a4"
        allow="microphone;"
        className="block"
        style={{ border: "none" }}
      />
    </div>
  );
};

export default ChatbotWidget;
