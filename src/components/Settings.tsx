import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 25%;
  margin: 20px;
  display: flex;
  flex-direction: column;
`;
const Title = styled.div`
  font-size: large;
  font-weight: bold;
  margin: 10px;
`;
const Label = styled.div`
  display: flex;
  margin: 10px;
`;

interface SettingsProps {
  setXCoordinate: (val: string) => void;
  setYCoordinate: (val: string) => void;
  setSum: (val: string) => void;
}

const Settings = ({
  setXCoordinate,
  setYCoordinate,
  setSum,
}: SettingsProps) => {
  // inner state for inputs
  const [xInput, setXInput] = useState<string>("");
  const [yInput, setYInput] = useState<string>("");
  const [sumInput, setSumInput] = useState<string>("");

  // update the state in parent and clear inputs
  const handleSubmit = (e: React.FormEvent<EventTarget>) => {
    e.preventDefault();
    setXCoordinate(xInput);
    setYCoordinate(yInput);
    setSum(sumInput);
    setXInput("");
    setYInput("");
    setSumInput("");
  };

  return (
    <Container>
      <Title>Build your own matrix and select a Sum</Title>
      <form
        style={{ display: "flex", flexDirection: "column" }}
        onSubmit={(e) => handleSubmit(e)}
      >
        <Label>
          X Coordinate:
          <input
            type="text"
            value={xInput}
            onChange={(e) => setXInput(e.target.value)}
          />
        </Label>
        <Label>
          Y Coordinate:
          <input
            type="text"
            value={yInput}
            onChange={(e) => setYInput(e.target.value)}
          />
        </Label>
        <Label>
          Sum:
          <input
            type="text"
            value={sumInput}
            onChange={(e) => setSumInput(e.target.value)}
          />
        </Label>

        <input type="submit" value="Submit" />
      </form>
    </Container>
  );
};

export default Settings;
