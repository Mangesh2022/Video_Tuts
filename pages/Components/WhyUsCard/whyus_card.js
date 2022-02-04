const WhyUsCard = (props) => {
  if (
    props.id === "1" ||
    props.id === "3" ||
    props.id === "5" ||
    props.id === "7"
  ) {
    return (
      <>
        <div className="flex flex-row justify-start align-middle pr-80 items-center text-left ">
          <div className="w-4/12 flex mx-12">
            <img src={props.image} className="" />
          </div>
          <div className="flex flex-col justify-start align-middle py-10 items-start text-left ">
            <div className="text-rose-400 uppercase tracking-widest text-xl   ">
              {props.title}
            </div>
            <div className="text-teal-600 text-base mt-4 leading-6 text-justify ">
              {props.desc}
            </div>
          </div>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="flex flex-row justify-end align-middle pl-80 items-center text-right ">
          <div className="flex flex-col justify-end align-middle py-10 items-end text-right ">
            <div className="text-rose-400 uppercase tracking-widest text-xl   ">
              {props.title}
            </div>
            <div className="text-teal-600 text-base mt-4 leading-6 text-justify ">
              {props.desc}
            </div>
          </div>
          <div className="w-4/12  flex mx-20 ">
            <img src={props.image} className="" />
          </div>
        </div>
      </>
    );
  }
};

export default WhyUsCard;
