//window.alert("hello js")
function clock(){
    let date = new Date();
    console.log(date);
    let i=date.toLocaleTimeString('en-us',{
        timeZone:'Asia/Kolkata',
 } )
 let c = date.toLocaleTimeString('en-us',{
    timeZone:'Asia/Shanghai',
 })
 let a = date.toLocaleTimeString('en-us',{
    timeZone:'America/Los_Angeles',
 })
 
 
 console.log(i,c,a);
 document.getElementById('ind').innerHTML=i;
 document.getElementById('chi').innerHTML=c;
 document.getElementById('ame').innerHTML=a;

}
clock();
setInterval(clock,1000);