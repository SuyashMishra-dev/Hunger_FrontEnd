import React from "react";
import "./App.css";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "./redux/store";
import Routes from "./routes/Routes";
import Footer from "./components/common/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes />
        <Footer />
        <ToastContainer />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
