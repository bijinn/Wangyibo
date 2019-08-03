var m=1;
function wangyibo(){
	var as=document.getElementById("a");
	var b=document.createElement("table");
    a.style="margin-left:25%";
	as.appendChild(b);
	for (var i = 0; i < 3; i++) {
		var c=document.createElement("tr");
		b.appendChild(c);
		for (var j = 0; j < 3; j++) {
			var d=document.createElement("td");
			c.appendChild(d);
			var e=document.createElement("img");
			e.style="width:350px;height:350px;";
			d.appendChild(e);
		   
			e.src="IMG/"+m+".jpg";
				m++;
			
		}
		
	}
	

	
	
	
}
