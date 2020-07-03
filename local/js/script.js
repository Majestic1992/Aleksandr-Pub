$(document).ready(function () {
   /* ----- Stikcy nav ----- */
  
      $('.js--food').waypoint(function(direction) {
       if (direction == "down") {
          $('nav').addClass('sticky');
       } else {
          $('nav').removeClass('sticky');
       }
      }, { offset: '150px;'});


      /* ----- Button scroll ----- */

$('.js--scroll-to-reservations').click(function() {
  $('html, body').animate({scrollTop: $('.js--section-reservations').offset().top}, 1000);
    });

    /* ----- Smooth scroll ----- */
    
$(function() {
  $('a[href*="#"]').not('[href="#"]').not('[href="#0"]').click(function() {
     if (
        location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
         && 
        location.hostname == this.hostname
         ) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
        $('html, body').animate({scrollTop: target.offset().top}, 1000);
         return false;
     };
   }
   
  });
});

/* ----- Mobile nav ----- */

$('.js--nav-icon').click(function() {
   var nav = $('.js--main-menu');   
   nav.slideToggle(200);
  });
}); 

function myFunction(x) {
   x.classList.toggle("change");
 }


/* ----- Food menu ----- */

$(document).ready(function () {
   if ('#menu-all') {
      $('#menu-all').click(function() {
         $('.dish').show();                        
       }
      ,);
   }
   if ('#menu-cold') {
      $('#menu-cold').click(function() {
         $('.dish').hide();
         $('.js--cold').show();                                      
          }
         ,);
   } 
   if ('#menu-hot') {
      $('#menu-hot').click(function() {
         $('.dish').hide();
         $('.js--hot').show();                           
       }
      ,);
   } 
   if ('#menu-sp') {
      $('#menu-sp').click(function() {
         $('.dish').hide(); 
         $('.js--sp').show();
       }
      ,);
   } 
   if ('#menu-main') {
      $('#menu-main').click(function() {
         $('.dish').hide(); 
         $('.js--main').show();         
       }
      ,);
   }
   if ('#menu-veg') {
      $('#menu-veg').click(function() {
         $('.dish').hide(); 
         $('.js--veg').show();
       }
      ,);
   }
   if ('#menu-kids') {
      $('#menu-kids').click(function() {
         $('.dish').hide(); 
         $('.js--kids').show();
       }
      ,);
   }
   if ('#menu-desserts') {
      $('#menu-desserts').click(function() {
         $('.dish').hide();
         $('.js--desserts').show();
       }
      ,);
   }
});




/* ----- Drinks menu ----- */


$(document).ready(function () {
   if ('#all') {
      $('#all').click(function() {
         $('.drinks').show();                        
       }
      ,);
   }
  
   if ('#draft-beer') {
      $('#draft-beer').click(function() {
         $('.drinks').hide();
         $('.js--draft-beer').show();
       }
      ,);
   }
   if ('#bottled-beer') {
      $('#bottled-beer').click(function() {
         $('.drinks').hide();
         $('.js--bottled-beer').show();
       }
      ,);
   }
   if ('#aperetive') {
      $('#aperetive').click(function() {
         $('.drinks').hide();
         $('.js--aperetive').show();
       }
      ,);
   }
   if ('#vodka') {
      $('#vodka').click(function() {
         $('.drinks').hide();
         $('.js--vodka').show();
       }
      ,);
   }
   if ('#rum') {
      $('#rum').click(function() {
         $('.drinks').hide();
         $('.js--rum').show();
       }
      ,);
   }
   if ('#tequila') {
      $('#tequila').click(function() {
         $('.drinks').hide();
         $('.js--tequila').show();
       }
      ,);
   }
   if ('#gin') {
      $('#gin').click(function() {
         $('.drinks').hide();
         $('.js--gin').show();
       }
      ,);
   }
   if ('#whiskey') {
      $('#whiskey').click(function() {
         $('.drinks').hide();
         $('.js--whiskey').show();
       }
      ,);
   }
   if ('#cognac') {
      $('#cognac').click(function() {
         $('.drinks').hide();
         $('.js--cognac').show();
       }
      ,);
   }
   if ('#brandy') {
      $('#brandy').click(function() {
         $('.drinks').hide();
         $('.js--brandy').show();
       }
      ,);
   }
   if ('#calvados') {
      $('#calvados').click(function() {
         $('.drinks').hide();
         $('.js--calvados').show();
       }
      ,);
   }
   if ('#liquor') {
      $('#liquor').click(function() {
         $('.drinks').hide();
         $('.js--liquor').show();
       }
      ,);
   }
   if ('#cider') {
      $('#cider').click(function() {
         $('.drinks').hide();
         $('.js--cider').show();
       }
      ,);
   }
   if ('#non-alcoholic') {
      $('#non-alcoholic').click(function() {
         $('.drinks').hide();
         $('.js--non-alcoholic').show();
       }
      ,);
   }
   if ('#hot-drinks') {
      $('#hot-drinks').click(function() {
         $('.drinks').hide();
         $('.js--hot-drinks').show();
       }
      ,);
   }
   if ('#champagne') {
      $('#champagne').click(function() {
         $('.drinks').hide();
         $('.js--champagne').show();
       }
      ,);
   }
   if ('#sparkling-wine') {
      $('#sparkling-wine').click(function() {
         $('.drinks').hide();
         $('.js--sparkling-wine').show();
       }
      ,);
   }
   if ('#white-house-wine') {
      $('#white-house-wine').click(function() {
         $('.drinks').hide();
         $('.js--white-house-wine').show();
       }
      ,);
   }
   if ('#rose-house-wine') {
      $('#rose-house-wine').click(function() {
         $('.drinks').hide();
         $('.js--rose-house-wine').show();
       }
      ,);
   }
   if ('#red-house-wine') {
      $('#red-house-wine').click(function() {
         $('.drinks').hide();
         $('.js--red-house-wine').show();
       }
      ,);
   }
   if ('#white-wine') {
      $('#white-wine').click(function() {
         $('.drinks').hide();
         $('.js--white-wine').show();
       }
      ,);
   }
   if ('#red-wine') {
      $('#red-wine').click(function() {
         $('.drinks').hide();
         $('.js--red-wine').show();
       }
      ,);
   }
   if ('#cocktails') {
      $('#cocktails').click(function() {
         $('.drinks').hide();
         $('.js--cocktails').show();
       }
      ,);
   }
   if ('#shots') {
      $('#shots').click(function() {
         $('.drinks').hide();
         $('.js--shots').show();
       }
      ,);
   }
   if ('#non-alcoholic-cocktails') {
      $('#non-alcoholic-cocktails').click(function() {
         $('.drinks').hide();
         $('.js--non-alcoholic-cocktails').show();
       }
      ,);
   }
});


const instance = new Datepicker(document.getElementById("datepicker"));
instance.config({
   
     firstdate: new Date(2020, 0, 1), // 01/01/2019
   
     lastdate: new Date(2020, 11, 31) // 12/31/2019
   
   });

   instance.config({
      
        disableddays: instance => { return (instance.getDay() >= 0 && instance.getDay() < 7); }
      
      });

      instance.config({
         
           format: instance => { return (months_short[instance.getMonth()] + " " + instance.getDate()); }
         
         });
         
      
instance.getDate();
