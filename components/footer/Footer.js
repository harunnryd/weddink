import Link from "next/link";
import { useRouter } from "next/router";

const Footer = () => {
  const router = useRouter();
  const query = router.query;

  let url;

  if (router.pathname === "/") {
    url = "/";
  } else {
    url = `/${query.guest}`;
  }

  return (
    <section id="footer" className="bg-dark-green text-white-me py-4">
      <div className="custom-container flex flex-col items-center text-center">
        <h4>Made with love by</h4>
        <h2 className="font-dm-serif ">
          Pujangga Kata
        </h2>
      </div>
      <div className="text-center flex justify-center text-sm underline mt-4 tracking-widest cursor-pointer">
        <Link href={url}>
          <h2>scroll to top</h2>
        </Link>
      </div>
    </section>
  );
};

export default Footer;
