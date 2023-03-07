

let gauche = document.querySelector(".box_gauche");
let droite = document.querySelector(".box_droite");
let btg=document.querySelector("#gauche");
let btd=document.querySelector("#droite");


function desactive()
{
   if (!droite.hasChildNodes()) 
   {
      btd.disabled = true;
   }
   else
   {
      btd.disabled = false;
   }
   if (!gauche.hasChildNodes())
   {
      btg.disabled = true;
   }
   else
   {
      btg.disabled = false;
   }
}

setInterval(desactive,100);

function active (paragraph) 
{
      paragraph.addEventListener("mouseover", function()
      {
         let p=document.getElementsByClassName("para");
         for (let j = 0; j < p.length; j++) 
         {
         p[j].classList.remove("active");
         }
         paragraph.classList.add("active");
      })
   
}

function generer() 
{
   let array = ["Mon premier", "Mon deuxieme" , "Mon troixieme", "Mon quatrieme"];

   for (let i = 0; i < array.length; i++)
   {
      let  paragraph = document.createElement("p");
      paragraph.innerHTML = array[i];
      gauche.appendChild(paragraph);
      paragraph.classList.add("para");
      active(paragraph);
      
   } 
}
generer() ;

function move(selector , side) 
{
   selector.addEventListener('click', function()
 {
   let select=document.querySelector(".active");
   side.appendChild(select);
   desactive();
})
}

move(btg, droite);
move(btd, gauche);



desactive();

