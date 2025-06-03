import { Route, Routes } from "react-router-dom";
import { HomeRouter } from "./routes/HomeRouter";
import { ToastContainer } from "react-toastify";


function App() {
  return (
    <>
      <Routes>
        <Route path="*" element={<HomeRouter />} />
      </Routes>
      <ToastContainer autoClose={1300} className="custom-toast-container" />
    </>
  );
}

export default App;
