import Chat from 'lep-chat'

export default function Wrapper() {
  return (
    <>
      <Chat 
        modelName={import.meta.env.PUBLIC_MODEL_NAME}
        chatRole={import.meta.env.PUBLIC_CHAT_ROLE}
        apiKey={import.meta.env.PUBLIC_API_KEY}
      />
    </>
  );
}