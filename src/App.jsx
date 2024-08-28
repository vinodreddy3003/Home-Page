import { Routes,Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Navbar from "./components/NavBar";
import OrderSummary from "./components/OrderSummary";
import Courses from "./components/Courses";
import Web from "./components/Web";
import DataScience from "./components/DataScience";

function App() {
  return (
    <div>
      <>
      <Navbar />
     <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/about" element={<About />}></Route>
      <Route path="/orderSummary" element={<OrderSummary />}></Route>
      <Route path="/courses" element={<Courses />}>
        <Route path="web-dev" element={<Web />}></Route>
        <Route path="data-science" element={<DataScience />}></Route>
      </Route>
     </Routes>
     </>

    </div>
  )
}

export default App;
//dd
