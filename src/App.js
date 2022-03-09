import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Signin from "./Components/Authentication/Signin";
import Signup from "./Components/Authentication/Signup";
import "./css/style.scss";
import ResetPassword from "./Components/Authentication/ResetPassword";
import AccountManager from "./Components/AccountManager/AccountManager";
import { createContext, useState } from "react";
import Header from "./Components/Header/Header";
import Sidebar from "./Components/SideBar/Sidebar";
import Campaigns from "./Components/Campaigns/Campaigns";
import Tags from "./Components/AccountManager/Tags/Tags";
import Proxy from "./Components/AccountManager/Proxy/Proxy";
import Account from "./Components/AccountManager/Account/Account";
// import Header from "./Components/Header/Header";

export const ThemeContext = createContext();

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(localStorage.theme == "dark" ? true : false);
  return (
    <Router>
      <ThemeContext.Provider value={{ darkMode }}>
        <div className='font-inter antialiased flex h-screen overflow-hidden'>
          {isLoggedIn && <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />}
          <div className='relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden'>
            {isLoggedIn && <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} darkMode={darkMode} setDarkMode={setDarkMode} />}

            <Routes>
              {/* Authentication */}
              {!isLoggedIn && <Route path='/' element={<Signin />} />}
              {!isLoggedIn && <Route path='/signup' element={<Signup />} />}
              {!isLoggedIn && <Route path='/reset-password' element={<ResetPassword />} />}

              {/* Account Manager */}
              {isLoggedIn && (
                <>
                  <Route path='/' element={<AccountManager />} />
                  <Route path='/campaigns' element={<Campaigns />} />
                  <Route path='/tags' element={<Tags />} />
                  <Route path='/account' element={<Account />} />
                  <Route path='/proxy' element={<Proxy />} />
                </>
              )}
            </Routes>
          </div>
        </div>
      </ThemeContext.Provider>
    </Router>
  );
}

export default App;
