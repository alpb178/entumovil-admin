export const HeaderPage = (props) => {
  const { name } = props;

  return (
    <label htmlFor={name} className="text-2xl font-bold">
      {name}
    </label>
  );
};
