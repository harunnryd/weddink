import Image from "next/image";
import { useState, useEffect } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import CopyIcon from "../icons/CopyIcon";

const Rekening = ({ noRek, behalfOf, bank, width, height }) => {
  const [copied, setCopied] = useState(false);

  const copyHandler = () => {
    setCopied(true);
  };

  useEffect(() => {
    const copyTimer = setTimeout(() => {
      if (copied) {
        setCopied(false);
      }
    }, 3000);

    return () => clearTimeout(copyTimer);
  }, [copied]);

  return (
    <div className="relative flex flex-col items-center gap-4">
      <div className="pop-up w-[50%] md:w-[250px]">
        <Image
          src={`/images/gift/${bank}.png`}
          alt="bca icon"
          width={width}
          height={height}
          layout="responsive"
        />
      </div>
      <div className="pop-up text-center flex items-center gap-4">
        <div>
          <h4 className="font-fira text-base lg:text-lg">
            {`No rekening: ${noRek}`}
          </h4>
          <h4 className="font-fira text-base lg:text-lg">
            {`A/n: ${behalfOf}`}
          </h4>
        </div>
        <CopyToClipboard text={noRek} onCopy={copyHandler}>
          <button className="cursor-pointer p-1 rounded-xl active:bg-dark-green active:text-white-me">
            <CopyIcon size="2rem" />
          </button>
        </CopyToClipboard>
      </div>
      <div
        className={`absolute -bottom-12 bg-black py-2 px-5 bg-opacity-75 text-white-me rounded-xl transition duration-300 ${
          copied ? "opacity-100" : "opacity-0"
        }`}
      >
        <h4>copied to clipboard</h4>
      </div>
    </div>
  );
};

export default Rekening;
