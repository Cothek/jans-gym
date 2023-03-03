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
  const isMobile = useMediaQuery({ maxHeight: 700 });

  setRefs();

  useEffect(() => {
    sections.forEach((item) => {
      if (sections[0].isOnScreen) {
        setSectionOnScreen(sections[0].name);
      } else if (item.isOnScreen) {
        setSectionOnScreen(item.name);
      }
    });
  });

  return (
    <div className={`font-primary font-light text-dark`}>
      <Head>
        <title>Jan's Gym</title>
      </Head>
      <div className="Content">
        <nav
          className={`${
            sectionOnScreen === "top" ? "" : "group/nav "
          }fixed z-50 max-w-[50%] p-6 transition-all duration-300`}
        >
          <div
            className={`${
              sectionOnScreen === "top" ? "gap-2" : "gap-5"
            } grid h-fit w-fit rounded-2xl bg-white/20 p-6 pb-10 backdrop-blur-lg transition-all duration-300`}
          >
            <div className={`grid`}>
              <div
                className={`${
                  sectionOnScreen === "top"
                    ? "gap-[4vh] justify-self-start"
                    : "gap-0 group-hover/nav:justify-self-center"
                } group/logo flex cursor-pointer place-items-center transition-all duration-300`}
                onClick={() => {
                  sections[1].ref.current.scrollIntoView({
                    behavior: "smooth",
                  });
                }}
              >
                <JansGymLogo
                  className={`${
                    sectionOnScreen === "top"
                      ? "h-[25vh] w-[25vh]"
                      : "h-24 w-24"
                  } transition-all duration-300 group-hover/logo:scale-105`}
                  colorCenter={colors.dark}
                  colorCircle={colors.dark}
                  colorDate={colors.dark}
                  colorEST={colors.dark}
                  colorJ={colors.primary}
                  colorG={colors.light}
                />
                <JansGymTextLogo
                  className={`${
                    sectionOnScreen === "top" ? "h-[25vh] w-[35vh]" : "h-0 w-0"
                  } transition-all duration-300 group-hover/logo:scale-105`}
                  stroke={colors.white[0]}
                  fillBar={colors.dark}
                  fillJans={colors.primary}
                  fillGym={colors.light}
                />
              </div>
              <div className={`hidden`}>MENU</div>
              <h2
                className={`${
                  sectionOnScreen === "top"
                    ? "mx-4 mb-[1vh] mt-[calc(3vh+0.5rem)] max-h-full rounded-xl bg-light/50 p-[3.5vh] py-[2vh] text-[4.5vh] leading-[6.5vh] text-white opacity-100"
                    : "m-0 max-h-0 overflow-hidden p-0 text-[0px] opacity-0"
                } transition-all duration-300`}
              >
                Providing top quality training to help you achieve the health
                goals you want!
              </h2>
            </div>
            <div
              className={`${
                sectionOnScreen === "top" ? "min-w-0 " : ""
              }group/training ml-4 mr-0 flex cursor-pointer place-items-center gap-4 rounded-lg bg-transparent transition-all hover:bg-light/50 hover:text-white hover:drop-shadow-lg group-hover/nav:mr-4`}
              onClick={() => {
                sections[2].ref.current.scrollIntoView({ behavior: "smooth" });
              }}
            >
              <Fitness
                className={`${
                  sectionOnScreen === "top" ? "w-[calc(2rem+2vh)]" : "w-16"
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
                    : "mr-0 max-w-0 text-3xl opacity-0"
                } mt-[5px] transition-all group-hover/nav:mr-4 group-hover/nav:max-w-full group-hover/nav:opacity-100`}
              >
                {capitalizeFirstLetter(sections[2].name)}
              </h3>
            </div>
            <div
              className={`${
                sectionOnScreen === "top" ? "min-w-0 " : " "
              }group/profile ml-4 mr-0 flex cursor-pointer place-items-center gap-4 rounded-lg bg-transparent transition-all hover:bg-light/50 hover:text-white hover:drop-shadow-lg group-hover/nav:mr-4`}
              onClick={() => {
                sections[3].ref.current.scrollIntoView({ behavior: "smooth" });
              }}
            >
              <Heart
                className={`${
                  sectionOnScreen === "top" ? "w-[calc(2rem+2vh)]" : "w-16"
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
                    : "mr-0 max-w-0 text-3xl opacity-0"
                } mt-[5px] transition-all group-hover/nav:mr-4 group-hover/nav:max-w-full group-hover/nav:opacity-100`}
              >
                {capitalizeFirstLetter(sections[3].name)}
              </h3>
            </div>
            <div
              className={`${
                sectionOnScreen === "top" ? "min-w-0 " : " "
              }group/classes ml-4 mr-0 flex cursor-pointer place-items-center gap-4 rounded-lg bg-transparent transition-all hover:bg-light/50 hover:text-white hover:drop-shadow-lg group-hover/nav:mr-4`}
              onClick={() => {
                sections[4].ref.current.scrollIntoView({ behavior: "smooth" });
              }}
            >
              <Calendar
                className={`${
                  sectionOnScreen === "top" ? "w-[calc(2rem+2vh)]" : "w-16"
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
                    : "mr-0 max-w-0 text-3xl opacity-0"
                } mt-[5px] transition-all group-hover/nav:mr-4 group-hover/nav:max-w-full group-hover/nav:opacity-100`}
              >
                {capitalizeFirstLetter(sections[4].name)}
              </h3>
            </div>
            <div
              className={`${
                sectionOnScreen === "top" ? "min-w-0 " : " "
              }group/supplements ml-4 mr-0 flex cursor-pointer place-items-center gap-4 rounded-lg bg-transparent transition-all hover:bg-light/50 hover:text-white hover:drop-shadow-lg group-hover/nav:mr-4`}
              onClick={() => {
                sections[5].ref.current.scrollIntoView({ behavior: "smooth" });
              }}
            >
              <Supplements
                className={`${
                  sectionOnScreen === "top" ? "w-[calc(2rem+2vh)]" : "w-16"
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
                    : "mr-0 max-w-0 text-3xl opacity-0"
                } mt-[5px] transition-all group-hover/nav:mr-4 group-hover/nav:max-w-full group-hover/nav:opacity-100`}
              >
                {capitalizeFirstLetter(sections[5].name)}
              </h3>
            </div>
            <div
              className={`${
                sectionOnScreen === "top" ? "min-w-0 " : " "
              }group/equipment ml-4 mr-0 flex cursor-pointer place-items-center gap-4 rounded-lg bg-transparent transition-all hover:bg-light/50 hover:text-white hover:drop-shadow-lg group-hover/nav:mr-4`}
              onClick={() => {
                sections[6].ref.current.scrollIntoView({ behavior: "smooth" });
              }}
            >
              <Box
                className={`${
                  sectionOnScreen === "top" ? "w-[calc(2rem+2vh)]" : "w-16"
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
                    : "mr-0 max-w-0 text-3xl opacity-0"
                } mt-[5px] transition-all group-hover/nav:mr-4 group-hover/nav:max-w-full group-hover/nav:opacity-100`}
              >
                {capitalizeFirstLetter(sections[6].name)}
              </h3>
            </div>
            <div
              className={`${
                sectionOnScreen === "top" ? "min-w-0 " : " "
              }group/equipment ml-4 mr-0 flex cursor-pointer place-items-center gap-4 rounded-lg bg-transparent transition-all hover:bg-light/50 hover:text-white hover:drop-shadow-lg group-hover/nav:mr-4`}
              onClick={() => {
                sections[7].ref.current.scrollIntoView({ behavior: "smooth" });
              }}
            >
              <Contact
                className={`${
                  sectionOnScreen === "top" ? "w-[calc(2rem+2vh)]" : "w-16"
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
                    : "mr-0 max-w-0 text-3xl opacity-0"
                } mt-[5px] transition-all group-hover/nav:mr-4 group-hover/nav:max-w-full group-hover/nav:opacity-100`}
              >
                {capitalizeFirstLetter(sections[7].name)}
              </h3>
            </div>
          </div>
        </nav>
        <div
          id={sections[0].name}
          ref={sections[0].ref}
          className="absolute top-0 left-0 right-0 h-2/3 cursor-none"
        ></div>
        <section
          id={sections[1].name}
          ref={sections[1].ref}
          className="relative z-0 h-screen pl-[300px]"
        >
          <div className="relative overflow-x-hidden md:pl-[20%]">
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
          className="relative z-10 mb-40 grid place-items-center overflow-x-clip bg-gradient-to-r from-secondary to-secondary-dark py-[10%] text-white"
        >
          <div className="relative z-10 grid w-[min(70%,_1100px)] gap-20">
            <div className="grid w-fit place-items-center gap-6">
              <h1 className="font-secondary text-5xl text-dark md:text-6xl lg:text-7xl xl:text-8xl">
                {capitalizeFirstLetter(sections[2].name)}
              </h1>
              <Bar
                className="h-6 md:h-7 lg:h-9 xl:h-11"
                color1={colors.dark}
                color2={colors.dark}
              />
            </div>
            <p className="mb-4 text-2xl">
              <span className="font-secondary text-dark">Jan</span> has been a
              personal trainer for over 35+ years and excels in improving the
              livelihood and and fitness of her many clients. Drawing on her
              experience and backed by numerous certifications she can help you
              strengthen your body and mind.
            </p>
            <div className="flex flex-wrap justify-around gap-20">
              <div className="flex h-fit flex-col gap-3 rounded-2xl bg-secondary p-10 shadow-lg transition-transform hover:-rotate-6">
                <h2 className="mb-3 gap-4 font-secondary text-4xl text-dark">
                  Sessions
                </h2>
                <li className="text-xl">
                  Pilates Reformer ($60 / Private Session)
                </li>
                <li className="text-xl">
                  Personal Training ($60 / Private Session)
                </li>
                <li className="text-xl">Zoom Class ($5 / Class)</li>
              </div>
              <div className="flex flex-col gap-3 rounded-2xl bg-secondary p-10 shadow-lg transition-transform hover:rotate-6">
                <h2 className="mb-3 gap-4 font-secondary text-4xl text-dark">
                  Certifications
                </h2>
                <li className="text-xl">NASM</li>
                <li className="text-xl">Stott Pilates</li>
                <li className="text-xl">Johnny G spin certified</li>
                <li className="text-xl">
                  Institute of Integrated Nutrition (IIN) certified
                </li>
                <li className="text-xl">CPR/AED certified</li>
              </div>
            </div>
          </div>
        </section>
        <section
          id={sections[3].name}
          ref={sections[3].ref}
          className="relative grid place-items-center pb-32"
        >
          <div className="grid w-[min(70%,_1100px)] gap-20">
            <div className="relative z-10 grid place-items-center gap-6 justify-self-end">
              <h1 className="font-secondary text-5xl text-dark md:text-6xl lg:text-7xl xl:text-8xl">
                {capitalizeFirstLetter(sections[3].name)}
              </h1>
              <Bar
                className="h-6 md:h-7 lg:h-9 xl:h-11"
                color1={colors.dark}
                color2={colors.dark}
              />
            </div>
            <div className="relative z-10">
              <p className="rounded-2xl bg-white/20 p-10 text-2xl backdrop-blur-md">
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
          <div className="absolute z-0 grid h-[140%] w-full self-center overflow-hidden">
            <div className="z-10 col-start-1 row-start-1 h-full w-3/4 self-end bg-gradient-to-b from-transparent to-white"></div>
            <div className="z-10 col-start-1 row-start-1 w-3/4 translate-x-1 bg-gradient-to-r from-transparent to-white"></div>
            <img
              className="z-0 col-start-1 row-start-1 w-3/4 -scale-x-100 self-end object-cover"
              src="./profile-pic.jpg"
              alt=""
            />
          </div>
        </section>
        <section
          id={sections[4].name}
          ref={sections[4].ref}
          className="relative mt-10 grid place-items-center py-32"
        >
          <div className="relative grid w-[min(70%,_1100px)] gap-[30px]">
            <div className="relative z-10 grid w-fit place-items-center gap-6 justify-self-center pb-10">
              <h1 className="font-secondary text-5xl text-white md:text-6xl lg:text-7xl xl:text-8xl">
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
              <div className="self absolute z-10 w-[calc(100%+150px)] -translate-y-full justify-self-center border-b-[30px] border-dark"></div>
              <div className="relative z-10 flex flex-wrap gap-6">
                <div className="flex flex-grow flex-col place-items-center gap-3 rounded-2xl bg-white p-8">
                  <h2 className="text-4xl font-bold tracking-wider text-primary">
                    <span className="underline">Monday</span>
                    <span className="text-lg"> (02-24)</span>
                  </h2>
                  <p className="text-2xl">4:30 pm MT</p>
                  <p className="text-2xl"> Zoom Link:</p>
                </div>
                <div className="flex flex-grow flex-col place-items-center gap-3 rounded-2xl bg-white p-8">
                  <h2 className="text-4xl font-bold tracking-wider text-primary underline">
                    Saturday
                  </h2>
                  <p className="text-2xl">4:30 pm MT</p>
                  <p className="text-2xl"> Zoom Link:</p>
                </div>
                <div className="flex flex-grow flex-col gap-3 p-5">
                  <li className="text-2xl"> $5 per class</li>
                  <li className="text-2xl">Pay through Zelle</li>
                  <li className="text-2xl">Jansgymonline@gmail.com</li>
                </div>
              </div>
            </div>
            <div className="absolute -z-0 grid h-[calc(100%+150px)] w-[calc(100%+150px)] grid-cols-5 self-center justify-self-center rounded-[100px] bg-primary shadow-xl">
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
          <div className="relative z-20 grid w-[min(70%,_1100px)] gap-20">
            <div className="relative z-10 grid place-items-center gap-6 justify-self-end">
              <h1 className="font-secondary text-2xl text-dark sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl">
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
                  <h2 className="font-secondary text-4xl text-secondary-dark">
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
                  <h2 className="font-secondary text-4xl text-secondary-dark">
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
                  <h2 className="font-secondary text-4xl text-secondary-dark">
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
          <div className="grid w-[min(70%,_1100px)] gap-20">
            <div className="relative z-10 grid place-items-center gap-6 justify-self-start">
              <h1 className="font-secondary text-xl text-primary sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
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
          <div className="grid w-[min(70%,_1100px)] gap-20">
            <div className="relative z-10 grid place-items-center gap-6 justify-self-end">
              <h1 className="font-secondary text-xl text-primary sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
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
