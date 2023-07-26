const butDelet = document.querySelectorAll('.bntDelete');
//delete
butDelet.forEach(button =>{
    button.addEventListener('click',async ()=>{
        const itemId = button.getAttribute('data-id');
        try{
            const response = await axios.delete(`/Delete/${itemId}`);
            console.log(response.data.message);
            location.reload();
        }catch(err){
            console.log(err);
        };
    });
});


//post function anchor
document.addEventListener("DOMContentLoaded", () => {
    const anchor = window.location.hash;
    if (anchor) {
      const element = document.querySelector(anchor);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  });


//accordion
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });

  var panel = acc[i].nextElementSibling;
  var panelState = localStorage.getItem(panel.id);
  if (panelState === "open") {
    panel.style.display = "block";
    acc[i].classList.add("active");
  } else {
    panel.style.display = "none";
    acc[i].classList.remove("active");
  }
}

window.addEventListener("beforeunload", function() {
  for (i = 0; i < acc.length; i++) {
    var panel = acc[i].nextElementSibling;
    var panelState = panel.style.display === "block" ? "open" : "closed";
    localStorage.setItem(panel.id, panelState);
  }
});