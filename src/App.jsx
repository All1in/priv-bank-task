import AppRouter from "./router/AppRouter.jsx";
import AuthContextProvider from "./context/AuthContext.js";
import './App.css'

function App() {
  return (
    <>
        <AuthContextProvider>
            App component
            <AppRouter />
        </AuthContextProvider>
    </>
  )
}

export default App
