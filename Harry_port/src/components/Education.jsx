import "../styles/education.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaGraduationCap } from "react-icons/fa6";
import TypeWriterEffect from "react-typewriter-effect";
import { BiSolidRightArrow } from "react-icons/bi";

export default function Education() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed:2000,
    };
    return (
        <>
            <div>
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
                        multiText={["Education"]}
                        multiTextDelay={1000}
                        typeSpeed={100}
                        eraseSpeed={100}
                        multiTextLoop={true}
                    />
                </div>
                <div className="card-slider">
                    <Slider {...settings} className="">
                        <div className="ug">
                            <div className="ug-0">
                                <div className="ug-logo">
                                    <FaGraduationCap
                                        color="orange"
                                        style={{
                                            width: 120,
                                            height: 120,
                                            padding: 10,
                                        }}
                                        className="animated-cap"
                                    />
                                </div>
                                <div className="ug-x">
                                    <div className="ug-1">UnderGraduation</div>
                                    <div className="ug-2">
                                        B.E.(Information Technology)
                                    </div>
                                    <div className="ug-3">
                                        Pune Institute of Computer Technology,
                                        Pune
                                    </div>
                                </div>
                            </div>
                            <div className="details">
                                <div className="year-h">
                                <div className="arrow">
                                    <BiSolidRightArrow color="orange" />
                                </div>
                                <div className="year">2022-2026</div>
                                </div>
                            </div>
                        </div>
                        <div className="hsc">
                            <div className="ug-0">
                                <div className="ug-logo">
                                    <FaGraduationCap
                                        color="orange"
                                        style={{
                                            width: 120,
                                            height: 120,
                                            padding: 10,
                                        }}
                                        className="animated-cap"
                                    />
                                </div>
                                <div className="ug-x">
                                    <div className="ug-1">
                                        Higher Secondary (XII)
                                    </div>
                                    <div className="ug-2">H.S.C.(Science)</div>
                                    <div className="ug-3">
                                        Shri Shivaji Jr. College, Nanded
                                    </div>
                                </div>
                            </div>
                            <div className="details">
                                <div className="year-h">
                                    <div className="arrow">
                                        <BiSolidRightArrow color="orange" />
                                    </div>
                                    <div className="year">
                                        Year of completion: 2022
                                    </div>
                                </div>
                                <div className="Percent-h">
                                    <div className="arrow">
                                        <BiSolidRightArrow color="orange" />
                                    </div>
                                    <div className="year">
                                        Percentage: 83.50%
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="ssc">
                            <div className="ug-0">
                                <div className="ug-logo">
                                    <FaGraduationCap
                                        color="orange"
                                        style={{
                                            width: 120,
                                            height: 120,
                                            padding: 10,
                                        }}
                                        className="animated-cap"
                                    />
                                </div>
                                <div className="ug-x">
                                    <div className="ug-1">
                                        Secondary (X)
                                    </div>
                                    <div className="ug-2">S.S.C.</div>
                                    <div className="ug-3">
                                        Saraswati High School , Nanded
                                    </div>
                                </div>
                            </div>
                            <div className="details">
                                <div className="year-h">
                                    <div className="arrow">
                                        <BiSolidRightArrow color="orange" />
                                    </div>
                                    <div className="year">
                                        Year of completion: 2020
                                    </div>
                                </div>
                                <div className="Percent-h">
                                    <div className="arrow">
                                        <BiSolidRightArrow color="orange" />
                                    </div>
                                    <div className="year">
                                        Percentage: 90.20%
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Slider>
                </div>
            </div>
        </>
    );
}
