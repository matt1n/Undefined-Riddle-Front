import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage";

import "../assets/styles/reset.css"
import Fase0Page from "../pages/Fase0Page/Fase0Page";
import Fase1Page from "../pages/Fase1Page/Fase1Page";
import Fase2Page from "../pages/Fase2Page/Fase2Page";
import Fase3Page from "../pages/Fase3Page/Fase3Page";
import Fase4Page from "../pages/Fase4Page/Fase4Page";
import SignUp from "../pages/SignUp/SignUp";
import SignIn from "../pages/SignIn/SignIn";
import Fase5Page from "../pages/Fase5Page/Fase5Page";
import EndPage from "../pages/EndPage/EndPage";
import Menu from "./Menu";
import MenuProvider from "../contexts/MenuContext";
import MenuBox from "./MenuBox";

export default function App() {
  return (
    <BrowserRouter>
      <MenuProvider>
        <Menu/>
        <MenuBox/>
        <Routes>
          <Route path="/" element={<HomePage />}/>
          <Route path="/registro" element={<SignUp />}/>
          <Route path="/login" element={<SignIn />}/>
          <Route path="/batata" element={<Fase0Page/>}/>
          <Route path="/amor" element={<Fase1Page/>}/>
          <Route path="/fase2" element={<Fase2Page/>}/>
          <Route path="/fase3" element={<Fase3Page/>}/>
          <Route path="/fase4" element={<Fase4Page/>}/>
          <Route path="/fase5" element={<Fase5Page/>}/>
          <Route path="/fim" element={<EndPage/>}/>
        </Routes>
      </MenuProvider>
    </BrowserRouter>
  );
}
