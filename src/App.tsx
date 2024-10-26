import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ValenceProvider } from "@valence-ui/core";
import HomePage from "./pages/Home";

export default function App() {
  return (
    <ValenceProvider
      breakpoints={{
        mobileWidth: 650,
        tabletWidth: 850,
        desktopLargeWidth: 1100,
        tvWidth: 1440
      }}
      defaults={{
        size: "sm",
        radius: "md",
        variant: "light",
        transitionDuration: "0.1s",
        shadow: "0px 10px 30px rgba(0, 0, 0, 0.2)",
      }}
      fontFamily={{
        default: "DMSans, Inter, sans-serif",
        heading: "Playfair Display, serif",
        monospace: "DM Mono, monospace",
      }}
      primaryColor="black"
      titles={{
        1: { fontSize: "1.75rem", bold: false },
        2: { fontSize: "1.5rem", bold: false },
        3: { fontSize: "1.25rem", bold: false },
        4: { fontSize: "1.125rem", bold: false },
        5: { fontSize: "1rem", bold: false },
        6: { fontSize: "0.875rem", bold: false },
      }}
    >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </ValenceProvider>
  );
}