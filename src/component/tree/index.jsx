import React from "react";
import Branch from "./branch";

const Tree = ({ data, contract, setContract }) => {
  return (
    <div  >
      {data.map((item,i) => (
        <Branch
          key={i}
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
