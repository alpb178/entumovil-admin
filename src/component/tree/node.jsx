import React from "react";

const Node = ({
  item,
  hasChildren,
  level,
  onToggle,
  contract,
  setContract,
  setContentId,
}) => {
  const handleChangeV2 = (value, field) => {
    const newState = { ...contract, [field]: value };
    setContract(newState);
  };
  return (
    <div className="mb-5 text-lg" style={{ paddingLeft: `${level * 16}px` }}>
      {hasChildren && (
        <div className="hover:font-bold ">
          {item.name}
          <button onClick={onToggle}>
            <i className="fas fa-chevron-down fa-xs ml-2 hover:mt-1.5 hover:text-xl hover:font-bold " />
          </button>
        </div>
      )}
      {!hasChildren && (
        <button
          className="hover:text-2xl hover:font-bold hover:text-red"
          onClick={() => {
            handleChangeV2(item.value, item.father), setContentId(item.father);
          }}
        >
          {item.name}
        </button>
      )}
    </div>
  );
};

export default Node;
