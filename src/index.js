import React from "react";
import {createRoot} from "react-dom/client";
import "./index.css";
import App from "./App"
import reportWebVitals from "./reportWebVitals"
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css" integrity="sha384-xOolHFLEh07PJGoPkLv1IbcEPTNtaed2xpHsD9ESMhqIYd0nLMwNLD69Npy4HI+N" crossorigin="anonymous"></link>

const rootElement=document.getElementById("root");
const root=createRoot(rootElement);
root.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>
);
reportWebVitals();