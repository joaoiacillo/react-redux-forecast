import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import store from "./store";
import { StrictMode } from "react";
import { Provider } from "react-redux";

import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </StrictMode>
);

reportWebVitals();
