const arr = [1, 2, 3, 4, 1, 0, 2, 2];

const divide = (arr, n) => {
  // Write your code here
	arr2
	sum=0
	j=0
	for(i=0;i<arr.length;i++){
		if(sum+arr[i]<=5){
			sum=sum+arr[i]
		}
		else{
			arr2.push(arr.slice(j,i))
			j=i
		}
		return arr2
	}
};

// const n = prompt("Enter n: ");
// alert(JSON.stringify(divide(arr, n)));
