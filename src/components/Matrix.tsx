import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { createMatrix } from "../utils.js/utils";

const Container = styled.div`
  width: 75%;
`;

const Title = styled.div`
  font-size: large;
  font-weight: bold;
  margin: 10px;
`;

interface MatrixProps {
  xCoordinate: string;
  yCoordinate: string;
  sum: string;
}

const Matrix = ({ xCoordinate, yCoordinate, sum }: MatrixProps) => {
  const [matrix, setMatrix] = useState<string[][]>([]);
  const [sumErr, setSumErr] = useState(false);

  // update the matrix array with x & y oordinates
  useEffect(() => {
    const matrix = createMatrix(xCoordinate, yCoordinate);
    setMatrix(matrix);
  }, [xCoordinate, yCoordinate]);

  // update the input in matrix
  const updateValue = (
    e: React.FormEvent<EventTarget>,
    row: any,
    col: any,
    i: number,
    j: number
  ) => {
    e.preventDefault();
    if (sumErr) {
      setSumErr(false);
    }
    let copy = [...matrix];
    copy[i][j] = (e.target as HTMLInputElement).value;
    setMatrix(copy);

    if (!checkSum(i, j)) {
      setTimeout(() => {
        let updatedMatrix = [...matrix];
        updatedMatrix[i][j] = "";
        setMatrix(updatedMatrix);
      }, 2000);
    }
  };

  // verfiy if matrix is valid
  const checkSum = (row: number, col: number) => {
    let countX = 0;
    let countY = 0;
    let countDiag1 = 0;
    let countDiag2 = 0;

    // check x coordinate
    for (let i in matrix[row]) {
      if (matrix[row][i] !== "") {
        countX += parseInt(matrix[row][i]);
      }
    }
    // check y coordinate
    for (let j = 0; j < matrix.length; j++) {
      if (matrix[j][col] !== "") {
        countY += parseInt(matrix[j][col]);
      }
    }
    // check diag
    for (let k = 0; k < matrix.length; k++) {
      if (col - row + k <= matrix.length && matrix[k][col - row + k]) {
        if (matrix[k][col - row + k] !== "") {
          const curr = parseInt(matrix[k][col - row + k]);
          countDiag1 += curr;
        }
      }
    }
    // check reverse diag
    for (let l = 0; l < matrix.length; l++) {
      if (col + row - l >= 0 && matrix[l][col + row - l]) {
        if (matrix[l][col + row - l] !== "") {
          const curr = parseInt(matrix[l][col + row - l]);
          countDiag2 += curr;
        }
      }
    }

    if (
      countX > parseInt(sum) ||
      countY > parseInt(sum) ||
      countDiag1 > parseInt(sum) ||
      countDiag2 > parseInt(sum)
    ) {
      setSumErr(true);
      return false;
    }
    return true;
  };

  const error = <div>Error! You passed the sum !!!</div>;

  return (
    <Container>
      <Title>matrix function</Title>
      {xCoordinate && (
        <Title>
          X: {xCoordinate} , Y: {yCoordinate}, Sum: {sum}
        </Title>
      )}
      <table style={{ margin: "5% auto" }}>
        <tbody>
          {matrix.map((row: any, i: number) => (
            <tr key={i}>
              {row.map((col: any, j: number) => (
                <td key={j}>
                  <input
                    style={{
                      fontSize: "medium",
                      textAlign: "center",
                      width: "80px",
                      height: "80px",
                    }}
                    key={j}
                    value={matrix[i][j]}
                    onChange={(e) => updateValue(e, row, col, i, j)}
                  ></input>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      {sumErr && error}
    </Container>
  );
};

export default Matrix;
