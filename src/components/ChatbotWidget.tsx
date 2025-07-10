import React, { useEffect, useRef } from "react";

const ChatbotWidget: React.FC = () => {
  const dfMessengerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Only inject script if not already present
    if (!document.getElementById('df-messenger-bootstrap')) {
      const script = document.createElement('script');
      script.id = 'df-messenger-bootstrap';
      script.src = 'https://www.gstatic.com/dialogflow-console/fast/messenger/bootstrap.js?v=1';
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <div
      ref={dfMessengerRef}
      className="fixed bottom-4 right-4 z-50 w-[90vw] max-w-xs sm:max-w-sm md:max-w-md lg:max-w-sm"
      style={{ maxHeight: '80vh' }}
    >
      <df-messenger
        chat-title="OrganicBot"
        agent-id="63daaf91-f05b-47c5-bb57-7295739b92a4"
        language-code="en"
      ></df-messenger>
    </div>
  );
};

export default ChatbotWidget;
