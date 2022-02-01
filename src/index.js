
// You should implement your task here.

module.exports = function towelSort (matrix) {

  if(arguments.length === 0)
    return [];
 
  const temp = matrix.map((x) => x.slice());
	return temp.map((x,ind) => ind % 2 ? x.reverse() : x ).flat();
  
}
