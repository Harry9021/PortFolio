import "./App.css";
import Intro from "./components/Intro";
import Education from "./components/Education";
import Projects from "./components/Projects";
import ScrollProgressBar from "./components/ScrollProgressBar";
import Skills from "./components/Skills";

function App() {
    return (
        <>
            <ScrollProgressBar />
            <div className="intro">
                <Intro />
            </div>
            <div className="education">
                <Education />
            </div>
            <div className="skills">
                <Skills />
            </div>
            <div className="projects">
                <Projects />
            </div>
            <div className="experience"></div>
        </>
    );
}

export default App;
