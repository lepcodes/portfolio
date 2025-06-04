import Chat from 'lep-chat'

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
      <Chat onGetResponse={getResponse} />
    </>
  );
}