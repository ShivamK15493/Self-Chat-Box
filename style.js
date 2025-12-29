let message;
let innermsg;

let dataa = document.getElementById("sen");

dataa.addEventListener("click",function()
   {
             message = document.getElementById("val").value;
             innermsg= document.getElementById("up");
             
         try
           {
               if (message === "")
               {
                   throw "Please enter the field";
               }
                else
               {
                     innermsg.innerHTML +=`<div class="mm">${message}<br></div>`;
                     document.getElementById("err").innerText="";
               }
         } 
         catch (error)
         {
             document.getElementById("err").innerText = error;
         }
   })

   let clean = document.getElementById("cl");
   clean.addEventListener("click", function()
      {
         location.reload(); 

      })