import React, { useState } from "react";
import Node from "./node";

const Branch = ({ item, level, contract, setContract }) => {
  const [selected, setSelected] = useState(item.selected ?? false);

  const hasChildren = item.options && item.options.length !== 0;

  const renderBranches = () => {
    if (hasChildren) {
      const newLevel = level + 1;

      return item.options.map((child) => {
        return <Branch key={child.id} item={child} level={newLevel} />;
      });
    }

    return null;
  };

  const toggleSelected = () => {
    setSelected((prev) => !prev);
  };

  return (
    <>
    {console.log(contract, "branch")}
      <Node
        item={item}
        selected={selected}
        hasChildren={hasChildren}
        level={level}
        onToggle={toggleSelected}
        contract={contract}
        setContract={setContract}
      />

      {selected && renderBranches()}
    </>
  );
};

export default Branch;
