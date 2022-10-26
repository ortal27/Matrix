export const createMatrix = (num1, num2) =>{
    let arr = [];

    // creating two dimensional array
    for (let i = 0; i< num1; i++) {
        for(let j = 0; j< num2; j++) {
            arr[i] = [];
        }
    }
    // inserting elements to array
    for (let i = 0; i< num1; i++) {
        for(let j = 0; j< num2; j++) {
            arr[i][j] = "";
        }
    }
    return arr;
} 