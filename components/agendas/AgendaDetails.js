import { useRef, useLayoutEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const AgendaDetails = () => {
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

  return (
    <div
      ref={popUpsRef}
      className="flex flex-col items-center text-center gap-12 py-12"
    >
      <h2 className="pop-up heading-1">Agenda</h2>
      <div className="arab-quote">
        <h4 className="pop-up arab-text">بسم الله الرحمن الرحيم</h4>
        <p className="pop-up arab-translate">
          Dengan menyebut nama Allah Subhanahu Wa Ta&apos;ala yang Maha Pengasih
          dan Maha Penyayang. Berikut ini adalah rangkaian acara pernikahan kami
        </p>
      </div>

      <h3 className="pop-up heading-2 lg:block hidden">Akad & Resepsi</h3>
      <div className="flex flex-col lg:grid lg:grid-cols-2 lg:items-start gap-6">
        <h3 className="pop-up heading-2 block lg:hidden">Akad & Resepsi</h3>

        <div className="pop-up flex flex-col gap-1 lg:w-[300px] lg:text-right lg:items-start">
          <div>
            <Image
              src="/images/agenda/clock.png"
              alt="clock icon"
              width="30px"
              height="30px"
            />
          </div>
          <h4 className="heading-3">Minggu 3 Desember 2023</h4>
          <p className="font-fira text-sm font-light">
            {" "}
            Pukul 10.00 - 17.00 WIB
          </p>
        </div>

        <div className="pop-up flex flex-col gap-1 w-[80%] mx-auto lg:mx-0 lg:w-[300px] lg:text-left lg:items-start">
          <div>
            <Image
              src="/images/agenda/location.png"
              alt="location icon"
              width="30px"
              height="30px"
            />
          </div>
          <h4 className="heading-3">Kediaman Mempelai Wanita</h4>
          <p className="font-fira text-sm font-light">
            Jl. Mentimun Raya No. 07, RT 006/RW 020, Kel. Kota Baru, Kec. Bekasi Barat - Kota Bekasi
          </p>
          <div className=" w-fit mx-auto lg:mx-0 mt-4">
            <a
              href="https://maps.app.goo.gl/Gd3mfHS4webysaAs5"
              target="_blank"
              rel="noreferrer"
              className="button text-dark-green bg-white "
            >
              Lihat Google Map
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgendaDetails;
