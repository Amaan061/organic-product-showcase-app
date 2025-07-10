import React from "react";

const ChatbotWidget: React.FC = () => {
  return (
    <div
      className="fixed bottom-4 right-4 z-50 shadow-lg rounded-xl overflow-hidden bg-white border border-gray-200 w-[90vw] max-w-xs sm:max-w-sm md:max-w-md lg:max-w-sm"
      style={{ maxHeight: '80vh' }}
    >
      <iframe
        title="Dialogflow Chatbot"
        src="https://bot.dialogflow.com/63daaf91-f05b-47c5-bb57-7295739b92a4"
        allow="microphone;"
        className="block w-full h-[60vh] min-h-[350px]"
        style={{ border: "none", minHeight: 350, maxHeight: '80vh' }}
      />
    </div>
  );
};

export default ChatbotWidget;
