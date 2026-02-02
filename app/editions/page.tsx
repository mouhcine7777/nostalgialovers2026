// app/2024edition/page.tsx

import Navigation from "../components/Navigation";
import EditionsPage from "./components/EditionsPage";
import Footer from "../components/Footer";

export default function Editions() {
  return (
    <main>
      <Navigation />
      <EditionsPage />
      <Footer />
    </main>
  );
}