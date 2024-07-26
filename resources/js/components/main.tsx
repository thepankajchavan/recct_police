import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import 'regenerator-runtime/runtime'
import App from './../src/App';

const container = document.getElementById('app')
if (container) {
  const root = createRoot(container)
  root.render(
    <BrowserRouter basename={''}>
      <App />
    </BrowserRouter>,
  )
}