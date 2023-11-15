import { useEffect, useState, useContext } from "react";
import AudioContext from "../store/audio-context";

import Head from "next/head";
import Agenda from "../components/agendas/Agendas";
import Gift from "../components/gift/Gift";
import Hero from "../components/hero/Hero";
import Identity from "../components/identity/Identity";
// import Ucapan from "../components/congratulate/Ucapan";
// import axiosBase from "../utils/axiosBase";
import Footer from "../components/footer/Footer";
import Audio from "../components/audio/Audio";

import FirstLoad from "../components/first-load/FirstLoad";

const sortByLatest = (arr) => {
  const compare = (a, b) => {
    const timeA = new Date(a.createdAt).getTime();
    const timeB = new Date(b.createdAt).getTime();

    if (timeA < timeB) {
      return 1;
    }
    if (timeA > timeB) {
      return -1;
    }
    return 0;
  };

  const sortedArr = arr.sort(compare);

  return sortedArr;
};

export default function Home({ listUcapan, guestName, isInvited }) {
  const [firstLoad, setFirstLoad] = useState(true);
  const [list, setList] = useState(sortByLatest(listUcapan));
  const [loadingList, setLoadingList] = useState(false);
  const [obj, setObj] = useState({});

  const AudioCtx = useContext(AudioContext);

  // const updateList = async () => {
  //   setLoadingList(true);
  //   const response = await axiosBase.get("/api/ucapan");
  //   setList(sortByLatest(response.data));
  //   setLoadingList(false);
  // };

  const updateFirstLoad = (bool) => {
    setFirstLoad(bool);
  };

  const getMusic = (obj) => {
    setObj(obj);
  };

  const playMusic = () => {
    AudioCtx.updateIsPlaying(true);
    obj.current.volume = 0.5;
    obj.current.play();
  };

  return (
    <>
      <Head>
        <title>Khoiriah & Ragil Wedding Invitation</title>
        <meta name="description" content="Khoiriah and Ragil Wedding Invitation" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>

      <main>
        <Audio onGetMusic={getMusic} firstLoad={firstLoad} />
        {firstLoad && (
          <FirstLoad
            guestName={guestName}
            isInvited={isInvited}
            updateFirstLoad={updateFirstLoad}
            onPlayMusic={playMusic}
          />
        )}
        {!firstLoad && (
          <>
            <Hero guestName={guestName} isInvited={isInvited} />
            <Identity />
            <Agenda />
            <Gift />
            {/* <Ucapan
              listUcapan={list}
              // updateList={updateList}
              loadingList={loadingList}
            /> */}
            <Footer />
          </>
        )}
      </main>
    </>
  );
}

export const getServerSideProps = async (ctx) => {
  // const response = await axiosBase.get("/api/ucapan");

  const { guestName, isInvited } = ctx.query;


  return {
    props: {
      listUcapan: [],
      guestName: guestName || "", // Ensure a default value if not provided
      isInvited: isInvited === "true", // Convert the string to a boolean
    },
  };
};
