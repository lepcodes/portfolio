export default function ChatHeader( { className }: { className: string }) {
  return (
    <div className={`flex flex-col items-center justify-center gap-4 ${className}`}>
      <h2 className="text-3xl text-gray-400 text-center">
        Hi there! 👋 
      </h2>
      <h1 className="text-5xl/15 font-bold text-gray-300 text-center ">
        What do you want to know about me?
      </h1>
      <p className="text-gray-500 text-center text-base w-[90%]">
        I'm <span className='font-bold'>Luis' AI Assistant</span> and I'm here to answer any questions you have about my creator.
      </p>
    </div>
  )
}