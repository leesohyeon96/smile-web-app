import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Route, Routes} from "react-router-dom";
import Error404 from "./Pages/Error/Error404";
import Login from "./Pages/Login/Login";

function App() {
    return (
        <Routes>
            <Route exact path={'/'} element={<Login/>}/>
            <Route exact path={'*'} element={<Error404/>}/>
        </Routes>
    );
}

export default App;
