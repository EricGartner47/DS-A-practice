// //checkDigit

// const createCheckDigit = (membershipId) => {
//     let sumMembershipId = aggregator(membershipId);
//     console.log(sumMembershipId)
//     while (parseInt(sumMembershipId) > 9) sumMembershipId = aggregator(sumMembershipId);
//     return sumMembershipId;
// }

// function aggregator(strMembershipId) {
//     return strMembershipId.toString().split('').reduce((a, b) => parseInt(a) + parseInt(b));
// }

// console.log(createCheckDigit("55555"))

//

//Calculate average height
// function calcAvgHeight(data) {

//     if(data.length == 0){
//       return null;
//     }
//     else {
//       var sum = 0;
//       var i = 0;

//       for(i=0; i <data.length; i++){
//         sum += data.height;
//       }

//       return (sum/data.length);
//     }
// }

//   var avgHeight = calcAvgHeight({
//     Matt: { height: 174, weight: 69 },
//     Jason: { height: 190, weight: 103 }
//   });
//   console.log(avgHeight);

//Filter object
// function findAllHobbyists(hobby, hobbies) {
//     let resultArr = []
//     for(const [key, value] of Object.entries(hobbies)){
//         console.log(value)
//         if(value.includes(hobby)){

//             resultArr.push(key)
//         }
//     }
//     return resultArr
//   }

//   const hobbies = {
//     "Steve": ['Fashion', 'Piano', 'Reading'],
//     "Patty": ['Drama', 'Magic', 'Pets'],
//     "Chad": ['Puzzles', 'Pets', 'Yoga']
//   };

//   console.log(findAllHobbyists('Yoga', hobbies));

// //   console.log(Object.entries(hobbies))

//Fix Screen Class
// class Screen {
//     constructor(width, height){
//       this.width = width
//       this.height = height
//     }
//     diagonal() {
//       return Math.sqrt(Math.pow(this.width, 2) + Math.pow(this.height, 2));
//     }

//     dimensions(definition) {
//       var dimensions = definition.split('x')
//       this.width = parseInt(dimensions[0]);
//       this.height = parseInt(dimensions[1]);
//     }
//   }

//   var screen = new Screen(0, 0);
//   screen.dimensions = '500x300';
//   screen.width = 400;
//   console.log(screen.diagonal()); // Should print 500
//   console.log(screen.width)
//   console.log(screen.height)

//Filter Numbers from Array
// function filterNumbersFromArray(arr) {
//     let i = 0;
//     let j = 0;
//     while(i < arr.length){
//         let val = arr[i]
//         if(typeof val === 'number'){
//             arr[j++] = val
//         }
//         i++
//     }
//     arr.length = j;
//     return arr
// }

// var arr = [1, 'a', 'b', 2];
// filterNumbersFromArray(arr);
// // At this point, arr should have been modified in place
// // and contain only 1 and 2.
// for (var i = 0; i < arr.length; i++)
//   console.log(arr[i]);

//Sorted Squared Array
// function sortedSquaredArray(array) {
//     let squared = array.map( a => a * a)

//     return squared.sort((a,b) => a - b);


// }

// let array = [1, 2, 3, 5, 6, 8, 9]

// console.log(sortedSquaredArray(array))

//Branch sums
// class BinaryTree {
//     constructor(value) {
//         this.value = value;
//         this.left = null;
//         this.right = null;
//     }
// }

// function branchSums(root) {

// }

//Node Depths
// function nodeDepths(root) {
//     // Write your code here.
//   }

//   // This is the class of the input binary tree.
//   class BinaryTree {
//     constructor(value) {
//       this.value = value;
//       this.left = null;
//       this.right = null;
//     }
//   }
