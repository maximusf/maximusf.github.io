import "./App.css";
import Header from "./components/Header";
import { Route, Routes } from "react-router";
import Home from "./pages/Home.tsx";
import Home from "./pages/About.tsx";

function App() {
  return (
    <div className="min-h-dvh bg-white text-gray-900">
      <Header /> 
      <Routes>
        <Route path="/" element={ <Home/> }/>
        <Route path="/about" element={ <About/> }/>
      </Routes>
    </div>
    
  )
}

export default App;