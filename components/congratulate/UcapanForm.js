import { useEffect, useState } from "react";

import axiosBase from "../../utils/axiosBase";

const UcapanForm = ({ updateList }) => {
  const [nama, setNama] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();

    setStatus("LOADING");

    if (
      !nama ||
      nama.trim().length === 0 ||
      !message ||
      message.trim().length === 0 ||
      message.length > 150
    ) {
      return;
    }

    try {
      const response = await axiosBase.post("/api/ucapan", { nama, message });
      setNama("");
      setMessage("");
      setStatus("SUCCESS");
      updateList();
    } catch (error) {
      setStatus("ERROR");
    }
  };

  useEffect(() => {
    const statusTimer = setTimeout(() => {
      if (status === "SUCCESS" || status === "ERROR") {
        setStatus("");
      }
    }, 5000);

    return () => clearTimeout(statusTimer);
  }, [status]);

  return (
    <div id="ucapan" className="">
      <form
        onSubmit={submitHandler}
        className="shadow-xl p-4 rounded-xl border-[1px] border-gray-me"
      >
        <div className="control-group">
          <label htmlFor="name">Nama</label>
          <input
            type="text"
            name="name"
            id="name"
            required
            placeholder="tulis nama anda disini..."
            value={nama}
            onChange={(e) => setNama(e.target.value)}
          />
        </div>
        <div className="control-group relative">
          <label htmlFor="ucapan">Ucapan</label>
          <textarea
            name="ucapan"
            id="ucapan"
            cols="30"
            rows="5"
            required
            placeholder="tulis ucapan disini..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            maxLength="150"
            className={
              message.length > 150
                ? "border-2 border-red-600 focus:border-2 focus:border-red-600"
                : "border-2 border-transparent"
            }
          />
          <h5
            className={`absolute -bottom-10 right-0 ${
              message.length > 150 ? "text-red-600" : "text-blue-600"
            }`}
          >{`${message.length}/150`}</h5>
        </div>
        <div className="w-full flex justify-between items-end mt-16">
          <h4
            className={`${
              status === "LOADING"
                ? "text-blue-600 animate-pulse"
                : status === "SUCCESS"
                ? "text-green-600"
                : status === "ERROR" && "text-red-600"
            }`}
          >
            {status === "LOADING"
              ? "menyimpan ucapan selamatmu dalam memori..."
              : status === "SUCCESS"
              ? "ucapan tersampaikan 😊"
              : status === "ERROR" && "something went wrong 😫"}
          </h4>
          <button className="button bg-dark-green text-white-me">kirim</button>
        </div>
      </form>
    </div>
  );
};

export default UcapanForm;
