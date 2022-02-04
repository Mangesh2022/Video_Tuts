import {useState, useEffect} from "react";
import {getCardData} from "../../../dummy-cleaning-site-data";
import Card from "../../Components/Card/card";

const Services_section = () => {
  // const ServiceCard = getCardData();

  const [ServiceCard, setServiceCard] = useState(undefined);

  useEffect(async () => {
    if (!ServiceCard) {
      let services = await getCardData();
      // let services = await fetch(`/api/services`);
      // let data = await services.json();
      setServiceCard(services.data);
    } else {
      console.log({ServiceCard});
    }
  });

  return (
    <div className="pt-16 container mx-auto   ">
      <div className=" text-center my-4 text-4xl font-semibold text-black">
        See what's latest in the marketplace
      </div>
      <div className="flex justify-items-center  flex-wrap flex-row">
        {ServiceCard &&
          ServiceCard.map((data) => (
            <Card
              title={data.title}
              cardimg={data.image}
              desc={data.description}
              id={data.id}
            />
          ))}
      </div>
    </div>
  );
};

export default Services_section;
