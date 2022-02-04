const Button = (props) => {
  if (props.type === "primery") {
    return (
      <div className=" flex justify-center align-middle text-center items-center mr-2 ">
        <div className="px-4 py-2 text-sm font-semibold text-center bg-purple-700   border-white text-white border rounded-md hover:bg-purple-800   ">
          {props.children}
        </div>
      </div>
    );
  } else {
    return (
      <div className=" flex justify-center align-middle text-center items-center mr-2 ">
        <div className="px-4 py-2 text-sm text-center font-semibold border-purple-700   text-purple-700 border rounded-md hover:text-purple-800   ">
          {props.children}
        </div>
      </div>
    );
  }
};

export default Button;
