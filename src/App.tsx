import Projects from "./pages/Projects/Projects";
import Header from "./components/Header/Header";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Tasks from "./pages/Tasks/Tasks";

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="//MyJira" element={<Projects />} />
        <Route path="/MyJira/:projectId" element={<Tasks />} />
        <Route path="*" element={<>Not found</>} />
      </Routes>
    </div>
  );
};

export default App;
