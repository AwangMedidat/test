// soal 1

let arr = ['cook', 'save', 'taste', 'aves', 'vase', 'state', 'map'];
let abjad = "abcdefghijklmnopqrstuvwxyz"
let hasil = []
  for (let i = 0; i < abjad.length; i++) {
    let temp = []
    for (let j = 0; j < arr.length; j++) {
      if (arr[j][0] === abjad[i]) {
        temp.push(arr[j])
      }  
    }
    if(temp.length >= 1){
      hasil.push(temp)
      temp = []
    }
  }
  console.log(hasil)



// soal 2//

// SELECT id,Childs.name, Parents.parent_name
// FROM Childs
// LEFT JOIN Parents ON Childs.parent_id = Parents.id
// ORDER BY Childs.name;