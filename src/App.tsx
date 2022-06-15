import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "../src/pages/Auth/Register/register";
import Login from "../src/pages/Auth/Login/login";
import Forgot from "../src/pages/Auth/Forgot/forgot";
// import Modalpop from "../src/pages/Auth/Register/modal";
import Success from "../src/pages/Auth/Register/success";
import Info from "../src/pages/Auth/Info/info";
import PageNotFound from "../src/pages/NotFound/notfound";





const App: React.FC = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Register />} />
          <Route path="/success" element={<Success />} />
          <Route path="/login" element={<Login />} />
          <Route path="/businessinfo" element={<Info />} />
          <Route path="/forgotpassword" element={<Forgot />}/>
          {/* <Route path="/modalpop" element={<Modalpop />}/> */}
          <Route path="/page-not-found" element={<PageNotFound />}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
