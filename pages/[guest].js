import Home from ".";
import { useRouter } from "next/router";
import axiosBase from "../utils/axiosBase";

const GuestPage = ({ listUcapan }) => {
  const router = useRouter();
  const guest = router.query.guest.replace("to=", "");
  const isInvited = router.query.guest.includes("to=");

  return (
    <Home guestName={guest} listUcapan={listUcapan} isInvited={isInvited} />
  );
};

export default GuestPage;

export const getServerSideProps = async (ctx) => {
  const response = await axiosBase.get("/api/ucapan");

  return {
    props: {
      listUcapan: response.data,
    },
  };
};
