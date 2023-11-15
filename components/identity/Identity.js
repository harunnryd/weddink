import { useRef, useLayoutEffect } from "react";
import Image from "next/image";

import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Identity = () => {
  //basic animation for pop-up text/elemnt
  const popUpsRef = useRef();
  const b = gsap.utils.selector(popUpsRef);

  useLayoutEffect(() => {
    b(".pop-up").forEach((item) => {
      gsap.fromTo(
        item,
        { yPercent: 100, opacity: 0 },
        {
          yPercent: 0,
          opacity: 1,
          duration: 2,
          // stagger: 0.2,
          clearProps: "all",
          scrollTrigger: {
            trigger: item,
            scrub: 4,
            once: true,
            start: "top bottom",
            end: "top 90%",
            // markers: true,
          },
        }
      );
    });
  }, []);

  //special animation for our photo
  const fotoRef = useRef();
  const q = gsap.utils.selector(fotoRef);
  const tl = useRef();

  useLayoutEffect(() => {
    tl.current = gsap
      .timeline()
      .fromTo(
        q(".bunga-kiri"),
        { opacity: 0, transformOrigin: "bottom", rotate: 30, xPercent: 100 },
        { opacity: 1, rotate: 0, duration: 1.5, xPercent: 0 }
      )
      .fromTo(
        q(".foto-kita"),
        { opacity: 0 },
        { opacity: 1, duration: 1.5 },
        "<"
      )
      .fromTo(
        q(".bunga-kanan"),
        { opacity: 0, transformOrigin: "bottom", rotate: -30, xPercent: -100 },
        { opacity: 1, rotate: 0, duration: 1.5, xPercent: 0 },
        "<"
      );

    ScrollTrigger.create({
      animation: tl.current,
      trigger: fotoRef.current,
      scrub: 4,
      once: true,
      start: "top 60%",
      end: "bottom 73%",
      // markers: true,
    });
  }, []);

  return (
    <section ref={popUpsRef} id="identity" className="py-12 md:pt-32">
      <div className="custom-container">
        <div className="arab-quote">
          <h2 className="pop-up arab-text">السلام عليكم ورحمة الله وبركاته</h2>
          <p className="pop-up arab-translate">
            Dengan menyebut nama Allah Subhanahu Wa Ta&apos;ala yang Maha
            Pengasih dan Maha Penyayang. Kami mengundang Anda untuk menghadiri
            pernikahan kami
          </p>
        </div>

        <div
          ref={fotoRef}
          className="relative flex justify-center items-center gap-0 md:gap-8 py-0 md:py-10 w-fit mx-auto"
        >
          <div className="flex flex-col items-center justify-center">
            <div className="bunga-kiri -z-10">
              <Image
                src="/images/identity/flower-left.png"
                alt="flower png"
                width="65px"
                height="163px"
              />
            </div>
            <div className="pop-up text-center hidden md:block xl:w-[350px]">
              <h2 className="font-dm-serif text-xl">
                Khoiriyah.
              </h2>
              <p className="font-fira text-sm">
                Putri Pertama Bpk. Selamat & Ibu Sirowati (Almarhumah)
              </p>
            </div>
          </div>
          <div className="foto-kita scale-75 md:scale-100 w-[300px] lg:w-[350px]">
            <Image
              src="/images/identity/x.jpg"
              alt="picture of Kurniawan and Khoiriyah"
              width="600px"
              height="733px"
              layout="responsive"
              priority={true}
            />
          </div>
          <div className="flex flex-col items-center justify-center">
            <div className="bunga-kanan -z-10">
              <Image
                src="/images/identity/flower-right.png"
                alt="flower png"
                width="65px"
                height="163px"
              />
            </div>
            <div className="pop-up text-center hidden md:block xl:w-[350px]">
              <h2 className="font-dm-serif text-xl">
                Kurniawan Ragil Pamuji.
              </h2>
              <p className="font-fira text-sm">
                Putra Keempat Bpk. Dono & Ibu Wahyuni
              </p>
            </div>
          </div>
          <div className="lg:block hidden absolute top-14 -translate-x-0">
            <Image
              src="/images/identity/ring.png"
              alt="ring icon"
              width="61px"
              height="65px"
            />
          </div>
        </div>

        <div className="flex flex-col items-center justify-center text-center gap-4">
          <div className="pop-up block md:hidden w-[90%]">
            <h2 className="font-dm-serif text-xl">
              Khoiriyah.
            </h2>
            <p className="font-fira text-sm">
              Putri Pertama Bpk. Selamat & Ibu Sirowati (Almarhumah)
            </p>
          </div>
          <div className="pop-up block md:hidden">
            <Image
              src="/images/identity/ring.png"
              alt="ring icon"
              width="50px"
              height="53px"
            />
          </div>
          <div className="pop-up block md:hidden w-[90%]">
            <h2 className="font-dm-serif text-xl">
              Kurniawan Ragil Pamuji.
            </h2>
            <p className="font-fira text-sm">
              Putra Keempat Bpk. Dono & Ibu Wahyuni
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Identity;
