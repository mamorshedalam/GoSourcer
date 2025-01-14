import BackToTop from "./backToTop";
import HomePage from "./home/page";

export const metadata = {
  title: "Home",
  description: "AiWave - AI SaaS Website NEXTJS14 UI Kit",
};

export default function Home() {
  return (
    <main>
      <HomePage />

      <BackToTop />
    </main>
  );
}
