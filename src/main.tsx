
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import "./general.css" 

import { ContextProvider } from './Context.tsx'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <ContextProvider>
    <App />
  </ContextProvider>,
)
