
var buton   = document.querySelectorAll(".drum").length;//drum class lı elementlerin adet uzunluğunu buton değişkenine atatım
for (var i =0;  i<buton; i++) {//for döngüsüylede kaç tane buton atandıysa hepsine ulaşıp 
    document.querySelectorAll(".drum")[i].addEventListener("click", function (){//drum clas lı elementlere tıklandığında fonksiyonun çalışmasını sağladım
   
        var butonlar    =   this.innerHTML;//butonlar isimli bir değişken oluşturup buna html elementinin içindeki harfi atadım
        ses(butonlar);
        tAnimation(butonlar);
           
            }); 
        }
          
   document.addEventListener("keydown", function(event){//drum clas lı elementlere klavyeden bir tuşa basıldığında fonksiyonun çalışmasını sağladım
        ses(event.key);//event.key ile klavyeden haangi tuşa basıldığını döndürür. ve ses fonksiyonuna bu parametreyi ekler 
        tAnimation(event.key);//burda da tAnimation fonksiyonuna basılan klavyetuşunun parametre olarak eklenmesi sağlandı
   });

   function ses(key){//key parametresine key.event özelliği atanarak hangi klavye tuşuna basdığımızın görülmesi sağlandı

    switch (key){//switch döngüsüyle de  basılan klavye tuşlarının case lerde belirtilen harfler olması durumunda bir ses değişkeni oluşturularak o sesin aktif hale gelmesini sağladım
        case "w":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        case "a":
            var tom2 = new Audio('sounds/tom-2.mp3');
            tom2.play();
            break;
        case "s":
            var tom3 = new Audio('sounds/tom-3.mp3');
            tom3.play();
            break;
        case "d":
            var tom4 = new Audio('sounds/tom-4.mp3');
            tom4.play();
            break;    
        case "j":
            var snare = new Audio('sounds/snare.mp3');
            snare.play();
            break;  
        case "k":
            var crash = new Audio('sounds/crash.mp3');
            crash.play();
            break;   
        case "l":
                var kick = new Audio('sounds/kick-bass.mp3');
                kick.play();
                break; 
        default: console.log(key);//işlem yapılmış harflerden başka bir harfe basılırsa sadece consol da görünmesini sağladım   
        } 
   } 


   function tAnimation(tus){//tAnimation isimli fonksiyonu oluşturdum
    var aktif = document.querySelector("."+tus);//harflere atadığımız harf class larını aktif deiğişkenine atadım

    aktif.classList.add("pressed");//tıklanana tuş harf class lı elementi aktif eder ve buna harici css de yazdığımız pressed class ının atanmasını sağlar
    setTimeout(function(){
        aktif.classList.remove("pressed");//tuşa basıldıktan 61 salise sonra pressed class ı elementten kaldırılır.
    },61);

   }
   
   
   
        
   

