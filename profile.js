console.log("1ok")
let name1;
document.getElementById("btn").onclick = function(){
  name1 = document.getElementById("text").value;
  console.log(name1)
  if( name1 == "medicine1"){
    alert("yes it is available")
  }
  else if (name1 =="medicine2"){
    alert("not available")
  }
  else{
    alert("unknow name")
    console.log("1ok")
  }
let name2;
document.getElementById("btn").onclick = function(){
  name2 = document.getElementById("text").value;
  console.log(name2)

    if( name2 == "dolo"){
      alert("yes it is available")
    }
    else if (name2 =="d complex"){
      alert("not available")
    }
    else{
      alert("unknow name")
    }
  }
}  
  

