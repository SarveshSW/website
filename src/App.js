import './App.css';
import styled,{ThemeProvider} from 'styled-components';
import { lightTheme } from './utils/Themes';
import NavBar from "./components/NavBar";
import Hero from "./components/HeroSection";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
//import Footer from "./components/Footer";
import Experience from "./components/Experience";
import Education from "./components/Education";
import { BrowserRouter as Router } from "react-router-dom";

const Body = styled.div`
    background-color: ${({ theme }) => theme.bg};
    width: 100%;
    overflow-x: hidden;
`
function App() {
    return (
        <ThemeProvider theme={lightTheme}>
            <Router>
                <NavBar />
                <Body>
                    <Hero />
                    <Skills />
                    <Experience />
                    <Projects />
                    <Education />
                </Body>
            </Router>
        </ThemeProvider>

    )
}
export default App;