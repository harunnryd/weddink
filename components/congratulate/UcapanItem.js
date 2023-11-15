const UcapanItem = ({ item }) => {
  const date = new Date(item.createdAt);
  const tanggal = date.toLocaleDateString("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
  });

  const jam = ("0" + date.getHours()).slice(-2);
  const menit = ("0" + date.getMinutes()).slice(-2);

  const tanggalDiBuat = `${tanggal} (${jam}:${menit})`;

  return (
    <div className="w-full shadow-xl rounded-xl p-6 flex flex-col items-start border-[1px] border-gray-me">
      <div className="flex justify-between items-center w-full pb-4">
        <h2 className="">{item.nama}</h2>
        <h4 className="text-sm">{tanggalDiBuat}</h4>
      </div>
      <p className="border-t-[1px] border-gray-me pt-4 w-full">
        {item.message}
      </p>
    </div>
  );
};

export default UcapanItem;
