import UcapanItem from "./UcapanItem";
import LoadingIcon from "../icons/LoadingIcon";

const UcapanGroup = ({ listUcapan, loadingList }) => {
  return (
    <div id="ucapan2" className="lg:h-[500px] lg:overflow-y-scroll">
      <h2 className="text-center mb-6 lg:hidden flex flex-col">
        <span className="heading-1">Ucapan</span>
        <span>Terimakasih atas ucapan yang diberikan</span>
      </h2>
      {loadingList && (
        <div className="animate-spin">
          <LoadingIcon size="5rem" />
        </div>
      )}
      {!loadingList && listUcapan.length !== 0 && (
        <div className="flex flex-col items-center gap-6">
          {listUcapan.map((item, index) => (
            <UcapanItem key={index} item={item} />
          ))}
        </div>
      )}
      {!loadingList && listUcapan.length === 0 && (
        <h2>kirimkan ucapanmu untuk menjadi yang pertama mengucapkan ☺️</h2>
      )}
    </div>
  );
};

export default UcapanGroup;
