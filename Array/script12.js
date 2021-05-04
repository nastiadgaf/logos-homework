function unique(arr) {
    return Array.from(set);
  }
  let set = new Set();

  
  let strings = ["кришна", "кришна", "харе", "харе",
    "харе", "харе", "кришна", "кришна", ":-O"
  ];
  
  for( let elem of strings){
    set.add(elem);
}
 console.log( unique(strings) );  // кришна, харе, :-O