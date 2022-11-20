import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import QuestionSet from "./components/QuestionSet";
import Set from "./components/Set";

const App: React.FC = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="group/:id">
                <Route index element={<QuestionSet />} />
                <Route path="set/:setnumber" element={<Set />} />
            </Route>
        </Routes>
    );
};

export default App;
