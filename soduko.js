var array = [
  [0, 0, 0, 2, 6, 0, 7, 0, 1],
  [6, 8, 0, 0, 7, 0, 0, 9, 0],
  [1, 9, 0, 0, 0, 4, 5, 0, 0],
  [8, 2, 0, 1, 0, 0, 0, 4, 0],
  [0, 0, 4, 6, 0, 2, 9, 0, 0],
  [0, 5, 0, 0, 0, 3, 0, 2, 8],
  [0, 0, 9, 3, 0, 0, 0, 7, 4],
  [0, 4, 0, 0, 5, 0, 0, 3, 6],
  [7, 0, 3, 0, 1, 8, 0, 0 ,0]];

var checkRow = function (array,row,n) {
  for ( let col=0;col<9;col++){
      if(array[row][col] == n)
          return true;
    }
    return false;
  }

  var checkCol = function (array,col,n) {
    for ( var row=0;row<9;row++){
        if(array[row][col]==n)
            return true;
      }
      return false;
    }
      var test = [];

function checkBox(grid, row, col, num) {
    for (var r = 0; r < 3; r++){
        for (var c = 0; c < 3; c++){
            if (grid[r + row][c + col] == num)
                return true;
              }
            }
    return false;
}
function noConflicts(grid, row, col, num) {
    if(checkRow(grid, row, num) || checkCol(grid, col, num)|| checkBox(grid, row-row%3, col-col%3, num)){
      return false;
    }
    return true;
}

function solveSudoku(grid) {
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (grid[i][j] == '0') {      //base condition
        for (let k = 1; k <= 9; k++) {
          if (noConflicts(grid, i, j, k)) {
            grid[i][j] = `${k}`;
          //  console.log("replaced num at "+i+","+j+"");
          //  console.log(grid);
          if (solveSudoku(grid)) {
          // console.log("inside true");
           return true;
          } else {
          //  console.log("swapped with zero at "+i+","+j+"");
           grid[i][j] = '0';
          // console.log(grid);
          }
         }
       }
       //console.log("false here");
       return false; // backtracks here
     }
   }
 }
 //console.log("outside true");
 return true;
}

var ans = solveSudoku(array);
console.log(ans);


