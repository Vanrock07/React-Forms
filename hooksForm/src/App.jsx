import { useState } from 'react'
import './App.css'
import LoginForm from './componentes/loginForm'
import RegisterForm from './componentes/registerForm'

function App() {
  const [count, setCount] = useState(0)

  return (

             //<LoginForm />
            <RegisterForm/>
  )
}

export default App
