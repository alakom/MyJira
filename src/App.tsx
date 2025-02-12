import Projects from "./pages/Projects/Projects";
import Header from "./components/Header/Header";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Tasks from "./pages/Tasks/Tasks";

const App = (): React.FC => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Projects />} />
        <Route path="/:projectId" element={<Tasks />} />
        <Route path="*" element={<>Not found</>} />
      </Routes>
    </div>
  ) as React.FunctionComponent<{}>;
};

export default App;
