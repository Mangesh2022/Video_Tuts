import {useState} from "react";

const Dropdown = ({selected, setSelected}) => {
  const [isActive, setIsActive] = useState(false);
  const options = ["sample 1", "sample 2", "sample 3"];
  return (
    <>
      <div className="relative z-20  ">
        <div className="" onClick={(e) => setIsActive(!isActive)}>
          {selected}
          <span className="pl-2 pr-10">V</span>
        </div>
        {isActive && (
          <div className="absolute text-black p-2 w-full rounded-md shadow-xl mt-2 bg-gray-100 ">
            {options.map((option) => (
              <div
                className="hover:bg-gray-200 border-b mt-2"
                onClick={(e) => {
                  setSelected(option);
                  setIsActive(false);
                }}
              >
                {option}
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Dropdown;
