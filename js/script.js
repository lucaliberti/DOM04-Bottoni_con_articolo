const btns_nodeLst  = document.querySelectorAll(".tab-btn");      // Nodelist
const btns_arr=Array.from( btns_nodeLst  )  
const contents_NodeLst = document.querySelectorAll(".content");
const contents_arr = Array.from(contents_NodeLst);


 

function evidenziaBottone (e) { 
  console.log("Evidenzio bottone " + e.target.id)
  
  for (let i=0; i<btns_arr.length ; i++) {
      btns_arr[i].classList.remove("activeButtonClass");  
  }
  e.target.classList.add("activeButtonClass");
  id=Number(e.target.id);
   
  for (let i=0; i<contents_arr.length ; i++) {
    contents_arr[i].classList.remove("active");  
  }
  contents_arr[id].classList.add("active");
}



btns_arr[0].addEventListener("click", evidenziaBottone )
btns_arr[1].addEventListener("click", evidenziaBottone )
btns_arr[2].addEventListener("click", evidenziaBottone )


/*
btns_arr.forEach(  
        (btn) => { btn.addEventListener("click", evidenziaBottone )  } 
)
*/