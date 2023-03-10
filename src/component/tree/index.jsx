import React from "react";
import Branch from "./branch";

const Tree = ({ data, contract, setContract }) => {
  return (
    <div>
      {console.log(contract, "Tree")}
      {data.map((item) => (
        <Branch
          key={item.id}
          item={item}
          level={0}
          contract={contract}
          setContract={setContract}
        />
      ))}
    </div>
  );
};

export default Tree;
