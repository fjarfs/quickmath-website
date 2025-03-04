import BackToTop from "@/app/backToTop";
import ChatAiLayout from "./(chat-ai)";

export const metadata = {
  title: "QuickMath - Chat Ai",
  description: "Platform Bimbingan Belajar Online untuk jenjang SD, SMP, SMA dan Kuliah",
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
