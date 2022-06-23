document.getElementsByClassName("appoint").onclick = function () {
    location.href = "./appoint.html";
};

let search = document.getElementById('searchTxt');
search.addEventListener("input",function(){
  let inputVal = search.value.toLowerCase();
  let notesCard = document.getElementsByClassName('notecard');
  Array.from(notesCard).forEach(function(element){
    let cardTxt = element.getElementsByTagName("p")[0].innerText;
    if(cardTxt.includes(inputVal)){
      element.style.display = "block";
    }
    else{
      element.style.display = "none";
    }
  })
})