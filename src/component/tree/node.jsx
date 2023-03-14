import React from "react";

const Node = ({
  item,
  hasChildren,
  level,
  onToggle,
  contract,
  setContract,
}) => {
  const handleChangeV2 = (value, field) => {
    const newState = { ...contract, [field]: value };
    setContract(newState);
  };
  return (
    <div style={{ paddingLeft: `${level * 16}px` }}>
      {hasChildren && (
        <>
          {item.name}
          <button onClick={onToggle}>
            <i className="fas fa-chevron-down fa-xs ml-2" />
          </button>
        </>
      )}
      {!hasChildren && (
        <button
          className="hover:text-red"
          onClick={() => handleChangeV2(item.value, item.father)}
        >
          {item.name}
        </button>
      )}
    </div>
  );
};

export default Node;
