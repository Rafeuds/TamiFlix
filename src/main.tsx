import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './Components/App.tsx'
import 'bootstrap/dist/css/bootstrap.css'
import { createBrowserRouter, Route, RouterProvider } from 'react-router-dom'
import TelaInicio from './Routes/TelaInicio.tsx'
import TelaContato from './Routes/TelaContato.tsx'
import TelaPrincipal from './Routes/TelaPrincipal.tsx'
import TelaTutorial from './Routes/TelaTutorial.tsx'


const router = createBrowserRouter([

  {
    path: "/",
    element: <TelaInicio />
  },

  {
    path: "/contato",
    element: <TelaContato />
  },

  {
    path: "/principal",
    element: <TelaPrincipal />
  },

  {
    path: "/tutorial",
    element: <TelaTutorial />
  },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)

// Remove Preload scripts loading
postMessage({ payload: 'removeLoading' }, '*')

// Use contextBridge
window.ipcRenderer.on('main-process-message', (_event, message) => {
  console.log(message)
})
