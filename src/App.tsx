import plusJakartaSansRegular from "./assets/fonts/PlusJakartaSans-Regular.ttf";
import plusJakartaSansRegularItalic from "./assets/fonts/PlusJakartaSans-Italic.ttf";
import ibmPlexMonoLight from "./assets/fonts/IBMPlexMono-Light.ttf";
import ibmPlexMonoLightItalic from "./assets/fonts/IBMPlexMono-LightItalic.ttf";

import { MantineProvider, Global } from "@mantine/core";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home";
import { COLORS } from "./components/_colors";
import { useColorScheme } from "@mantine/hooks";
import StudiesPage from "./pages/Studies";
import PortfolioPage from "./pages/Portfolio";

export default function App() {

  const colorScheme = useColorScheme();

  return (
    <>
      {/* Font imports */}
      <Global
        styles={[
          {
            "@font-face": {
              fontFamily: "Plus Jakarta Sans",
              src: `url("${plusJakartaSansRegular}") format("woff2")}`,
              fontWeight: 400,
              fontStyle: "normal",
            },
          },
          {
            "@font-face": {
              fontFamily: "Plus Jakarta Sans",
              src: `url("${plusJakartaSansRegularItalic}") format("woff2")}`,
              fontWeight: 400,
              fontStyle: "italic",
            },
          },
          {
            "@font-face": {
              fontFamily: "IBM Plex Mono",
              src: `url("${ibmPlexMonoLight}") format("woff2")}`,
              fontWeight: 200,
              fontStyle: "normal",
            },
          },
          {
            "@font-face": {
              fontFamily: "IBM Plex Mono",
              src: `url("${ibmPlexMonoLightItalic}") format("woff2")}`,
              fontWeight: 300,
              fontStyle: "italic",
            },
          },
        ]}
      />

      <BrowserRouter>
        <MantineProvider
          withGlobalStyles
          withNormalizeCSS
          theme={{
            fontFamily: "Plus Jakarta Sans, sans-serif",
            headings: { fontFamily: "IBM Plex Mono, sans-serif", fontWeight: 200 },
            defaultRadius: "md",
            colors: { 
              //@ts-ignore
              black: colorScheme === "light" ? COLORS.BLACK : COLORS.WHITE,
              //@ts-ignore
              white: colorScheme === "light" ? COLORS.WHITE : COLORS.BLACK,
              //@ts-ignore
              permaBlack: COLORS.BLACK,
              //@ts-ignore
              permaWhite: COLORS.WHITE,
            },
            black: colorScheme === "light" ? COLORS.BLACK[0] : COLORS.WHITE[0],
            white: colorScheme === "light" ? COLORS.WHITE[0] : COLORS.BLACK[0],
            primaryColor: "black"
          }}
        >
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/portfolio" element={<PortfolioPage />} />
            <Route path="/studies" element={<StudiesPage />} />
          </Routes>
        </MantineProvider>
      </BrowserRouter>
    </>
  )
}