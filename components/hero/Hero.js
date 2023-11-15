import { useEffect, useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import Image from "next/image";

const capitalizeFirstWord = (str) => {
  const strTransformed = str.charAt(0).toUpperCase() + str.slice(1);

  return strTransformed;
};

const Hero = ({ guestName, isInvited }) => {
  //animation
  const heroRef = useRef();
  const q = gsap.utils.selector(heroRef);
  const tl = useRef();

  useLayoutEffect(() => {
    tl.current = gsap
      .timeline()
      .fromTo(
        q(".bride"),
        { scaleY: 0, transformOrigin: "bottom", opacity: 0 },
        { scaleY: 1, opacity: 1, duration: 0.6, stagger: 0.3 }
      )
      .fromTo(
        q(".and"),
        { scaleY: 0, transformOrigin: "bottom", opacity: 0 },
        { scaleY: 1, opacity: 1, duration: 0.6 },
        "<1"
      )
      .fromTo(
        q(".left-wing"),
        { rotate: 30, transformOrigin: "bottom right", opacity: 0 },
        { rotate: 0, opacity: 1, duration: 1 }
      )
      .fromTo(
        q(".right-wing"),
        { rotate: -30, transformOrigin: "bottom left", opacity: 0 },
        { rotate: 0, opacity: 1, duration: 1 },
        "<"
      )
      .fromTo(
        q(".content"),
        { yPercent: 50, opacity: 0 },
        { yPercent: 0, opacity: 1, stagger: 0.6, duration: 1 },
        "<0.3"
      );
  }, []);

  let guest;
  if (!!guestName && guestName.includes("&")) {
    const strArr = guestName.split("&");
    guest =
      capitalizeFirstWord(strArr[0]) + " & " + capitalizeFirstWord(strArr[1]);
  } else if (
    !!guestName &&
    !guestName.includes("&") &&
    !guestName.includes("group=")
  ) {
    guest = capitalizeFirstWord(guestName) + " & pasangan";
  } else if (!guestName) {
    guest = "Anda & pasangan";
  } else if (guestName.includes("group=")) {
    guest = capitalizeFirstWord(guestName.replace("group=", ""));
  }

  return (
    <section ref={heroRef} id="hero" className="relative">
      <div className="custom-container">
        <div className="h-screen flex flex-col items-center justify-center gap-36 md:gap-28">
          <div className="relative ">
            {!isInvited && (
              <h2 className="content font-sacramento text-3xl md:text-4xl text-center mb-6">
                {`The wedding of`}
              </h2>
            )}
            <div className="font-yaseva flex items-center gap-2 leading-8 md:leading-10 text-2xl md:text-3xl">
              <h1 className="flex flex-col items-end">
                <span className="bride">Khoiriyah</span>
                <span className="bride">Kurniawan</span>
              </h1>
              <h1>
                <span className="and">&#38;</span>
              </h1>
            </div>

            {/* origin-bottom-right rotate-6 hover:rotate-0 opacity-0 hover:opacity-100 transition duration-300 */}
            <div className="left-wing  absolute bottom-0 left-0 -translate-x-[80px] md:-translate-x-[105px] translate-y-[75px] md:translate-y-[95px]">
              <Image
                src="/images/hero/flower-left-wing.png"
                alt="flower ornament left"
                width={"500px"}
                height="382px"
                priority={true}
              />
            </div>

            {/* origin-bottom-left -rotate-6 hover:rotate-0 opacity-0 hover:opacity-100 transition duration-300 */}
            <div className="right-wing absolute bottom-0 right-0 translate-x-[90px] md:translate-x-[120px] translate-y-[100px] md:translate-y-[130px]">
              <Image
                src="/images/hero/flower-right-wing.png"
                alt="flower ornament right"
                width={"500px"}
                height="595px"
                priority={true}
              />
            </div>
          </div>

          {/* kalimat mengundang.. */}
          <div className="w-[75%] flex flex-col items-center gap-12">
            {isInvited && (
              <h2 className="content font-sacramento text-3xl md:text-4xl text-center">
                {`mengundang ${guest} ke pernikahan kami`}
              </h2>
            )}
            <h2 className="content font-prata text-lg md:text-xl">
              Minggu, 03 Desember 2023
            </h2>
          </div>
        </div>
      </div>
      {/* background */}
      <div className="absolute right-0 bottom-36 md:-bottom-20  -z-10  w-full md:w-[90%]">
        <div className="">
          <Image
            src={"/images/hero/bg-main.png"}
            alt="main background of hero section"
            width={"390px"}
            height={"166px"}
            layout="responsive"
            priority={true}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
