import "../styles/projects.css";
import TypeWriterEffect from "react-typewriter-effect";
import { FaGithub } from "react-icons/fa";
import { SiTheodinproject } from "react-icons/si";
import Projector from "../assets/project.gif";

export default function Projects() {
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
                        multiText={["Projects"]}
                        multiTextDelay={1000}
                        typeSpeed={100}
                        eraseSpeed={100}
                        multiTextLoop={true}
                    />
                </div>
                <div className="pros">
                    <div className="pro-title">
                        <SiTheodinproject
                            style={{ width: 40, height: 40, paddingRight: 10 }}
                        />
                        1) Lost And Found :{" "}
                    </div>
                    <hr />
                    <div className="pro-cont">
                        <div className="pro-desc">
                            The "Lost and Found" project aims to develop a
                            comprehensive system to help individuals report and
                            locate lost items. The system will provide a
                            platform for users to report lost items, search for
                            items that have been found, and connect with others
                            to return or claim belongings. I handle the backend
                            for the "Lost and Found" project, database
                            management, and user authentication
                        </div>
                        <div className="git-linker">
                            <div className="emote">Link to my project </div>
                            <hr />
                            👇👇
                            <hr />
                            <hr />
                            <div className="git-pro-link">
                                <a href="https://github.com/Harry9021/LF-project.git">
                                    <FaGithub
                                        className="icon-2"
                                        color="white"
                                        style={{ width: 100, height: 100 }}
                                    />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div style={{display:"flex", justifyContent:"space-between"}}>
                        <div>
                        <div className="pro-duration">
                            <div className="pro-duration-dates">
                                <div className="from-d">From: Dec 2023</div>
                                <div style={{ width: 60 }}></div>

                                <div className="to-d"> To: Jan 2024</div>
                            </div>
                            <div className="pro-duration-title">
                                Duration: 8 weeks
                            </div>
                        </div>
                        <div className="pro-duration">
                            ---&gt; Tools & technologies used: ReactJS,
                            Express.js, Node.js, MongoDB
                        </div>
                        </div>
                        <div>
                            <img
                                src={Projector}
                                alt=""
                                style={{ width: 220, height: 220, paddingTop:30, borderRadius:20}}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
