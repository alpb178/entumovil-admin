import { Link } from "react-router-dom";

export const ButtonSubmit = (props) => {
  const { name, onClick, type, disabled } = props;

  return (
    <button
      type={type}
      onClick={() => onClick?.()}
      disabled={disabled}
      className="p-2 m-3 rounded-md bg-blue-500  text-xl text-white"
    >
      {name}
    </button>
  );
};

export const ButtonCancel = (props) => {
  const { name, onClick, type, disabled } = props;

  return (
    <button
      type={type}
      onClick={() => onClick?.()}
      disabled={disabled}
      className="p-2 m-3 rounded-md bg-gray-300  text-xl text-black "
    >
      {name}
    </button>
  );
};

export const ButtonCancelLink = (props) => {
  const { name, url } = props;

  return (
    <Link
      to={url}
      className="m-1 rounded-md bg-gray-400 p-2 text-xl text-black"
      prefetch={false}
      
    >
      {name}
    </Link>
  );
};
