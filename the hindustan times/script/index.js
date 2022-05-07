const d=new Date()
      const c=d.toString()
      const a= document.getElementById("date")
      
     
     
     var f=""
     for(var i=0;i<=15;i++)
     {
          f=f+c[i]
     }
     
     var g=""
     for(let j=4;j<10;j++)
     {
       g=g+c[j]
     }
     
     const e=new Date().toLocaleTimeString([], { hour: '2-digit', minute: "2-digit", hour12: true });
      console.log(f,e,g)
     function signin(){
         window.location.href="signin.html"
     }
      
     document.querySelector("#ltext20").innerText="Published on "+" "+g+","
     document.querySelector("#ltext30").innerText=e+" "+" IST"

     document.querySelector("#ltext21").innerText="Published on "+" "+g+","
     document.querySelector("#ltext31").innerText=e+" "+" IST"

    document.querySelector("#ltext22").innerText="Published on "+" "+g+","
     document.querySelector("#ltext32").innerText=e+" "+" IST"

     document.querySelector("#ltext23").innerText="Published on "+" "+g+","
     document.querySelector("#ltext33").innerText=e+" "+" IST"

     document.querySelector("#ltext24").innerText="Published on "+" "+g+","
     document.querySelector("#ltext34").innerText=e+" "+" IST"

     document.querySelector("#ltext25").innerText="Published on "+" "+g+","
     document.querySelector("#ltext35").innerText=e+" "+" IST"

     document.querySelector("#time").innerText="Updated on "+" "+g+","+e+" "+" IST"

     document.querySelector("#head1").innerText="Updated on "+" "+g+" 2022"
     document.querySelector("#head11").innerText=e+" "+" IST"
     
     document.querySelector("#head2").innerText="Updated on "+" "+g+" 2022"
     document.querySelector("#head22").innerText=e+" "+" IST"
     document.querySelector("#head3").innerText="Updated on "+" "+g+" 2022"
     document.querySelector("#head33").innerText=e+" "+" IST"

     document.querySelector("#head4").innerText="Updated on "+" "+g+" 2022"
     document.querySelector("#head44").innerText=e+" "+" IST"
    