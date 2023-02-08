import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Gallery from './Gallery'
import TodoList from './TodoList'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <Gallery />
    <TodoList />
  </React.StrictMode>,
)
