function calculate() {
    let a =parseInt(document.getElementById("Number").value);
    localStorage.setItem("number", a)
    localStorage.getItem("number")
    let total=calculatepeople(a);
    document.getElementById("result").innerHTML ="People per course:" +total;
  }
  function calculatepeople(n){
    return n+2;
  }

  function loadDoc(){
      var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function (){
          if(this.readyState == 4 && this.status == 200){
              document.getElementById("demo").innerHTML =
              this.responseText;
          }
      };
      xhttp.open("GET","info.txt", true);
      xhttp.send();
  }

  function localrem() {
      localStorage.removeItem("number")
  }