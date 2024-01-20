import ReactDOM from "react-dom/client";
import "./index.css";
import { AppGitExpert } from "./AppGitExpert.tsx";
import { Home } from "./page/Home.tsx";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { SearchContextProvider } from "./context/searchContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <SearchContextProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/search" element={<AppGitExpert />}></Route>
      </Routes>
    </BrowserRouter>
  </SearchContextProvider>
);
