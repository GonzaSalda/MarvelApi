import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { router } from './router'
import MarvelProvider from './context/MarvelContext'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MarvelProvider>
      <RouterProvider router={router}/>
    </MarvelProvider>
  </React.StrictMode>,
)
