

let maps =document.getElementById("maps");

let url_map = document.URL ;

let map_url=url_map.split("?");

console.log(map_url[map_url.length - 1 ]);

let mapings = map_url[map_url.length - 1 ];

if(mapings == "get"){


    maps_now();



}else{

    maps.innerHTML=' <iframe width="100%" height="100%" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://www.openstreetmap.org/export/embed.html?bbox=31.353564360182954%2C31.02142099938974%2C31.4063073182518%2C31.046830767845503&amp;layer=hot" style="border: 1px solid black"></iframe>';
}








function maps_now(){


    setInterval(()=>{

    
        console.log("hi khaled");

        // api links 
        maps_now2();
    

    },
    5000)

}

function maps_now2(){


    setInterval(()=>{

    
      
        location.reload();

    },
    12000)

}




