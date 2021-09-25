import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header/index";

import { GlobalStyle } from "./style/global";

export function App() {
  return (
    <>
      <Header />
      <Dashboard />

      <GlobalStyle />
    </>
  );
}
