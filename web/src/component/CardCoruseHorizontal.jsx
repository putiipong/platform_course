function CardCoruseHorizontal({
  imgBranner,
  imgPerson,
  title,
  name,
  name1,
  halfPrice,
  fullPrice,
}) {
  return (
    <div className="flex flex-col w-1/6 mr-2 mb-4 border border-inherit">
      <img
        src={"data:image/png;base64," + imgBranner}
        alt="course img"
        className="border-b-2"
      />
      <div className="p-2">
        <h3 className="text-emerald-700 font-bold mb-2">{title}</h3>
        <div className="flex items-center">
          <img
            src={"data:image/png;base64," + imgPerson}
            alt="img"
            className="mr-3 rounded-full w-8 h-8"
          />
          <h6 className="font-medium text-left">{name}</h6>
        </div>
        <div className="flex items-center">
          <img
            src={"data:image/png;base64," + imgPerson}
            alt="img"
            className="mr-3 rounded-full w-8 h-8"
          />
          <h6 className="font-medium text-left">{name1}</h6>
        </div>
        <div className="flex w-full justify-between items-center">
          <h6 className=" ml-14">{halfPrice} บาท</h6>
          <h6>ไม่เก็บหน่วยกิต</h6>
        </div>
        <div className="flex w-full justify-between items-center">
          <h6 className=" ml-14">{fullPrice} บาท</h6>
          <h6>เก็บหน่วยกิต</h6>
        </div>
      </div>
    </div>
  );
}
export default CardCoruseHorizontal;
