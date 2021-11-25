// Json data
var objects = [
    { person: "Name 1", age: "2", company: "GUVI" },
    { person: "Name 2", age: "5", company: "GUVI geek" },
    { person: "Name 3", age: "8", company: "GUVI geek network" },
  ];


// for loop
for(let i=0; i<objects.length;i++){
  console.log(objects[i]);
}



// for.. in

for(let key in objects){
    let value = objects[key];
    console.log(key,value);
}

// for .. of
for(let key of objects){
  
  console.log(key);
}

// forEach

  objects.forEach(obj => {
      Object.entries(obj).forEach(([key,value]) => {
           console.log(`${key}: ${value}`);
           
      })
})