import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage";

import "../assets/styles/reset.css"
import "../assets/styles/keyframes.css"
import Fase0Page from "../pages/Fase0Page/Fase0Page";
import Fase1Page from "../pages/Fase1Page/Fase1Page";
import Fase2Page from "../pages/Fase2Page/Fase2Page";
import Fase3Page from "../pages/Fase3Page/Fase3Page";
import Fase4Page from "../pages/Fase5Page/Fase5Page";
import SignUp from "../pages/SignUp/SignUp";
import SignIn from "../pages/SignIn/SignIn";
import Fase5Page from "../pages/Fase4Page/Fase4Page";
import EndPage from "../pages/EndPage/EndPage";
import MenuProvider from "../contexts/MenuContext";
import LightProvider from "../contexts/LightContext";
import AuxPage from "../pages/Fase5Page/AuxPage";
import UserProvider from "../contexts/UserContext";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import ThanksPage from "../pages/ThanksPage/ThanksPage";

export default function App() {
  return (
    <BrowserRouter>
      <MenuProvider>
      <LightProvider> 
      <UserProvider>
        <Routes>
          <Route path="/" element={<HomePage />}/>
          <Route path="/registro" element={<SignUp />}/>
          <Route path="/login" element={<SignIn />}/>
          <Route path="/batata" element={<Fase0Page/>}/>
          <Route path="/amor" element={<Fase1Page/>}/>
          <Route path="/fios" element={<Fase2Page/>}/>
          <Route path="/wiki" element={<Fase3Page/>}/>
          <Route path="/qui_manca_qualcosa" element={<Fase4Page/>}/>
          <Route path="/13" element={<Fase5Page/>}/>
          <Route path="/fim" element={<EndPage/>}/>
          <Route path="/trasfigurazione" element={<AuxPage/>}/>
          <Route path="/obrigado" element={<ThanksPage/>}/>
          <Route path="/*" element={<ErrorPage/>}/>
        </Routes>
      </UserProvider>
      </LightProvider>   
      </MenuProvider>
    </BrowserRouter>
  );
}
