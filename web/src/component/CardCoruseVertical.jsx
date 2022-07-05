function CardCoruseVertical({ imgBranner, title, name, halfPrice, fullPrice }) {
  return (
    <div className="flex flex-col w-full mr-2  border border-inherit">
      <div className="flex">
        <img
          src={"data:image/png;base64," + imgBranner}
          alt="course img"
          className="border-b-2 w-2/6"
        />
        <div className="flex flex-col p-4">
          <h3 className="text-emerald-700 font-bold text-left mb-2">{title}</h3>
          <h6 className="font-medium text-left">{name}</h6>
        </div>
      </div>
      <div className="flex flex-col justify-center items-end px-2">
        <div className="flex w-3/5 justify-between items-center">
          <h6 className="mr-3 ml-11">{halfPrice} บาท</h6>
          <h6>ไม่เก็บหน่วยกิต</h6>
        </div>
        <div className="flex w-3/5  justify-between items-center">
          <h6 className="mr-3 ml-11">{fullPrice} บาท</h6>
          <h6>เก็บหน่วยกิต</h6>
        </div>
      </div>
    </div>
  );
}
export default CardCoruseVertical;
