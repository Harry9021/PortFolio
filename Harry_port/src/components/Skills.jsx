import TypeWriterEffect from "react-typewriter-effect";
import { GiSkills } from "react-icons/gi";
import "../styles/skills.css";
import Skiller from "../assets/skills.gif";

export default function Skills() {
    return (
        <>
            <div className="project">
                <div className="tito">
                    <TypeWriterEffect
                        textStyle={{
                            fontFamily: "Edu AU VIC WA NT Hand",
                            fontSize:
                                "calc(32px + (24 - 16) * ((100vw - 320px) / (1600 - 320)))",
                            fontWeight: 500,
                        }}
                        startDelay={10}
                        cursorColor="black"
                        multiText={["Skills"]}
                        multiTextDelay={1000}
                        typeSpeed={100}
                        eraseSpeed={100}
                        multiTextLoop={true}
                    />
                </div>
                <div className="pros">
                    <div className="pro-title" style={{display:"flex", alignItems:"center" }}>
                        <GiSkills
                            style={{ width: 40, height: 40, paddingRight: 10 }}
                        />
                        My Skill Set :
                    </div>
                    <hr />
                    <div className="skill-cont">
                        <div
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center",
                            }}
                        >
                            <div>
                                Languages: C++, Python, Java, JavaScript
                                Developer
                            </div>
                            <hr />
                            <div>Tools: Git, GitHub, Figma</div>
                            <hr />
                            <div>
                                Frameworks & Libraries: ReactJS, Node.js,
                                Express.js
                            </div>
                            <hr />
                            <div>Cloud/Databases: MySQL, MongoDB</div>
                            <hr />
                            <div>
                                Soft Skills: Problem-Solving, Adaptability,
                                Critical Thinking
                            </div>
                            <hr />
                            <div>
                                Coursework: Object-Oriented Programming (OOP),
                                Data Structures and Algorithms (DSA)
                            </div>
                            <hr />
                            <div>
                                Areas of Interest: Web Development, Competetive
                                Programming
                            </div>
                            <hr />
                        </div>
                        <div>
                            <img
                                src={Skiller}
                                alt=""
                                style={{ borderRadius: 10, paddingTop: 30 }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
