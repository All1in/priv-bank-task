import AppRouter from "./router/AppRouter.jsx";
import Header from "./components/Header/Header.jsx";
import AuthContextProvider from "./context/AuthContext.jsx";
import './styles/App.css'

function App() {
  return (
    <>
        <AuthContextProvider>
            <Header />
            <AppRouter />
        </AuthContextProvider>
    </>
  )
}

export default App
