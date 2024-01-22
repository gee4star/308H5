// This is the base data from previos lab

// CSV Data we are working with
//   `ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor's Assistant,26`;
let str =
`ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor's Assistant,26`;
// `Index,Mass (kg),Spring 1 (m),Spring 2 (m)\n1,0.00,0.050,0.050\n2,0.49,0.066,0.066\n3,0.98,0.087,0.080\n4,1.47,0.116,0.108\n5,1.96,0.142,0.138\n6,2.45,0.166,0.158\n7,2.94,0.193,0.174\n8,3.43,0.204,0.192\n9,3.92,0.226,0.205\n10,4.41,0.238,0.232`
let array = str.split("\n")

let rows = []
for (let i = 0; i < array.length; i++){
    rows.push(array[i].split(","));
}
console.log("partOne, partTwo");
console.log(rows);
// Variables created to hold cell data and placeholders
// let placeholder = '';
// let cell1 = '';
// let cell2 = '';
// let cell3 = '';
// let cell4 = '';
// let numOfColumns = '';
console.log("partThree");
let cells = str.split("\n")

let data = []
for (let i = 0; i < cells.length; i++){
    data.push(cells[i].split(","));
}
let newData = []
for (let rows = 1; rows < cells.length;rows++){
    let obj = {}
    data [rows] .forEach(function(value,Columns){
      let key = data[0][Columns]
      console.log(key)
      obj[key]= value  
    })
    newData.push(obj)
}
console.log(newData);
console.log("partFour")
newData.pop()
newData.splice(1, 0,{ id: "48", name: "Barry", occupation: "Runner", age: "25" })
newData.push({ id: "7", name: "Bilbo", occupation: "None", age: "111" })
console.log(newData);

console.log("partFive");



// Loop for each character
// for (char of str) {
//     //Switch case to determin what to do with each char
//   switch (char) {
//     case ',':
//       if (!cell1) {
//         cell1 = placeholder;
//         placeholder = '';
//         break;
//       } else if (!cell2) {
//         cell2 = placeholder;
//         placeholder = '';
//         break;
//       } else {
//         cell3 = placeholder;
//         placeholder = '';
//         break;
//       }
//     case '\n':
//       cell4 = placeholder;
//       placeholder = '';
//       console.log(cell1, cell2, cell3, cell4);
//       cell1 = '';
//       cell2 = '';
//       cell3 = '';
//       cell4 = '';
//       break;
//     default:
//       placeholder += char;
//   }
// }
