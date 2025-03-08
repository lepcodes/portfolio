import type { Message } from './types.d.ts';

const UserMessage = ({ message, className }: { message: Message, className: string }) => {
  return (
    
    <div key={message.id} 
        className={`relative flex flex-col gap-2 self-end p-3 max-w-[98%] bg-[#414e625e] rounded-xl ${className}`}>
      <p className="text-gray-300">{message.text}</p>
    </div>
  );
};

export default UserMessage;