import BackToTop from "@/app/backToTop";
import ChatAiLayout from "./(chat-ai)";

export const metadata = {
  title: "QuickMath - Chat Ai",
  description: "Online Courses & Education NEXTJS14 Template",
};

const ChatAiPage = () => {
  return (
    <>
      <ChatAiLayout />
      <BackToTop />
    </>
  );
};

export default ChatAiPage;
