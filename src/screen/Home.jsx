import React, { useEffect, useState } from "react";
import Navbar from "../components/navbar";
import Sidebar from "../components/Sidebar";
import ItemList from "../components/ItemList";
import axios from "axios";

function Home() {
  const [itemsData, setItemData] = useState([]);
  const fetchData = async () => {
    await axios
      .get("https://everyonecanchat.000webhostapp.com/index.php")
      .then((res) => {
        setItemData(res.data);
        console.log(res.data);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      <Navbar />
      <ItemList ListItem={itemsData} />
      <Sidebar />
    </div>
  );
}

export default Home;
