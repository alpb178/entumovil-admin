export const HeaderPage = (props) => {
  const { name } = props;

  return (
    <div  className="text-2xl flex font-bold items-center justify-center text-justify">
      {name}
    </div>
  );
};
