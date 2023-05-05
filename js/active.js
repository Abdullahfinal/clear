

let input1 = document.getElementById("input1");
let input2 = document.getElementById("input2");
let input3 = document.getElementById("input3");


let input4 = document.getElementById("input4");
let input5 = document.getElementById("input5");
let input6 = document.getElementById("input6");
let input7 = document.getElementById("input7");



let diman =document.URL;

let filename = diman.split("/");

let file =filename[filename.length - 1] ;

if(file   ==  "index.html"){

    input1.classList.add("active");



}else if(file == "clearprived.html"){

    input2.classList.add("active");

    
}else if(file == "clrearPuolic.html"){

    input3.classList.add("active");


}else if(file == "info.html"){

    input4.classList.add("active");


}else if(file == "news.html"){

    input5.classList.add("active");


}else if(file == "openstreetMap.html"){

    input6.classList.add("active");


}else{

    console.log("url is not ");
}



console.log(diman);










let icon =document.getElementById("icon");


$("#icon").click(function(){

    $(".div_list_ms").toggle();
})

