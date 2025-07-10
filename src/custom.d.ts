// TypeScript declaration for Dialogflow Messenger custom element
// Allows <df-messenger> to be used in TSX/JSX without errors
declare namespace JSX {
  interface IntrinsicElements {
    'df-messenger': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
      'chat-title'?: string;
      'agent-id'?: string;
      'language-code'?: string;
    };
  }
}
