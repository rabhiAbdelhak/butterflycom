import { BrowserRouter, Route, Routes } from "react-router-dom";
import { About, Contact, Error, Home, SharedLayout } from "./pages";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<SharedLayout/>}>
             <Route path="" element={<Home/>}/>
             <Route path="about" element={<About/>}/>
             <Route path="contact" element={<Contact/>}/>
             
        </Route>
        <Route path="/*" element={<Error/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
