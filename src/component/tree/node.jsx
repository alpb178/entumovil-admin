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
        <div className="hover:font-bold flex  "><div className="border-b-2">  {item.name}</div>
        
          <button onClick={onToggle}>
            <i className="fas fa-chevron-down fa-xs ml-2 " />
          </button>
        </div>
      )}
      {!hasChildren && (
        <button
          className="hover:font-bold"
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
