import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Navbar from "./components/Navbar";
import OrderSummary from "./components/OrderSummary";
import Courses from "./components/Courses";
import Web from "./components/Web";
import DataScience from "./components/DataScience";
import Assess from "./components/Assess";
import FetchDataComponent from "./components/Assessment/FetchDataComponent";

function App() {
  return (
    <div>
      <>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/assessment" element={<Assess />} />
          <Route path="/assessment/:courseName" element={<FetchDataComponent />} />
          <Route path="/orderSummary" element={<OrderSummary />} />
          <Route path="/courses" element={<Courses />}>
            <Route path="web-dev" element={<Web />} />
            <Route path="data-science" element={<DataScience />} />
          </Route>
        </Routes>
      </>
    </div>
  );
}

export default App;
