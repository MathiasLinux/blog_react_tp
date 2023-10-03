// Importation of the different modules and functions used by the file
import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

// Importation of the css
import "./Styles/main.css";
import 'bootstrap/dist/css/bootstrap.css';

// Importation of the different pages
import Home from "./Pages/Home";
import About from "./Pages/About";
import News from "./Pages/News";
import Faq from "./Pages/Faq";
import Contact from "./Pages/Contact";
import NotFound from "./Pages/NotFound";
import NewsDetail from "./Pages/NewsDetail";
import Login from "./Pages/Login"
import Logout from "./Pages/Logout";

// Importation of the different componants
import Nav from "./Componants/Nav";
import AppsPref from "./Componants/AppsPref";
import DistrosPref from "./Componants/DistrosPref";
import ServsPref from "./Componants/ServsPref";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Router>
            <Nav/>
            <Routes>
                {/* The different path to the different Routes */}
                <Route exact path="/" element={<Home/>}></Route>
                <Route path="/about" element={<About/>}>
                    {/* The different routes to display the componants inside the /about page */}
                    <Route path="distros-pref" element={<DistrosPref/>}/>
                    <Route path="apps-pref" element={<AppsPref/>}/>
                    <Route path="servs-pref" element={<ServsPref/>}/>
                </Route>
                <Route path="/news" element={<News/>}></Route>
                {/* The slug is the id of the news article */}
                <Route path="/news/:slug" element={<NewsDetail/>}></Route>
                <Route path="/faq" element={<Faq/>}></Route>
                <Route path="/contact" element={<Contact/>}></Route>
                <Route path="/login" element={<Login/>}></Route>
                <Route path="/logout" element={<Logout/>}></Route>
                {/* When the route is not known the user go to this page */}
                <Route path="*" element={<NotFound/>}></Route>
            </Routes>
        </Router>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
