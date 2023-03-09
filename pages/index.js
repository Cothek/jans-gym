import Bar from "../components/Bar";
import Fitness from "../components/Fitness";
import Heart from "../components/Heart";
import FullscriptLogo from "../components/FullscriptLogo";
import JansGymLogo from "../components/JansGymLogo";
import RoexLogo from "../components/RoexLogo";
import ThornLogo from "../components/ThornLogo";
import theme from "../tailwind.config";
import Calendar from "../components/Calendar";
import Supplements from "../components/Supplements";
import Box from "../components/Box";
import Head from "next/head";
import { useRef, useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import JansGymTextLogo from "../components/JansGymTextLogo";
import BarLarge from "../components/BarLarge";
import Contact from "../components/Contact";

const colors = theme.theme.extend.colors;
const sections = [
  { name: `top` },
  { name: `home` },
  { name: `training` },
  { name: `profile` },
  { name: `classes` },
  { name: `supplements` },
  { name: `equipment` },
  { name: `contact` },
];

function setRefs() {
  sections.forEach((item) => {
    item.ref = useRef(null);
    item.isOnScreen = useOnScreen(item.ref);
  });
}

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function useOnScreen(ref) {
  const [isOnScreen, setIsOnScreen] = useState(false);
  const observerRef = useRef(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      ([entry]) => setIsOnScreen(entry.isIntersecting),
      { rootMargin: "-50%" }
    );
  }, []);

  useEffect(() => {
    observerRef.current.observe(ref.current);

    return () => {
      observerRef.current.disconnect();
    };
  }, [ref]);

  return isOnScreen;
}

export default function Home() {
  const [sectionOnScreen, setSectionOnScreen] = useState("home");
  const mobileHeight = useMediaQuery({ maxHeight: 700 });
  const mobileWidth = useMediaQuery({ maxWidth: 1024 });
  const [isMobile, setIsMobile] = useState(false);
  const [isMenuOpen, setMenuOpen] = useState(false);

  setRefs();

  useEffect(() => {
    setIsMobile(mobileHeight || mobileWidth);
  });

  useEffect(() => {
    sections.forEach((item) => {
      if (sections[0].isOnScreen) {
        setSectionOnScreen(sections[0].name);
      } else if (item.isOnScreen) {
        setSectionOnScreen(item.name);
      }
    });
  });

  function menuClick(e) {
    setMenuOpen(!isMenuOpen);
  }

  function scrollToSection(e) {
    sections[
      e.target.closest(`div`).dataset.section
    ].ref.current.scrollIntoView({
      behavior: "smooth",
    });

    setMenuOpen(false);
  }

  return (
    <div className={`font-primary font-light text-dark`}>
      <Head>
        <title>Jan's Gym</title>
      </Head>
      <div className="Content">
        <nav
          className={`${sectionOnScreen === "top" ? "" : "group/nav "}${
            isMobile && isMenuOpen
              ? "w-full "
              : sectionOnScreen === "top"
              ? "w-full xs:w-fit "
              : "w-fit "
          }fixed z-50 h-full p-3 transition-all duration-300 md:max-w-[50%] lg:p-6`}
        >
          <div
            className={`${
              sectionOnScreen === "top"
                ? isMobile && isMenuOpen
                  ? "gap-8"
                  : "gap-2"
                : isMobile && !isMenuOpen
                ? "gap-0"
                : "gap-4"
            } relative z-10 grid h-fit rounded-2xl bg-white/20 p-4 backdrop-blur-sm transition-all duration-300 sm:p-5 lg:p-6`}
          >
            <div
              className={`${
                sectionOnScreen === "top"
                  ? "gap-6 justify-self-start sm:gap-6"
                  : "gap-0 justify-self-start"
              } group/logo grid cursor-pointer grid-flow-col place-items-center transition-all duration-300`}
            >
              <div data-section={1} onClick={scrollToSection}>
                <JansGymLogo
                  className={`${
                    sectionOnScreen === "top"
                      ? "h-28 sm:h-40 lg:h-[25vh] lg:w-[25vh]"
                      : "h-12 sm:h-24"
                  } transition-all duration-300 group-hover/logo:scale-105`}
                  colorCenter={colors.dark}
                  colorCircle={colors.dark}
                  colorDate={colors.dark}
                  colorEST={colors.dark}
                  colorJ={colors.primary}
                  colorG={colors.light}
                />
              </div>
              <JansGymTextLogo
                className={`${
                  sectionOnScreen === "top"
                    ? isMobile && isMenuOpen
                      ? "h-0 w-0"
                      : "h-20 sm:h-24 lg:h-[25vh] lg:w-[25vh]"
                    : "h-0 w-0"
                } transition-all duration-300 group-hover/logo:scale-105`}
                stroke={colors.white[0]}
                fillBar={colors.dark}
                fillJans={colors.primary}
                fillGym={colors.light}
              />
              <div
                className={`${
                  isMobile
                    ? sectionOnScreen === "top"
                      ? isMenuOpen
                        ? "absolute top-0 right-0 mr-4 mt-6 grid w-8 gap-1 sm:w-12"
                        : "col-start-1 row-start-2 mr-0 mt-0 grid w-8 gap-1 justify-self-center sm:w-12"
                      : isMenuOpen
                      ? "absolute top-0 right-0 mr-4 mt-6 grid w-8 gap-1 sm:w-12"
                      : "col-start-1 row-start-2 mt-4 grid w-8 gap-1 justify-self-center sm:mt-[calc(3vh+0.5rem)] sm:w-12"
                    : "hidden"
                } transition-all`}
                onClick={menuClick}
              >
                <div
                  className={`${
                    isMenuOpen
                      ? sectionOnScreen === "top"
                        ? "translate-y-[.4375rem] rotate-45 sm:translate-y-2 "
                        : "translate-y-1.5 rotate-45 sm:translate-y-2 "
                      : ""
                  }${
                    sectionOnScreen === "top" ? "h-1.5" : "h-1"
                  } rounded-full bg-dark transition-all sm:h-2`}
                ></div>
                <div
                  className={`${
                    isMenuOpen
                      ? sectionOnScreen === "top"
                        ? "-translate-y-[.4375rem] -rotate-45 sm:-translate-y-2 "
                        : "-translate-y-1.5 -rotate-45 sm:-translate-y-2 "
                      : ""
                  }row-start-3 ${
                    sectionOnScreen === "top" ? "h-1.5" : "h-1"
                  } rounded-full bg-dark transition-all sm:h-2`}
                ></div>
              </div>
            </div>
            <h2
              className={`${
                sectionOnScreen === "top"
                  ? "mx-4 mb-[1vh] mt-[calc(2.5vh)] max-h-full rounded-xl bg-light/50 p-[3.5vh] py-[2vh] text-[4.5vh] leading-[6.5vh] text-white opacity-100"
                  : "m-0 max-h-0 overflow-hidden p-0 text-[0px] opacity-0"
              } ${
                isMobile ? "hidden " : "leading-[3vw] "
              }transition-all duration-300`}
            >
              Providing top quality training to help you achieve the health
              goals you want!
            </h2>
            <div
              className={`${
                isMobile && !isMenuOpen
                  ? "max-h-0 max-w-0"
                  : "max-h-full max-w-full sm:pb-6"
              } grid gap-2 overflow-hidden transition-all`}
            >
              <div
                className={`${
                  sectionOnScreen === "top" ? "min-w-0 " : ""
                }group/training mr-0 flex cursor-pointer place-items-center gap-4 rounded-lg bg-transparent transition-all hover:bg-light/50 hover:text-white hover:drop-shadow-lg group-hover/nav:mr-4 sm:ml-4`}
                data-section={2}
                onClick={scrollToSection}
              >
                <Fitness
                  className={`${
                    sectionOnScreen === "top"
                      ? "w-[calc(2rem+2vh)]"
                      : "w-12 sm:w-16"
                  } ${
                    sectionOnScreen === sections[2].name
                      ? `text-primary`
                      : `text-secondary`
                  } transition-all group-hover/training:text-primary`}
                  fill={"currentColor"}
                  stroke={colors.dark}
                />
                <h3
                  className={`${
                    sectionOnScreen === "top"
                      ? "mr-4 max-w-full text-[calc(1rem+1vh)] opacity-100"
                      : "mr-0 max-w-0 text-2xl opacity-0 sm:text-3xl"
                  } mt-[5px] transition-all group-hover/nav:mr-4 group-hover/nav:max-w-full group-hover/nav:opacity-100`}
                >
                  {capitalizeFirstLetter(sections[2].name)}
                </h3>
              </div>
              <div
                className={`${
                  sectionOnScreen === "top" ? "min-w-0 " : " "
                }group/profile mr-0 flex cursor-pointer place-items-center gap-4 rounded-lg bg-transparent transition-all hover:bg-light/50 hover:text-white hover:drop-shadow-lg group-hover/nav:mr-4 sm:ml-4`}
                data-section={3}
                onClick={scrollToSection}
              >
                <Heart
                  className={`${
                    sectionOnScreen === "top"
                      ? "w-[calc(2rem+2vh)]"
                      : "w-12 sm:w-16"
                  } ${
                    sectionOnScreen === sections[3].name
                      ? `text-primary`
                      : `text-secondary`
                  } transition-all group-hover/profile:text-primary`}
                  fill={"currentColor"}
                  stroke={colors.dark}
                />
                <h3
                  className={`${
                    sectionOnScreen === "top"
                      ? "mr-4 max-w-full text-[calc(1rem+1vh)] opacity-100"
                      : "mr-0 max-w-0 text-2xl opacity-0 sm:text-3xl"
                  } mt-[5px] transition-all group-hover/nav:mr-4 group-hover/nav:max-w-full group-hover/nav:opacity-100`}
                >
                  {capitalizeFirstLetter(sections[3].name)}
                </h3>
              </div>
              <div
                className={`${
                  sectionOnScreen === "top" ? "min-w-0 " : " "
                }group/classes mr-0 flex cursor-pointer place-items-center gap-4 rounded-lg bg-transparent transition-all hover:bg-light/50 hover:text-white hover:drop-shadow-lg group-hover/nav:mr-4 sm:ml-4`}
                data-section={4}
                onClick={scrollToSection}
              >
                <Calendar
                  className={`${
                    sectionOnScreen === "top"
                      ? "w-[calc(2rem+2vh)]"
                      : "w-12 sm:w-16"
                  } ${
                    sectionOnScreen === sections[4].name
                      ? `text-primary`
                      : `text-secondary`
                  } transition-all group-hover/classes:text-primary`}
                  fill={"currentColor"}
                  stroke={colors.dark}
                />
                <h3
                  className={`${
                    sectionOnScreen === "top"
                      ? "mr-4 max-w-full text-[calc(1rem+1vh)] opacity-100"
                      : "mr-0 max-w-0 text-2xl opacity-0 sm:text-3xl"
                  } mt-[5px] transition-all group-hover/nav:mr-4 group-hover/nav:max-w-full group-hover/nav:opacity-100`}
                >
                  {capitalizeFirstLetter(sections[4].name)}
                </h3>
              </div>
              <div
                className={`${
                  sectionOnScreen === "top" ? "min-w-0 " : " "
                }group/supplements mr-0 flex cursor-pointer place-items-center gap-4 rounded-lg bg-transparent transition-all hover:bg-light/50 hover:text-white hover:drop-shadow-lg group-hover/nav:mr-4 sm:ml-4`}
                data-section={5}
                onClick={scrollToSection}
              >
                <Supplements
                  className={`${
                    sectionOnScreen === "top"
                      ? "w-[calc(2rem+2vh)]"
                      : "w-12 sm:w-16"
                  } ${
                    sectionOnScreen === sections[5].name
                      ? `text-primary`
                      : `text-secondary`
                  } transition-all group-hover/supplements:text-primary`}
                  fill={"currentColor"}
                  stroke={colors.dark}
                />
                <h3
                  className={`${
                    sectionOnScreen === "top"
                      ? "mr-4 max-w-full text-[calc(1rem+1vh)] opacity-100"
                      : "mr-0 max-w-0 text-2xl opacity-0 sm:text-3xl"
                  } mt-[5px] transition-all group-hover/nav:mr-4 group-hover/nav:max-w-full group-hover/nav:opacity-100`}
                >
                  {capitalizeFirstLetter(sections[5].name)}
                </h3>
              </div>
              <div
                className={`${
                  sectionOnScreen === "top" ? "min-w-0 " : " "
                }group/equipment mr-0 flex cursor-pointer place-items-center gap-4 rounded-lg bg-transparent transition-all hover:bg-light/50 hover:text-white hover:drop-shadow-lg group-hover/nav:mr-4 sm:ml-4`}
                data-section={6}
                onClick={scrollToSection}
              >
                <Box
                  className={`${
                    sectionOnScreen === "top"
                      ? "w-[calc(2rem+2vh)]"
                      : "w-12 sm:w-16"
                  } ${
                    sectionOnScreen === sections[6].name
                      ? `text-primary`
                      : `text-secondary`
                  } transition-all group-hover/equipment:text-primary`}
                  fill={"currentColor"}
                  stroke={colors.dark}
                />
                <h3
                  className={`${
                    sectionOnScreen === "top"
                      ? "mr-4 max-w-full text-[calc(1rem+1vh)] opacity-100"
                      : "mr-0 max-w-0 text-2xl opacity-0 sm:text-3xl"
                  } mt-[5px] transition-all group-hover/nav:mr-4 group-hover/nav:max-w-full group-hover/nav:opacity-100`}
                >
                  {capitalizeFirstLetter(sections[6].name)}
                </h3>
              </div>
              <div
                className={`${
                  sectionOnScreen === "top" ? "min-w-0 " : " "
                }group/equipment mr-0 flex cursor-pointer place-items-center gap-4 rounded-lg bg-transparent transition-all hover:bg-light/50 hover:text-white hover:drop-shadow-lg group-hover/nav:mr-4 sm:ml-4`}
                data-section={7}
                onClick={scrollToSection}
              >
                <Contact
                  className={`${
                    sectionOnScreen === "top"
                      ? "w-[calc(2rem+2vh)]"
                      : "w-12 sm:w-16"
                  } ${
                    sectionOnScreen === sections[7].name
                      ? `text-primary`
                      : `text-secondary`
                  } transition-all group-hover/equipment:text-primary`}
                  fill={"currentColor"}
                  stroke={colors.dark}
                />
                <h3
                  className={`${
                    sectionOnScreen === "top"
                      ? "mr-4 max-w-full text-[calc(1rem+1vh)] opacity-100"
                      : "mr-0 max-w-0 text-2xl opacity-0 sm:text-3xl"
                  } mt-[5px] transition-all group-hover/nav:mr-4 group-hover/nav:max-w-full group-hover/nav:opacity-100`}
                >
                  {capitalizeFirstLetter(sections[7].name)}
                </h3>
              </div>
            </div>
          </div>
          <h2
            className={`absolute bottom-0 left-0 w-[calc(100vw-2rem)] backdrop-blur-sm ${
              sectionOnScreen === "top"
                ? "mx-4 mb-4 max-h-full rounded-xl bg-light/50 p-6 py-5 text-2xl text-white opacity-100 sm:text-4xl sm:leading-[3rem]"
                : "m-0 max-h-0 overflow-hidden p-0 text-[0px] opacity-0"
            } ${isMobile ? "" : "hidden "}transition-all duration-300`}
          >
            Providing top quality training to help you achieve the health goals
            you want!
          </h2>
        </nav>
        <div
          id={sections[0].name}
          ref={sections[0].ref}
          className="absolute top-0 left-0 right-0 h-2/3 cursor-none"
        ></div>
        <section
          id={sections[1].name}
          ref={sections[1].ref}
          className="relative z-0 h-screen sm:pl-[30%] lg:pl-[300px]"
        >
          <div className="relative overflow-x-hidden lg:pl-[20%]">
            <img
              className="h-[140vh] w-[120%] object-cover"
              src="./main-pic.jpg"
              alt=""
            />
            <div className="absolute top-0 h-full w-1/2 -translate-x-1 bg-gradient-to-r from-white to-transparent"></div>
          </div>
        </section>
        <section
          id={sections[2].name}
          ref={sections[2].ref}
          className="relative z-10 grid place-items-center overflow-x-clip bg-gradient-to-r from-secondary to-secondary-dark py-[10%] text-white"
        >
          <div className="relative z-10 grid w-10/12 gap-20 xs:w-4/5 sm:w-[min(70%,_1100px)]">
            <div className="grid w-fit place-items-center gap-2 md:gap-4 lg:gap-6">
              <h1 className="font-secondary text-3xl text-dark xs:text-4xl md:text-6xl lg:text-7xl xl:text-8xl">
                {capitalizeFirstLetter(sections[2].name)}
              </h1>
              <Bar
                className="h-4 md:h-7 lg:h-9 xl:h-11"
                color1={colors.dark}
                color2={colors.dark}
              />
            </div>
            <p className="text-lg md:text-2xl">
              <span className="font-secondary text-dark">Jan</span> has been a
              personal trainer for over 35+ years and excels in improving the
              livelihood and and fitness of her many clients. Drawing on her
              experience and backed by numerous certifications she can help you
              strengthen your body and mind.
            </p>
            <div className="flex flex-wrap justify-around gap-20">
              <div className="flex h-fit flex-col gap-3 rounded-2xl bg-secondary p-6 shadow-lg transition-transform hover:-rotate-6 sm:p-10">
                <h2 className="mb-3 gap-4 self-center font-secondary text-2xl text-dark md:text-4xl">
                  Sessions
                </h2>
                <li className="text-lg md:text-xl">
                  Pilates Reformer ($60 / Private Session)
                </li>
                <li className="text-lg md:text-xl">
                  Personal Training ($60 / Private Session)
                </li>
                <li className="text-lg md:text-xl">Zoom Class ($5 / Class)</li>
              </div>
              <div className="flex flex-col gap-3 rounded-2xl bg-secondary p-6 shadow-lg transition-transform hover:rotate-6 sm:p-10">
                <h2 className="mb-3 gap-4 self-center font-secondary text-2xl text-dark md:text-4xl">
                  Certifications
                </h2>
                <li className="text-lg md:text-xl">NASM</li>
                <li className="text-lg md:text-xl">Stott Pilates</li>
                <li className="text-lg md:text-xl">Johnny G spin certified</li>
                <li className="text-lg md:text-xl">
                  Institute of Integrated Nutrition (IIN) certified
                </li>
                <li className="text-lg md:text-xl">CPR/AED certified</li>
              </div>
            </div>
          </div>
        </section>
        <section
          id={sections[3].name}
          ref={sections[3].ref}
          className="relative grid place-items-center py-20 sm:py-32"
        >
          <div className="grid w-4/5 gap-20 xs:w-10/12 sm:w-[min(70%,_1100px)]">
            <div className="relative z-10 grid place-items-center gap-2 justify-self-end md:gap-4 lg:gap-6">
              <h1 className="font-secondary text-3xl text-dark xs:text-4xl md:text-6xl lg:text-7xl xl:text-8xl">
                {capitalizeFirstLetter(sections[3].name)}
              </h1>
              <Bar
                className="h-6 md:h-7 lg:h-9 xl:h-11"
                color1={colors.dark}
                color2={colors.dark}
              />
            </div>
            <div className="relative z-10">
              <p className="rounded-2xl bg-white/20 p-4 text-lg backdrop-blur-md sm:p-10 md:text-2xl">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                congue dictum libero. Sed in neque in libero imperdiet
                consectetur id in tellus. Sed feugiat, mi nec suscipit volutpat,
                est sem tincidunt sem, non dapibus lorem sapien eu ante.
                Phasellus lectus neque, dapibus id nulla sed, hendrerit auctor
                tellus. Vestibulum hendrerit, justo vitae ullamcorper eleifend,
                magna ante vulputate diam, in mollis dolor dui vitae purus.
                Aenean lacinia tellus ut urna semper tincidunt. Pellentesque
                venenatis nibh vitae ultricies dignissim. Etiam molestie sapien
                ac mi euismod dictum. Mauris congue dignissim commodo. Morbi
                rhoncus neque sed felis euismod fermentum. Vestibulum aliquet
                eleifend augue, sed eleifend mi. Integer vel ipsum tincidunt,
                volutpat leo a, vulputate lacus. Duis iaculis ligula non ornare
                maximus. Vivamus egestas dignissim sapien, sit amet finibus
                massa viverra eget. Aliquam venenatis felis quis augue feugiat,
                ut finibus eros bibendum. Nunc luctus, massa sed eleifend
                tincidunt, sem tellus placerat tellus, ac pharetra lacus ipsum
                bibendum erat.
              </p>
            </div>
          </div>
          <div className="absolute z-0 grid h-[120%] place-self-center overflow-hidden object-cover">
            <div className="absolute bottom-0 z-10 col-start-1 row-start-1 h-full w-3/4 self-end bg-gradient-to-b from-transparent to-white"></div>
            <div className="z-10 col-start-1 row-start-1 h-full w-3/4 translate-x-1 bg-gradient-to-r from-transparent to-white"></div>
            <img
              className="z-0 col-start-1 row-start-1 h-full w-3/4 -scale-x-100 self-end object-cover"
              src="./profile-pic.jpg"
              alt=""
            />
          </div>
        </section>
        <section
          id={sections[4].name}
          ref={sections[4].ref}
          className="relative grid place-items-center py-32"
        >
          <div className="relative grid w-9/12 gap-[30px] p-6 xs:w-[min(60%,_1100px)]">
            <div className="relative z-10 grid w-fit place-items-center gap-2 justify-self-center pb-10 md:gap-4 lg:gap-6">
              <h1 className="font-secondary text-3xl text-white xs:text-4xl md:text-6xl lg:text-7xl xl:text-8xl">
                {capitalizeFirstLetter(sections[4].name)}
              </h1>
              <Bar
                className="h-6 md:h-7 lg:h-9 xl:h-11"
                gradientId={sections[4].name + "Bar"}
                color1={colors.white}
                color2={colors.white}
              />
            </div>
            <div className="relative grid pt-10">
              <div className="absolute z-10 w-[130%] -translate-y-full justify-self-center border-b-[30px] border-dark xs:w-[calc(100%+70px)] sm:w-[calc(100%+150px)]"></div>
              <div className="relative z-10 flex flex-wrap gap-6">
                <div className="flex flex-grow flex-col place-items-center gap-3 rounded-2xl bg-white p-4 sm:p-8">
                  <h2 className="text-2xl font-bold tracking-wider text-primary md:text-4xl">
                    <span className="underline">Monday</span>
                    <span className="text-lg"> (02-24)</span>
                  </h2>
                  <p className="text-xl sm:text-2xl">4:30 pm MT</p>
                  <p className="text-xl sm:text-2xl"> Zoom Link:</p>
                </div>
                <div className="flex flex-grow flex-col place-items-center gap-3 rounded-2xl bg-white p-4 sm:p-8">
                  <h2 className="text-2xl font-bold tracking-wider text-primary underline md:text-4xl">
                    <span className="underline">Saturday</span>
                    <span className="text-lg"> (02-29)</span>
                  </h2>
                  <p className="text-xl sm:text-2xl">4:30 pm MT</p>
                  <p className="text-xl sm:text-2xl"> Zoom Link:</p>
                </div>
                <div className="flex flex-grow flex-col justify-center gap-3">
                  <li className="text-xl sm:text-2xl"> $5 per class</li>
                  <li className="text-xl sm:text-2xl">Pay through Zelle</li>
                  <li className="break-all text-xl sm:text-2xl">
                    Jansgymonline@gmail.com
                  </li>
                </div>
              </div>
            </div>
            <div className="absolute -z-0 grid h-[calc(100%+50px)] w-[calc(100%+50px)] grid-cols-5 self-center justify-self-center rounded-[100px] bg-primary shadow-xl sm:h-[calc(100%+150px)] sm:w-[calc(100%+150px)]">
              <div className="relative rounded-l-[100px] border-y-[30px] border-l-[30px] border-dark bg-transparent"></div>
              <div className="relative grid border-b-[30px] border-dark bg-transparent">
                <div className="absolute w-[30px] -translate-x-1/2 rounded-full border-t-[30px] border-dark"></div>
                <div className="absolute h-[120px] -translate-y-1/2 justify-self-center rounded-full border-l-[30px] border-dark"></div>
                <div className="absolute right-0 w-[30px] translate-x-1/2 rounded-full border-t-[30px] border-dark"></div>
              </div>
              <div className="relative border-y-[30px] border-dark bg-transparent"></div>
              <div className="relative grid border-b-[30px] border-dark bg-transparent">
                <div className="absolute w-[30px] -translate-x-1/2 rounded-full border-t-[30px] border-dark"></div>
                <div className="absolute h-[120px] -translate-y-1/2 justify-self-center rounded-full border-l-[30px] border-dark"></div>
                <div className="absolute right-0 w-[30px] translate-x-1/2 rounded-full border-t-[30px] border-dark"></div>
              </div>
              <div className="relative rounded-r-[100px] border-y-[30px] border-r-[30px] border-dark bg-transparent"></div>
            </div>
          </div>
        </section>
        <section
          id={sections[5].name}
          ref={sections[5].ref}
          className="relative z-10 grid place-items-center bg-gradient-to-b from-white via-primary to-dark py-32 "
        >
          <div className="relative z-20 grid w-4/5 gap-20 xs:w-10/12 sm:w-[min(70%,_1100px)]">
            <div className="relative z-10 grid place-items-center gap-2 justify-self-end md:gap-4 lg:gap-6">
              <h1 className="font-secondary text-3xl text-dark xs:text-4xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl">
                {capitalizeFirstLetter(sections[5].name)}
              </h1>
              <BarLarge
                className="h-6 md:h-7 lg:h-9 xl:h-11"
                color1={colors.dark}
                color2={colors.dark}
              />
            </div>
            <div className="grid grid-cols-1 gap-20 lg:grid-cols-2">
              <div className="flex gap-8 rounded-xl bg-white/10 p-8 backdrop-blur-md">
                <RoexLogo className="w-20 self-start pt-2 text-secondary-dark" />
                <div className="flex flex-col gap-3">
                  <h2 className="font-secondary text-2xl text-secondary-dark sm:text-4xl">
                    Roex
                  </h2>
                  <li>Supplement 1</li>
                  <li>Supplement 2</li>
                  <li>Supplement 3</li>
                </div>
              </div>
              <div className="flex gap-8 rounded-xl bg-white/10 p-8 backdrop-blur-md">
                <ThornLogo className="w-20 self-start pt-2 text-secondary-dark" />
                <div className="flex flex-col gap-3">
                  <h2 className="font-secondary text-2xl text-secondary-dark sm:text-4xl">
                    Thorne
                  </h2>
                  <li>Supplement 1</li>
                  <li>Supplement 2</li>
                  <li>Supplement 3</li>
                </div>
              </div>
              <div className="flex gap-8 rounded-xl bg-white/10 p-8 backdrop-blur-md">
                <FullscriptLogo className="w-20 self-start pt-2 text-secondary-dark" />
                <div className="flex flex-col gap-3">
                  <h2 className="font-secondary text-2xl text-secondary-dark sm:text-4xl">
                    Fullscript
                  </h2>
                  <li>Supplement 1</li>
                  <li>Supplement 2</li>
                  <li>Supplement 3</li>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute top-0 z-0 h-full w-full bg-supplements-pattern bg-[length:120px] bg-repeat opacity-10 mix-blend-overlay">
            <img className="h-20 w-20" src="./supplements.svg" alt="" />
          </div>
          <div className="absolute bottom-0 z-10 h-1/4 w-full translate-y-1 bg-gradient-to-t from-dark to-transparent"></div>
        </section>
        <section
          id={sections[6].name}
          ref={sections[6].ref}
          className="relative z-0 grid place-items-center bg-dark py-32"
        >
          <div className="grid w-4/5 gap-20 xs:w-10/12 sm:w-[min(70%,_1100px)]">
            <div className="relative z-10 grid place-items-center gap-2 justify-self-start md:gap-4 lg:gap-6">
              <h1 className="font-secondary text-3xl text-primary xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
                {capitalizeFirstLetter(sections[6].name)}
              </h1>
              <BarLarge
                gradientId={`${sections[6].name}-bar`}
                className="h-6 md:h-7 lg:h-9 xl:h-11"
                color1={colors.primary}
                color2={colors.primary}
              />
            </div>
          </div>
        </section>
        <section
          id={sections[7].name}
          ref={sections[7].ref}
          className="relative z-0 grid place-items-center bg-dark py-32"
        >
          <div className="grid w-4/5 gap-20 xs:w-10/12 sm:w-[min(70%,_1100px)]">
            <div className="relative z-10 grid place-items-center gap-2 justify-self-end md:gap-4 lg:gap-6">
              <h1 className="font-secondary text-3xl text-primary xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
                {capitalizeFirstLetter(sections[7].name)}
              </h1>
              <BarLarge
                gradientId={`${sections[7].name}-bar`}
                className="h-6 md:h-7 lg:h-9 xl:h-11"
                color1={colors.primary}
                color2={colors.primary}
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
