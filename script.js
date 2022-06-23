document.getElementById("myBtn").onclick = function () {
    location.href = "./consult.html";
};

let search = document.getElementById('searchTxt');
search.addEventListener("input",function(){
  let inputVal = search.value.toLowerCase();
  let notesCard = document.getElementsByClassName('noteCard');
  Array.from(notesCard).forEach(function(element){
    let cardTxt = element.getElementsByTagName("h2")[0].innerText;
    if(cardTxt.includes(inputVal)){
      element.style.display = "block";
    }
    else{
      element.style.display = "none";
    }
  })
})