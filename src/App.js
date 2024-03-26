import { useContext  } from "react";
import "./App.scss";
import Header from "./components/header/Header.jsx";
import Card from "./components/main/Card.jsx";
import Content from "./components/main/Content.jsx";
import Search from "./components/search/Search.jsx"; 
import { GlobalContext    } from "./components/context/GlobalData.jsx";

function App() {
  // const [datas, setDatas] = useState(data);
  // const [searchValue, setSearchValue] = useState("");

  // //SEARCH INPUT CHANGE HANDLER
  // const changeHandler = (e) => {
  //   if (!e.target.value.trim()) {
  //     setDatas(data);
  //   } else {
  //     setSearchValue(e.target.value.trim());
  //     console.log(searchValue);
  //   }
  // };

  // //make searching in legends with words
  // useEffect(() => {
  //   setDatas(
  //     data.filter((data) =>
  //       data.name.toLowerCase().includes(searchValue.toLowerCase())
  //     )
  //   );
  //   console.log(datas);
  // }, [searchValue]);

  const {datas} = useContext(GlobalContext);
  console.log(datas);

  return (
    <div className="App">
      <Header /> 
        <Search  /> {/* onChange={changeHandler} */}
        <Content>
          {[...datas].map((legend) => (
            <Card key={legend.name} legend={legend} />
          ))}
        </Content> 
    </div>
  );
}

export default App;
