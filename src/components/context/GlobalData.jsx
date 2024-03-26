import React, { createContext, useState } from "react";

import { data } from "../../helper/data.jsx";
export const GlobalContext = createContext();

export const GlobalProvider = (props) => {
  const [datas, setDatas] = useState(data);
  const [searchValue, setSearchValue] = useState("");

  const allData = {
    datas: datas,
    setDatas: setDatas,
    searchValue: searchValue,
    setSearchValue: setSearchValue,
    data: data,
  };

  return (
    <GlobalContext.Provider value={allData}>
      {props.children}
    </GlobalContext.Provider>
  );
};
