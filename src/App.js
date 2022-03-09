import React, { useState, useEffect } from 'react'
import './styles.css'
import Home from './pages/Home'
import QuestionOne from './pages/QuestionOne'
import QuestionTwo from './pages/QuestionTwo'
import Results from './pages/Results'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
//import firebaseconfig from './config/firebaseconfig'

export default function App() {
    return (
        <Router>
            <Routes>
                <Route exact path="/" component={ Home } />
                <Route exact path="/question-one" component={ QuestionOne } />
                <Route exact path="/question-two" component={ QuestionTwo } />
                <Route exact path="/results" component={ Results } />
            </Routes>
        </Router>
    );
}
