const h1 = document.querySelector("button");

function handTitleClick(){
   h1.classList.toggle("clicked");
   if(h1.innerText === "확인"){
    h1.innerText = "취소"
  }
  else{ 
    h1.innerText ="확인"
  }
}

h1.addEventListener("click",handTitleClick)