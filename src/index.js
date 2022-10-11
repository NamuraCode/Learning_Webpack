import { createRoot } from 'react-dom/client';
import './public/css/app.css'
import App from "./components/App";
const container = document.getElementById("app");
const root = createRoot(container);
root.render( <App />);

