function backgroundColor(){
    
	        var xhttp = new XMLHttpRequest();
             xhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementsByTagName("body")[0].style.backgroundColor =
                    this.responseText;
            }
        };
        xhttp.open("GET", "scripts/ajax_get_random_color.php", true);
        xhttp.send();
		 
}

function timeAjax() 
{     
    
      	var myDate;
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
					myDate=new Date( this.responseText *1000);
					document.getElementById("asideR2").style.background =                  "linear-gradient(158deg, white , white ,rgba(121, 143, 181, 0.71))";                 
                document.getElementById("asideR2").innerHTML =
				myDate.toGMTString()+"<br>"+myDate.toLocaleString();
            }
        };
        xhttp.open("GET", "scripts/ajax_get_time.php", true);
        xhttp.send();
}
function getPic(){
 var id = event.srcElement.id;
 if(id =="computers"){
     
     document.getElementById("asideR2").innerHTML =" ";
   document.getElementById("asideR2").style.backgroundImage =                  "url('1.jpg')";                 
 }
 if(id =="trip"){
       document.getElementById("asideR2").innerHTML =" ";
     document.getElementById("asideR2").style.backgroundImage =                  "url('23.jpg')"; 
 }
 if(id =="swimming"){
       document.getElementById("asideR2").innerHTML =" ";
       document.getElementById("asideR2").style.backgroundImage =                  "url('26.jpeg')"; 
 }
}


