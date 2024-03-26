import { useContext, useEffect } from "react";
import searchStyle from "./Search.module.scss";
import { GlobalContext } from "../context/GlobalData";
const Search = () => {
  // {onChange}
  const { datas, setDatas, data, setSearchValue, searchValue } =
    useContext(GlobalContext);

  //SEARCH INPUT CHANGE HANDLER
  const changeHandler = (e) => {
    if (!e.target.value.trim()) {
      setDatas(data);
    } else {
      setSearchValue(e.target.value.trim());
      console.log(searchValue);
    }
  };

  //make searching in legends with words
  useEffect(() => {
    setDatas(
      data.filter((data) =>
        data.name.toLowerCase().includes(searchValue.toLowerCase())
      )
    );
  }, [searchValue]);

  return (
    <div className={searchStyle.searchWrapper}>
      <input
        type="text"
        placeholder="Search"
        className={searchStyle.searchInput}
        onChange={changeHandler}
      />
    </div>
  );
};

export default Search;
