import Head from "next/head";

export default function Home() {
  return (
    <div className={``}>
      <Head>
        <title>Jan's Gym</title>
      </Head>
      <div className="Content">
        <nav className="fixed z-10 h-screen w-[300px] bg-transparent"></nav>
        <section className="relative z-0 h-screen pl-[300px]">
          <div className="relative overflow-x-hidden md:pl-[20%]">
            <img
              className="h-[110vh] w-[120%] object-cover"
              src="./main-pic.jpg"
              alt=""
            />
            <div className="absolute top-0 h-full w-1/2 bg-gradient-to-r from-white to-transparent"></div>
          </div>
        </section>
        <section className="relative z-10 grid place-items-center bg-gradient-to-r from-secondary to-secondary-dark py-32">
          <div className="grid w-[min(70%,_1100px)] gap-20">
            <div>
              <h1 className="text-8xl">Training</h1>
            </div>
            <p className="text-2xl">
              Jan has been a personal trainer for over 35+ years and excels in
              improving the livelihood and and fitness of her many clients.
              Drawing on her experience and backed by numerous certifications
              she can help you strengthen your body and mind.
            </p>
            <div className="flex flex-wrap justify-around gap-20">
              <div className="flex h-fit -rotate-6 flex-col gap-3 rounded-2xl bg-secondary p-10 shadow-lg">
                <h2 className="gap-4 text-4xl">Sessions</h2>
                <li className="text-xl">
                  Pilates Reformer ($60 / Private Session)
                </li>
                <li className="text-xl">
                  Personal Training ($60 / Private Session)
                </li>
                <li className="text-xl">Zoom Class ($5 / Class)</li>
              </div>
              <div className="flex rotate-6 flex-col gap-3 rounded-2xl bg-secondary p-10 shadow-lg">
                <h2 className="gap-4 text-4xl">Certifications</h2>
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
        <section className="relative grid place-items-center py-32">
          <div className="grid w-[min(70%,_1100px)] gap-20">
            <div className="relative z-10 justify-self-end">
              <h1 className="text-8xl">Profile</h1>
            </div>
            <div className="relative z-10">
              <p className="rounded-2xl bg-white/20 p-10 text-xl backdrop-blur-md">
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
        <section className="relative mt-10 grid place-items-center py-32">
          <div className="relative grid w-[min(70%,_1100px)] gap-20">
            <div className="relative z-10">
              <h1 className="text-8xl">Classes</h1>
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
        <section className="relative z-10 grid place-items-center bg-gradient-to-b from-white via-primary to-dark py-32 ">
          <div className="relative z-20 grid w-[min(70%,_1100px)] gap-20">
            <div className="relative z-10 justify-self-end">
              <h1 className="text-8xl">Supplements</h1>
            </div>
            <div className="grid grid-cols-1 gap-20 lg:grid-cols-2">
              <div className="flex gap-8 rounded-xl bg-white/10 p-8 backdrop-blur-md">
                <img className="w-16 self-start" src="./roex-logo.svg" alt="" />
                <div className="flex flex-col gap-3">
                  <h2 className="text-4xl">Roex</h2>
                  <li>Supplement 1</li>
                  <li>Supplement 2</li>
                  <li>Supplement 3</li>
                </div>
              </div>
              <div className="flex gap-8 rounded-xl bg-white/10 p-8 backdrop-blur-md">
                <img className="w-16 self-start" src="./roex-logo.svg" alt="" />
                <div className="flex flex-col gap-3">
                  <h2 className="text-4xl">Thorne</h2>
                  <li>Supplement 1</li>
                  <li>Supplement 2</li>
                  <li>Supplement 3</li>
                </div>
              </div>
              <div className="flex gap-8 rounded-xl bg-white/10 p-8 backdrop-blur-md">
                <img className="w-16 self-start" src="./roex-logo.svg" alt="" />
                <div className="flex flex-col gap-3">
                  <h2 className="text-4xl">Fullscript</h2>
                  <li>Supplement 1</li>
                  <li>Supplement 2</li>
                  <li>Supplement 3</li>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute top-0 z-0 h-full w-full bg-supplements-pattern bg-[length:120px] bg-repeat opacity-20 mix-blend-overlay">
            <img className="h-20 w-20" src="./supplements.svg" alt="" />
          </div>
          <div className="absolute bottom-0 z-10 h-1/4 w-full bg-gradient-to-t from-dark to-transparent"></div>
        </section>
        <section className="relative z-0 grid place-items-center bg-dark py-32">
          <div className="grid w-[min(70%,_1100px)] gap-20">
            <div className="relative z-10 justify-self-end">
              <h1 className="text-8xl">Equipment</h1>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
