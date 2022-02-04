import Link from "next/link";

const Button = (props) => {
  if (props.link) {
    return (
      <div className="py-2 px-8 bg-rose-400 rounded-md text-white ">
        <Link href={props.link}>
          <a>{props.children}</a>
        </Link>
      </div>
    );
  }
  if (props.id === "100") {
    return (
      <button
        onClick={props.onClick}
        disabled={props.disabled}
        className="py-2 px-8 mx-4 my-2 border bg-slate-200 rounded-md text-gray-800 shadow-md "
      >
        {props.children}
      </button>
    );
  }
  if (props.position === "left") {
    return (
      <button
        onClick={props.onClick}
        disabled={props.disabled}
        className="py-2 my-2 border bg-rose-400 text-left px-4 text-xl rounded-md text-white "
      >
        {props.children}
      </button>
    );
  }

  return (
    <button
      onClick={props.onClick}
      disabled={props.disabled}
      className="py-2 px-8  my-4  bg-rose-400 rounded-md text-white shadow-md"
    >
      {props.children}
    </button>
  );
};

export default Button;
