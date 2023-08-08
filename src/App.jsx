import { BrowserRouter, Routes, Route } from "react-router-dom";
import DataTable from "./components/DataTable";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DataTable />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
