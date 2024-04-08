function toggleMenu(){
    const menu = document.querySelector(".menu-links")
    const icon = document.querySelector(".ham-icon")
    menu.classList.toggle("open")
    icon.classList.toggle("open")
    
}

$(document).ready(function(){
    $('#select_year').on('change', function() {
    
      //If red is selected, show red, hide yellow and blue.
      if ( this.value == '0')
      {
        $("#0").show();
        $("#1").hide();
        $("#2").hide();
      }
      
       //If yellow is selected, show yellow, hide red and blue.
      if ( this.value == '1')
      {
        $("#0").hide();
        $("#1").show();
        $("#2").hide();
      }
      
      //If blue is selected, show blue hide red and yellow.
      if ( this.value == '2')
      {
        $("#0").hide();
        $("#1").hide();
        $("#2").show();
      }
      
    });
});