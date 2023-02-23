import Border from "../components/Border";
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

const colors = theme.theme.extend.colors;
const sections = [
  { name: `top` },
  { name: `home` },
  { name: `training` },
  { name: `profile` },
  { name: `classes` },
  { name: `supplements` },
  { name: `equipment` },
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
        <nav className="group/nav fixed z-50 max-w-[50%] p-6 transition-all duration-300">
          <div
            className={`${
              sectionOnScreen === "top" ? "gap-2" : "gap-10"
            } grid h-fit w-fit rounded-2xl bg-white/20 p-6 pb-10 backdrop-blur-lg transition-all`}
          >
            <div className={`grid`}>
              <JansGymLogo
                className={`${
                  sectionOnScreen === "top"
                    ? "h-60 w-60"
                    : "h-24 w-24 group-hover/nav:justify-self-center"
                } cursor-pointer transition-all hover:scale-110`}
                colorCenter={colors.dark}
                colorCircle={colors.dark}
                colorDate={colors.dark}
                colorEST={colors.dark}
                colorJ={colors.primary}
                colorG={colors.light}
              />
              <h2
                className={`${
                  sectionOnScreen === "top"
                    ? "mx-4 my-8 max-h-full rounded-xl bg-light/70 p-10 text-5xl text-white opacity-100"
                    : "m-0 max-h-0 overflow-hidden p-0 text-[0px] opacity-0"
                } transition-all`}
              >
                Providing top quality training to help you achieve the health
                goals you want!
              </h2>
            </div>
            <div className={`hidden`}>MENU</div>
            <div className="group/fitness ml-4 mr-0 flex cursor-pointer place-items-center gap-4 rounded-lg bg-transparent transition-all hover:bg-light/70 hover:text-primary hover:drop-shadow-lg group-hover/nav:mr-4">
              <Fitness
                className={`
                ${sectionOnScreen === "top" ? "w-12" : "w-16"} ${
                  sectionOnScreen === sections[2].name
                    ? `text-primary`
                    : `text-secondary`
                } transition-all group-hover/fitness:text-primary`}
                fill={"currentColor"}
                stroke={colors.dark}
              />
              <h3 className="mt-[3px] mr-0 max-w-0 text-3xl opacity-0 transition-all group-hover/nav:mr-2 group-hover/nav:max-w-full group-hover/nav:opacity-100">
                Fitness
              </h3>
            </div>
            <div className="group/profile ml-4 mr-0 flex cursor-pointer place-items-center gap-4 rounded-lg bg-transparent transition-all hover:bg-light/70 hover:text-primary hover:drop-shadow-lg group-hover/nav:mr-4">
              <Heart
                className={`${sectionOnScreen === "top" ? "w-12" : "w-16"} ${
                  sectionOnScreen === sections[3].name
                    ? `text-primary`
                    : `text-secondary`
                } transition-all group-hover/profile:text-primary`}
                fill={"currentColor"}
                stroke={colors.dark}
              />
              <h3 className="mt-[3px] mr-0 max-w-0 text-3xl opacity-0 transition-all group-hover/nav:mr-2 group-hover/nav:max-w-full group-hover/nav:opacity-100">
                Profile
              </h3>
            </div>
            <div className="group/classes ml-4 mr-0 flex cursor-pointer place-items-center gap-4 rounded-lg bg-transparent transition-all hover:bg-light/70 hover:text-primary hover:drop-shadow-lg group-hover/nav:mr-4">
              <Calendar
                className={`${sectionOnScreen === "top" ? "w-12" : "w-16"} ${
                  sectionOnScreen === sections[4].name
                    ? `text-primary`
                    : `text-secondary`
                } transition-all group-hover/classes:text-primary`}
                fill={"currentColor"}
                stroke={colors.dark}
              />
              <h3 className="mt-[3px] mr-0 max-w-0 text-3xl opacity-0 transition-all group-hover/nav:mr-2 group-hover/nav:max-w-full group-hover/nav:opacity-100">
                Classes
              </h3>
            </div>
            <div className="group/supplements ml-4 mr-0 flex cursor-pointer place-items-center gap-4 rounded-lg bg-transparent transition-all hover:bg-light/70 hover:text-primary hover:drop-shadow-lg group-hover/nav:mr-4">
              <Supplements
                className={`${sectionOnScreen === "top" ? "w-12" : "w-16"} ${
                  sectionOnScreen === sections[5].name
                    ? `text-primary`
                    : `text-secondary`
                } transition-all group-hover/supplements:text-primary`}
                fill={"currentColor"}
                stroke={colors.dark}
              />
              <h3 className="mt-[3px] mr-0 max-w-0 text-3xl opacity-0 transition-all group-hover/nav:mr-2 group-hover/nav:max-w-full group-hover/nav:opacity-100">
                Supplements
              </h3>
            </div>
            <div className="group/equipment ml-4 mr-0 flex cursor-pointer place-items-center gap-4 rounded-lg bg-transparent transition-all hover:bg-light/70 hover:text-primary hover:drop-shadow-lg group-hover/nav:mr-4">
              <Box
                className={`${sectionOnScreen === "top" ? "w-12" : "w-16"} ${
                  sectionOnScreen === sections[6].name
                    ? `text-primary`
                    : `text-secondary`
                } transition-all group-hover/equipment:text-primary`}
                fill={"currentColor"}
                stroke={colors.dark}
              />
              <h3 className="mt-[3px] mr-0 max-w-0 text-3xl opacity-0 transition-all group-hover/nav:mr-2 group-hover/nav:max-w-full group-hover/nav:opacity-100">
                Eqipment
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
          {/* <Border
            key="border1"
            className="absolute bottom-full z-0 h-[202px] translate-y-1"
            color1={theme.theme.extend.colors.secondary}
            color2={theme.theme.extend.colors["secondary-dark"]}
          /> */}
          <div className="relative z-10 grid w-[min(70%,_1100px)] gap-20">
            <div>
              <h1 className="font-secondary text-8xl text-dark">
                {capitalizeFirstLetter(sections[1].name)}
              </h1>
            </div>
            <p className="mb-4 text-2xl">
              <span className="font-secondary text-dark">Jan</span> has been a
              personal trainer for over 35+ years and excels in improving the
              livelihood and and fitness of her many clients. Drawing on her
              experience and backed by numerous certifications she can help you
              strengthen your body and mind.
            </p>
            <div className="flex flex-wrap justify-around gap-20">
              <div className="flex h-fit -rotate-6 flex-col gap-3 rounded-2xl bg-secondary p-10 shadow-lg">
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
              <div className="flex rotate-6 flex-col gap-3 rounded-2xl bg-secondary p-10 shadow-lg">
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
          {/* <Border
            key="border2"
            className="absolute top-full z-0 h-[202px] -translate-y-1 -scale-100"
            gradientId="b"
            color1={theme.theme.extend.colors["secondary-dark"]}
            color2={theme.theme.extend.colors.secondary}
          /> */}
        </section>
        <section
          id={sections[3].name}
          ref={sections[3].ref}
          className="relative grid place-items-center py-32"
        >
          <div className="grid w-[min(70%,_1100px)] gap-20">
            <div className="relative z-10 justify-self-end">
              <h1 className="font-secondary text-8xl text-dark">
                {capitalizeFirstLetter(sections[2].name)}
              </h1>
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
          <div className="relative grid w-[min(70%,_1100px)] gap-20">
            <div className="relative z-10">
              <h1 className="font-secondary text-8xl text-dark">
                {capitalizeFirstLetter(sections[3].name)}
              </h1>
            </div>
            <div className="z-10 flex flex-wrap overflow-hidden rounded-2xl bg-white/50 shadow-lg">
              <div className="flex flex-grow flex-col place-items-center gap-3 bg-white/70 p-10">
                <h2 className="text-4xl underline">Monday</h2>
                <p className="text-xl">4:30 pm MT</p>
                <p className="text-xl"> Zoom Link:</p>
              </div>
              <div className="flex flex-grow flex-col place-items-center gap-3 bg-white/50 p-10">
                <h2 className="text-4xl underline">Tuesday</h2>
              </div>
              <div className="flex flex-grow flex-col place-items-center gap-3 bg-white/70 p-10">
                <h2 className="text-4xl underline">Wednesday</h2>
              </div>
              <div className="flex flex-grow flex-col place-items-center gap-3 bg-white/50 p-10">
                <h2 className="text-4xl underline">Thursday</h2>
              </div>
              <div className="flex flex-grow flex-col place-items-center gap-3 bg-white/70 p-10">
                <h2 className="text-4xl underline">Friday</h2>
              </div>
              <div className="flex flex-grow flex-col place-items-center gap-3 bg-white/50 p-10">
                <h2 className="text-4xl underline">Saturday</h2>
                <p className="text-xl">4:30 pm MT</p>
                <p className="text-xl"> Zoom Link:</p>
              </div>
              <div className="flex flex-grow flex-col place-items-center gap-3 bg-white/70 p-10">
                <h2 className="text-4xl underline">Sunday</h2>
              </div>
              <div className="flex flex-grow flex-col gap-3 p-5">
                <li className="text-xl"> $5 per class</li>
                <li className="text-xl">Pay through Zelle</li>
                <li className="text-xl">Jansgymonline@gmail.com</li>
              </div>
            </div>
            <div className="absolute -z-0 h-[calc(100%+150px)] w-[calc(100%+150px)] self-center justify-self-center rounded-2xl bg-light shadow-lg"></div>
          </div>
        </section>
        <section
          id={sections[5].name}
          ref={sections[5].ref}
          className="relative z-10 grid place-items-center bg-gradient-to-b from-white via-primary to-dark py-32 "
        >
          <div className="relative z-20 grid w-[min(70%,_1100px)] gap-20">
            <div className="relative z-10 justify-self-end">
              <h1 className="font-secondary text-8xl text-dark">
                {capitalizeFirstLetter(sections[4].name)}
              </h1>
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
            <div className="relative z-10 justify-self-start">
              <h1 className="font-secondary text-8xl text-primary">
                {capitalizeFirstLetter(sections[5].name)}
              </h1>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
