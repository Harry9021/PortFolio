import "../styles/intro.css";
import { AiOutlineLinkedin } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import TypeWriterEffect from "react-typewriter-effect";
import { FaGithub } from "react-icons/fa";
import Lap from "../assets/lap.jpeg"

export default function Intro() {
    return (
        <>
            <div className="navbar">
                <div className="name-main">
                    <div className="name">Hariom Ingle</div>
                    <div className="stud">
                        Student at Pune Institute Of Computer Technology, Pune
                    </div>
                </div>
                <div className="social">
                    <div className="linked">
                        <a href="https://www.linkedin.com/in/hariom-ingle-3b943b258/">
                            <AiOutlineLinkedin
                                style={{ width: 30, height: 30 }}
                            />
                        </a>
                    </div>
                    <div className="insta">
                        <a href="https://www.instagram.com/hariom_ingle_004?igsh=czZ0NTNicmJqZHk0">
                            <AiFillInstagram
                                style={{ width: 30, height: 30 }}
                            />
                        </a>
                    </div>
                    <div className="git">
                        <a href="https://github.com/Harry9021">
                            <FaGithub
                                style={{ width: 30, height: 30 }}
                            />
                        </a>
                    </div>
                    <div className="number">
                        <span>+919021850389</span>
                    </div>
                </div>
            </div>
            <div className="hello">Hello Visitor 👋👋</div>
            <div className="summary">
                <div className="sum-1">
                    <span
                        style={{
                            alignSelf: "start",
                            fontWeight: 500,
                        }}
                    >
                        About Me
                    </span>
                    <br />
                    <TypeWriterEffect
                        textStyle={{ fontFamily: "Roboto Slab" ,fontSize: 'calc(10px + (24 - 16) * ((100vw - 320px) / (1600 - 320)))',fontWeight:100 }}
                        startDelay={10}
                        cursorColor="black"
                        text="I am a dedicated and passionate Information Technology
                    student at PICT Pune, currently in my 3rd. My academic
                    journey has equipped me with a strong foundation in software
                    development, networking, and data analysis, while my
                    hands-on projects have honed my practical skills. I am eager
                    to leverage my knowledge and experience in a challenging and
                    dynamic environment to contribute to innovative technology
                    solutions."
                        typeSpeed={50}
                        eraseSpeed={50}
                    />
                </div>
                <div className="sum-2">
                    <img src={Lap} alt="" />
                </div>
            </div>
        </>
    );
}
