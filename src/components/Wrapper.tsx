import Chat from 'lep-chat'
// import 'lep-chat/dist/style.css'

async function getResponse(question: string): Promise<string> {
  try {
    const response = await fetch("/api/api", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ question }),
    });

    const data = await response.json();
    return data.response;
  } catch (error) {
    console.error("Error fetching data:", error);
    return "Error fetching data";
  }
};

export default function Wrapper() {
  return (
    <>
      <Chat
        onGetResponse={getResponse}
        placeHolder='Any doubts or questions? Ask away!'
        className=''
        overline='Hi there! 👋'
        title="Welcome, I'm"
        highlightedText='Luis Preciado'
        gradient={['#ddd', '#999']}
        subtitle="Explore my projects, learn about my skills, or contact me for more information."
      />
    </>
  );
}