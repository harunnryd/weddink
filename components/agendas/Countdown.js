import { useState, useEffect, useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

import { getReminingTimeUntillMsTimeStamp } from "../../utils/CountdownTimerUtils";

const defaultReminingTime = {
  days: "00",
  hours: "00",
  minutes: "00",
  seconds: "00",
};

const Countdown = () => {
  // jangan lupa jan - des = 0 - 11
  // tahun, bulan, hari, jam
  const tanggalNikah = new Date(2023, 11, 3, 10);
  const countDownTimeStampsMs = tanggalNikah.getTime();

  // countdown content
  const [remainingTime, setRemainingTime] = useState(defaultReminingTime);

  useEffect(() => {
    const intervalId = setInterval(() => {
      updateRemainingTime(countDownTimeStampsMs);
    }, 1000);
    return () => {
      clearInterval(intervalId);
    };
  }, [countDownTimeStampsMs]);

  const updateRemainingTime = (countdown) => {
    setRemainingTime(getReminingTimeUntillMsTimeStamp(countdown));
  };

  //countdown animation
  const countdownRef = useRef();
  const q = gsap.utils.selector(countdownRef);
  const tl = useRef();

  useLayoutEffect(() => {
    tl.current = gsap.timeline().fromTo(
      q(".count-up"),
      { scaleY: 0, transformOrigin: "bottom", opacity: 0 },
      {
        scaleY: 1,
        opacity: 1,
        stagger: 0.1,
      }
    );

    ScrollTrigger.create({
      animation: tl.current,
      trigger: countdownRef.current,
      scrub: 4,
      start: "top 80%",
      end: "top 60%",
      // markers: true,
    });
  }, []);

  return (
    <div className="text-white flex flex-col justify-center items-center font-dm-serif-display max-w-md mx-auto">
      <h3 className="heading-1 mb-6">Menuju hari pernikahan</h3>
      <div
        ref={countdownRef}
        className="flex justify-evenly items-start w-full"
      >
        <div className={`count-up time-item days`}>
          <span className={"num-time-item"}>{remainingTime.days}</span>
          <span className={"label-time-item"}>Hari</span>
        </div>
        <div className={"count-up colon"}>:</div> {/* ---------- */}
        <div className={`count-up time-item hours`}>
          <span className={"num-time-item"}>{remainingTime.hours}</span>
          <span className={"label-time-item"}>Jam</span>
        </div>
        <div className={"count-up colon"}>:</div> {/* ---------- */}
        <div className={`count-up time-item minutes`}>
          <span className={"num-time-item"}>{remainingTime.minutes}</span>
          <span className={"label-time-item"}>Menit</span>
        </div>
        <div className={"count-up colon"}>:</div> {/* ---------- */}
        <div className={`count-up time-item seconds`}>
          <span className={"num-time-item"}>{remainingTime.seconds}</span>
          <span className={"label-time-item"}>Detik</span>
        </div>
      </div>
    </div>
  );
};

export default Countdown;
