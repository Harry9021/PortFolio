import "../styles/intro.css";
import { AiOutlineLinkedin } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { SiGmail } from "react-icons/si";
import TypeWriterEffect from "react-typewriter-effect";
import { FaGithub } from "react-icons/fa";
// import Lap from "../assets/lap.jpeg"
import Hello from "../assets/hello.gif";

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
                    contacts 👉
                    <div className="linked">
                        <a href="https://www.linkedin.com/in/hariom-ingle-3b943b258/">
                            <AiOutlineLinkedin
                                className="icon-0"
                                style={{ width: 30, height: 30 }}
                            />
                        </a>
                    </div>
                    <div className="insta">
                        <a href="https://www.instagram.com/hariom_ingle_004?igsh=czZ0NTNicmJqZHk0">
                            <AiFillInstagram
                                className="icon-1"
                                style={{ width: 30, height: 30 }}
                            />
                        </a>
                    </div>
                    <div className="git">
                        <a href="https://github.com/Harry9021">
                            <FaGithub
                                className="icon-2"
                                style={{ width: 30, height: 30 }}
                            />
                        </a>
                    </div>
                    <div className="gmail">
                        <a href="mailto:harryingle00@gmail.com">
                            <SiGmail
                                className="icon-0"
                                style={{ width: 30, height: 30 }}
                            />
                        </a>
                    </div>
                    <div className="number">
                        <a href="tel:+919021850389" style={{textDecoration:"none", color:"white"}}>
                            <span>+919021850389</span>
                        </a>
                    </div>
                </div>
            </div>
            <div className="hello">
                <div className="hello-1">
                    <span>H</span>
                    <span>e</span>
                    <span>l</span>
                    <span>l</span>
                    <span>o</span>

                    <span> </span>
                    <span>v</span>
                    <span>i</span>
                    <span>s</span>
                    <span>i</span>
                    <span>t</span>
                    <span>o</span>
                    <span>r</span>
                </div>
                <span className="waving-hand">👋</span>
                <span className="waving-hand">👋</span>
            </div>
            <div className="summary">
                <div className="sum-1">
                    <span
                        style={{
                            alignSelf: "start",
                            fontWeight: 500,
                        }}
                    >
                        <TypeWriterEffect
                            textStyle={{
                                fontFamily: "Edu AU VIC WA NT Hand",
                                fontSize:
                                    "calc(32px + (24 - 16) * ((100vw - 320px) / (1600 - 320)))",
                                fontWeight: 500,
                            }}
                            startDelay={10}
                            cursorColor="black"
                            multiText={["About Me"]}
                            multiTextDelay={1000}
                            typeSpeed={100}
                            eraseSpeed={100}
                            multiTextLoop={true}
                        />
                    </span>
                    <br />
                    <TypeWriterEffect
                        textStyle={{
                            fontFamily: "Edu AU VIC WA NT Hand",
                            fontSize:
                                "calc(10px + (24 - 16) * ((100vw - 320px) / (1600 - 320)))",
                            fontWeight: 100,
                        }}
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
                        typeSpeed={20}
                        eraseSpeed={50}
                    />
                </div>
                <div className="sum-2">
                    <img src={Hello} className="fading-border" alt="" />
                </div>
            </div>
        </>
    );
}
