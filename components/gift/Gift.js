import { useRef, useLayoutEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

import Rekening from "./Rekening";

const Gift = () => {
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
    <section ref={popUpsRef} id="gift" className="relative">
      <div className="md:absolute md:w-full md:bottom-0 md:right-0 md:-z-10">
        <div className="md:w-[40%]">
          <Image
            src="/images/gift/bg-gift.png"
            alt="mountain view background"
            width="500px"
            height="401px"
            layout="responsive"
          />
        </div>
      </div>

      <div className="custom-container py-24">
        <div className="text-center arab-quote mb-16">
          <h2 className="pop-up heading-1">Hadiah & ucapan</h2>
          <p className="pop-up arab-translate">
            Doa dan restu anda merupakan karunia yang berarti bagi kami, Jika
            ada yang ingin memberikan amplop digital untuk pernikahan kami, kami
            menyediakan form Cashless di bawah ini
          </p>
        </div>

        <div className="flex flex-col md:flex-row md:justify-center md:items-start gap-24">
          <Rekening
            noRek="761686708400"
            behalfOf="Khoiriyah"
            bank="cimb"
            width="310px"
            height="100px"
          />
          <Rekening
            noRek="6631188122"
            behalfOf="Kurniawan Ragil Pamuji"
            bank="bca"
            width="316px"
            height="90px"
          />
        </div>
      </div>
    </section>
  );
};

export default Gift;
