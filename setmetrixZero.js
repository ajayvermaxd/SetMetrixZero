// # Problem statement
// # You are given an m x n matrix representing a grid of numbers.

// # Your task is to modify matrix in place such that if an element in matrix is 0, its entire row and column are set to 0.

// # To solve this problem, we need to set entire rows and columns to zero if an element in the matrix is zero. We can achieve this in-place by first marking the rows and columns that need to be set to zero, and then modifying the matrix accordingly.

// # Here's a step-by-step approach:

// # 1. First Pass: Iterate through the matrix to find the cells with zeros. Instead of using additional arrays to keep track of rows and columns to be zeroed, we can use the first row and first column of the matrix itself for this purpose. However, we need additional variables to remember if the first row and first column need to be zeroed.

// # 2. Mark Zeros: For every cell with zero, mark its corresponding first row and first column cell.

// # 3. Second Pass: Use the marks in the first row and first column to set zeros in the respective rows and columns.

// # 4. Handle First Row and Column: Finally, if the first row or first column initially had a zero, set their entire row or column to zero.

function setZeroes(matrix) {
    const m = matrix.length;
    const n = matrix[0].length;

    let firstRowHasZero = !matrix[0].every(val => val !== 0);
    let firstColHasZero = !matrix.every(row => row[0] !== 0);

    // Mark zeros on first row and column
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            if (matrix[i][j] === 0) {
                matrix[i][0] = matrix[0][j] = 0;
            }
        }
    }

    // Use marks to set zeros
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            if (matrix[i][0] === 0 || matrix[0][j] === 0) {
                matrix[i][j] = 0;
            }
        }
    }

    // Set first row and column to zero if needed
    if (firstRowHasZero) {
        matrix[0].fill(0);
    }
    if (firstColHasZero) {
        for (let i = 0; i < m; i++) {
            matrix[i][0] = 0;
        }
    }
}

// Example usage
const matrix = [
    [1, 1, 1],
    [1, 0, 1],
    [1, 1, 1]
];
setZeroes(matrix);
console.log("Modified matrix:");
matrix.forEach(row => console.log(row));
