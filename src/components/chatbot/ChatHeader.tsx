export default function ChatHeader( { className }: { className: string }) {
  return (
    <div className={`flex flex-col items-center justify-center gap-4 ${className}`}>
      <h2 className="text-3xl text-gray-400 text-center">
        Hi there! 👋 
      </h2>
      <h1 className="text-7xl/22 font-semibold text-gray-200 text-center ">
        Welcome, I'm<br/> <span className='text-gradient font-extrabold text-[5.5rem]'>Luis Preciado</span>
      </h1>
      <p className="text-gray-300 text-center text-base w-[90%]">
        Explore my projects, learn about my skills, or contact me for more information.
      </p>
    </div>
  )
}