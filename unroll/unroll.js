function unroll(squareArray) {
  if (squareArray.length === 0) return [];

  const result = [];
  //   get end points
  let top = 0,
    bottom = squareArray.length - 1;
  let left = 0,
    right = squareArray[0].length - 1;

  while (top <= bottom && left <= right) {
    // From left to right along the top row
    for (let i = left; i <= right; i++) {
      result.push(squareArray[top][i]);
    }
    top++;

    // From top to bottom along the right column
    for (let i = top; i <= bottom; i++) {
      result.push(squareArray[i][right]);
    }
    right--;

    if (top <= bottom) {
      // From right to left along the bottom row
      for (let i = right; i >= left; i--) {
        result.push(squareArray[bottom][i]);
      }
      bottom--;
    }

    if (left <= right) {
      // From bottom to top along the left column
      for (let i = bottom; i >= top; i--) {
        result.push(squareArray[i][left]);
      }
      left++;
    }
  }

  return result;
}

module.exports = unroll;
