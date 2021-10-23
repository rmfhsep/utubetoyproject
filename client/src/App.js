import React, { useEffect, useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import PlayList from "./pages/playlist";
import Main from "./pages/main";
import Subscription from "./pages/subscription";
import Upload from "./pages/upload";
import Header from "./components/Header";
import { dummyData } from "./assets/state";
import axios from "axios";

import "./App.css";
// import { use } from "../../server/routes";

function App() {
  const [imgs, isImgs] = useState(dummyData.videos);
  const [clicked, setClicked] = useState(null);

  const handleClick = (id) => {
    console.log(id);
    // axios.get("http://localhost:4000/play").then((res) => {
    //   // console.log(res.data);
    // });

    axios
      .get(`http://localhost:4000/play`, { withCredentials: true })
      .then((res) => {
        // console.log(res.data.contents);
        console.log(res.data);
        setClicked(res.data.contents);
      });
    // console.log(src);
  };

  useEffect(() => {
    axios
      .get("http://localhost:4000/", { withCredentials: true })
      .then((res) => {
        // console.log("------", res.data);
        isImgs(res.data);
      });
  }, []);
  // useEffect(() => {
  //   axios.get("http://localhost:4000/play", { withCredentials: true})
  //   .then((res) => {

  //   })
  // }, []);
  return (
    <BrowserRouter>
      {/* <Header /> */}
      {/* <img src={process.env.PUBLIC_URL + '/images/thumbnail1.png'} alt="thumbnail" /> */}
      <Switch>
        <Route exact path="/">
          <PlayList imgs={imgs} handleClick={handleClick} />
        </Route>
        <Route path="/play">
          <Main clicked={clicked} handleClick={handleClick} imgs={imgs} />
        </Route>
        <Route path="/subscription">
          <Subscription />
        </Route>
        <Route path="/upload">
          <Upload />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
