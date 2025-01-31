 // Få fat i menuen
 const menu = document.querySelector(".nav-links");

 // Definer hvor meget scroll der skal til før menuen begynder at slide op
 const slideOutPic = 100; // Juster denne værdi for at ændre punktet, hvor menuen ruller op

 // Funktion der håndterer scroll eventen
 window.addEventListener("scroll", () => {
   // Tjek om vi har scrollet forbi threshold værdien
   if (window.scrollY > slideOutPic) {
     // Tilføj transform for at slide menuen op
     menu.style.transform = "translateY(-600%)"; // Gør menuen usynlig
   } else {
     // Gør menuen synlig igen
     menu.style.transform = "translateY(0)";
   }
 });