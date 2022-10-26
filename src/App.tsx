import React, { useEffect, useState } from "react";
import "./App.css";
import Settings from "./components/Settings";
import Matrix from "./components/Matrix";
import styled from "styled-components";

const Footer = styled.div`
  background-color: blue;
  height: 60px;
  width: 100%;
  font-size: xx-large;
  color: white;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: center;
`;
const MainContent = styled.div`
  margin-top: 30px;
  display: flex;
  justify-content: space-between;
`;

const App = () => {
  const [xCoordinate, setXCoordinate] = useState<string>("");
  const [yCoordinate, setYCoordinate] = useState<string>("");
  const [sum, setSum] = useState<string>("");

  return (
    <div className="App">
      <Footer>Matrix Dreawer</Footer>
      <MainContent>
        <Matrix xCoordinate={xCoordinate} yCoordinate={yCoordinate} sum={sum} />
        <Settings
          setXCoordinate={setXCoordinate}
          setYCoordinate={setYCoordinate}
          setSum={setSum}
        />
      </MainContent>
    </div>
  );
};

export default App;
