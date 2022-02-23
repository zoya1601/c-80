x=[];
function a(){
    var z=[];
    for(var j=1;j<=4;j++){
        var y=document.getElementById("i"+j).value;
        console.log(y);
        x.push(y); 
    }
    console.log(x);
 var l=x.length;
 console.log(l);
for(var k=0;k<l;k++){
z.push("<h4>NAME - "+ x[k] + "</h4>");
console.log(z);
}
var rc=z.join(" ");
console.log(rc);
document.getElementById("nc").innerHTML=rc;


   document.getElementById("ab").innerHTML=z;
   document.getElementById("bsubt").style.display="none";
   document.getElementById("cd").style.display="inline-block";
}
function b(){
    x.sort();
    console.log(x);
    var z1=[];
    var l=x.length;
    console.log(l);
    for(var k=0;k<l;k++){
        z1.push("<h4>NAME - "+ x[k] + "</h4>");
        console.log(z1);
        }
        var r1=z1.join(" ");
console.log(r1);
document.getElementById("nc").innerHTML=r1;
}