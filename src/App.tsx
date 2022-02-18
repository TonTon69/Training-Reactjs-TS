import { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import { Button, Container } from "reactstrap";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import News from "./pages/News";
import Todos from "./pages/Todos";
import Todo from "./pages/Todo";

import { ThemeContext } from "./contexts/ThemeContext";
import "./App.css";

function App() {
    //context
    const { theme, toogleTheme } = useContext(ThemeContext);

    return (
        <div className="App">
            <Header />

            <main className="main mt-5">
                <Container>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/todos" element={<Todos />}>
                            <Route path=":todoId" element={<Todo />} />
                        </Route>
                        <Route path="/news" element={<News />} />
                        <Route path="/contact" element={<Contact />} />
                    </Routes>

                    <Button
                        onClick={() =>
                            toogleTheme(theme === "dark" ? "light" : "dark")
                        }
                    >
                        Toogle Theme
                    </Button>
                </Container>
            </main>

            <Footer />
        </div>
    );
}

export default App;
