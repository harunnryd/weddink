import UcapanForm from "./UcapanForm";
import UcapanGroup from "./UcapanGroup";

const Ucapan = ({ listUcapan, updateList, loadingList }) => {
  return (
    <section className="pt-12 pb-32">
      <div className="custom-container">
        <h2 className="text-center mb-6 hidden lg:flex lg:flex-col">
          <span className="heading-1">Ucapan</span>
          <span>Terimakasih atas ucapan yang diberikan</span>
        </h2>
        <div className="flex flex-col gap-12 lg:grid lg:grid-cols-2 lg:h-[500px] lg:p-4">
          <UcapanForm updateList={updateList} />
          <UcapanGroup listUcapan={listUcapan} loadingList={loadingList} />
        </div>
      </div>
    </section>
  );
};

export default Ucapan;
