import { BrowserRouter, Routes, Route } from "react-router-dom";
import Auth from "./pages/Auth";
import Home from "./pages/Home";
import GlobalStyle from "./styles/GlobalStyle";
import { ToastContainer } from "react-toastify";
import { UserContext, UserContextProvider } from "./context/userContext";
import "react-toastify/dist/ReactToastify.min.css";
import { useContext } from "react";

function App() {

  const{token} = useContext(UserContext);
  console.log(token);
  return (
    <>
      <UserContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Auth />}></Route>
            <Route path="/home" element={<Home />}></Route>
          </Routes>
        </BrowserRouter>
        <GlobalStyle />
        <ToastContainer />
      </UserContextProvider>
    </>
  );
}

export default App;
