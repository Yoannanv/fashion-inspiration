import { useState } from "react"
import { Routes, Route, useNavigate } from 'react-router-dom'
import AuthContext from "./contexts/AuthContext"
import * as authService from './services/authService'
import ClientSection from "./components/ClientSection/ClienSection"
import Information from "./components/Information/Information"
import Slider from "./components/Slider/Slider"
import Contact from "./components/contact/Contact"
import GiftSection from "./components/giftSection/GiftSection"
import Header from "./components/header/Header"
import SavingSection from "./components/savingSection/SavingSection"
import ShopSection from "./components/shopSection/ShopSection"
import WhySection from "./components/whySection/WhySection"
import Login from './components/Login';
import Navigation from "./components/navigation/Navigation"
import Home from "./components/home/Home"


function App() {
  let navigate = useNavigate();
    let [auth, setAuth] = useState(() => {
        localStorage.removeItem('accessToken');

        return {}
    });

    let loginSubmitHandler = async (values) => {
        try {
            let result = await authService.login(values.email, values.password);
           // console.log(result);
            setAuth(result);
            localStorage.setItem('accessToken', result.accessToken)
            // console.log(localStorage.setItem('accessToken', result.accessToken))
            navigate('/data/catalog');
            // console.log(result.accessToken);
        } catch (error) {
            console.error("Login failed:", error);

        }
    }
    let registerSubmitHandler = async (values) => {
        let result = await authService.register(values.email, values.password);
        console.log(values);
        setAuth(result);
         localStorage.setItem('accessToken', result.accessToken.token)
        console.log(result)
        navigate('/data/catalog')
    }

    let logoutHandler = () => {
        setAuth({});
        navigate('/')
        localStorage.removeItem('accessToken');

    }
    let values = {
        loginSubmitHandler,
        registerSubmitHandler,
        logoutHandler,
        email: auth.email,
        _id: auth._id,
        isAuthenticated: !!auth.email,

    }
  return (
<>
            <AuthContext.Provider value={values}>

                <Navigation />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/users/login" element={<Login />} />
                    <Route path="/users/slider" element={<Slider />} />
                    <Route path="/users/logout" element={<Logout />} />
                    <Route path="/data/shopSection" element={<ShopSection />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/data/create" element={<CarCreate />}></Route>
                    <Route path="/data/catalog/:id" element={<CarDetails />}></Route>

                </Routes>
                <Footer />
            </AuthContext.Provider>
        </>



   /* <Router>
      <div>
        
          <div>
            <Header />
            <Slider />
            <ShopSection />
            <SavingSection />
            <WhySection />
            <GiftSection />
            <Contact />
            <ClientSection />
            <Information />
            <Navigation/>
          </div>
        ) : (
          <Redirect to="/login" />
        )}
        <Route
          path="/login"
          render={() => <Login onLogin={handleLogin} />}
        />
      </div>
    </Router>*/
  );
}

export default App
