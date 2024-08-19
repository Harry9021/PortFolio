import TypeWriterEffect from "react-typewriter-effect";
import { FaPersonChalkboard } from "react-icons/fa6";
import Waver from "../assets/hi waver.gif";

export default function Experience() {
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
                        multiText={["Experience"]}
                        multiTextDelay={1000}
                        typeSpeed={100}
                        eraseSpeed={100}
                        multiTextLoop={true}
                    />
                </div>
                <div className="pros">
                    <div
                        className="pro-title"
                        style={{ display: "flex", alignItems: "center" }}
                    >
                        <FaPersonChalkboard
                            style={{ width: 40, height: 40, paddingRight: 10 }}
                        />
                        My Experience :
                    </div>
                    <hr />
                    <div className="Exper-cont">
                        <div>
                            <div className="proj">1) WayPort</div>
                            <div className="pro-desc">
                                The company is dedicated to revolutionizing the
                                travel experience by simplifying multimodal
                                journeys for every passenger, while also
                                developing an innovative website to seamlessly
                                integrate various modes of transportation.
                            </div>
                            <div
                                className="contibution"
                                style={{ paddingTop: 40 }}
                            >
                                <div>
                                    -- Worked on the UI for this startup
                                    project.
                                </div>
                                <hr />
                                <div>-- Implemented parts of the backend.</div>
                                <hr />
                            </div>
                            <div
                                style={{
                                    alignItems: "center",
                                    display: "flex",
                                    justifyContent: "center",
                                }}
                            >
                                <img
                                    src={Waver}
                                    alt=""
                                    style={{
                                        width: 250,
                                        height: 200,
                                        marginTop: 30,
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
