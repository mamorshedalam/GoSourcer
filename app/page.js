import BackToTop from "./backToTop";
import HomePage from "./home/page";

export const metadata = {
  title: "GoSourcer",
  description: "GoSourcer is a platform that helps you find the best talent for your company.",
};

export default function Home() {
  return (
    <main>
      <HomePage />

      <BackToTop />
    </main>
  );
}
