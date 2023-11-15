import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";

import EnvelopeIcon from "../icons/EnvelopeIcon";
// import { useRouter } from "next/router";

const capitalizeFirstWord = (str) => {
  const strTransformed = str.charAt(0).toUpperCase() + str.slice(1);

  return strTransformed;
};

const FirstLoad = ({ updateFirstLoad, onPlayMusic, guestName, isInvited }) => {
  const openInvitation = () => {
    updateFirstLoad();
    onPlayMusic();
  };

  // const router = useRouter();
  // const guestName = router.query.guest.replace("to=", "");
  // const isInvited = router.query.guest.includes("to=");
  const envelopeRef = useRef();
  const q = gsap.utils.selector(envelopeRef);
  const tl = useRef();

  useLayoutEffect(() => {
    tl.current = gsap
      .timeline()
      .fromTo(
        q(".envelope"),
        { opacity: 0, yPercent: -100 },
        { opacity: 1, yPercent: 0, duration: 1 }
      )
      .fromTo(
        q(".content"),
        { opacity: 0, yPercent: 50 },
        { opacity: 1, yPercent: 0, duration: 0.5, stagger: 0.5 }
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
    <section
      id="first-load"
      className="h-screen bg-dark-green text-white-me grid place-items-center"
    >
      <div
        ref={envelopeRef}
        className="flex flex-col items-center gap-6 text-center"
      >
        <div className="relative envelope mt-6">
          {isInvited && (
            <>
              <EnvelopeIcon size="6rem" />
              <div className="absolute top-0 -right-2 animate-ping w-[10px] h-[10px] rounded-full bg-red-600" />
            </>
          )}
          {!isInvited && (
            <div className="font-yaseva flex items-center gap-2 leading-8 md:leading-10 text-4xl md:text-5xl">
              <h1 className="flex flex-col items-end">
                <span className="bride">Khoiriah</span>
                <span className="bride">Ragil</span>
              </h1>
              <h1>
                <span className="and">&#38;</span>
              </h1>
            </div>
          )}
        </div>
        <div className="flex flex-col gap-4 w-[300px]">
          {isInvited && (
            <p className="content">{`${guest} menerima sebuah undangan, buka?`}</p>
          )}
          {!isInvited && !!guestName && (
            <p className="content flex flex-col items-center text-center gap-2">
              <span>{`Kepada Bpk/Ibu/Saudara/i`}</span>
              <span className="text-xl font-fira">{`${guest}`}</span>
            </p>
          )}
          {!isInvited && !guestName && (
            <p className="content">{`Anda menerima sebuah undangan, buka?`}</p>
          )}
          <button
            onClick={openInvitation}
            className="content w-fit self-center text-xl font-semibold bg-white-me text-dark-green py-1 px-5 rounded-xl mt-2 hover:shadow-inner"
          >
            buka
          </button>
        </div>
      </div>
    </section>
  );
};

export default FirstLoad;
