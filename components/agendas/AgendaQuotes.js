import { useRef, useLayoutEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const AgendaQuotes = () => {
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
      className="relative h-screen lg:h-[70vh] w-full grid place-items-center py-12"
    >
      <div className="arab-quote">
        <h2 className="pop-up arab-text">
          وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُمْ مِنْ أَنْفُسِكُمْ أَزْوَاجًا
          لِتَسْكُنُوا إِلَيْهَا وَجَعَلَ بَيْنَكُمْ مَوَدَّةً وَرَحْمَةً ۚ
          إِنَّ فِي ذَٰلِكَ لَآيَاتٍ لِقَوْمٍ يَتَفَكَّرُونَ
        </h2>
        <p className="pop-up arab-translate">
          Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan
          pasangan-pasangan untukmu dari jenismu sendiri, agar kamu cenderung
          dan merasa tenteram kepadanya, dan Dia menjadikan di antaramu rasa
          kasih dan sayang. Sungguh, pada yang demikian itu benar-benar terdapat
          tanda-tanda (kebesaran Allah) bagi kaum yang berpikir. (QS Ar-Rum :
          21){" "}
        </p>
      </div>

      <div className="absolute top-0 lg:bottom-0 w-full -z-10 lg:flex lg:justify-end lg:items-end">
        <div className="w-full lg:w-[60%]">
          <Image
            src="/images/agenda/bg-quotes.png"
            alt="mountain view background"
            height="261px"
            width="400px"
            layout="responsive"
          />
        </div>
      </div>
    </div>
  );
};

export default AgendaQuotes;
