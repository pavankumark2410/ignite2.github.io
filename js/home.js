$(document).ready(function() {
    $("#s1").click(function() {
        $("#stage1").show();
        $("#stage2").hide();
        $("#stage3").hide();
         $("#stage4").hide();
          $("#stage5").hide();
    });
 
     $("#s2").click(function() {
        $("#stage1").hide();
        $("#stage2").show();
        $("#stage3").hide();
         $("#stage4").hide();
          $("#stage5").hide();
    });

      $("#s3").click(function() {
        $("#stage1").hide();
        $("#stage2").hide();
        $("#stage3").show();
         $("#stage4").hide();
          $("#stage5").hide();
    });
      $("#s4").click(function() {
        $("#stage1").hide();
        $("#stage2").hide();
        $("#stage3").hide();
         $("#stage4").show();
          $("#stage5").hide();
    });
      $("#s5").click(function() {
        $("#stage1").hide();
        $("#stage2").hide();
        $("#stage3").hide();
         $("#stage4").hide();
          $("#stage5").show();
    });
      $("#t1").click(function() {
        $("#type1").show();
        $("#type2").hide();
    });
      $("#t2").click(function() {
        $("#type2").show();
        $("#type1").hide();
    });
});
$(function() {
    var target = $('.bottom-content');
    if (target.length) {
        $('html,body').animate({
            scrollTop: target.offset().top
        }, 1000);
        return false;
    }
});
$(function() {
    $('a[href*=\\#]:not([href=\\#])').on('click', function() {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.substr(1) +']');
        if (target.length) {
            $('html,body').animate({
                scrollTop: target.offset().top
            }, 200);
            return false;
        }
    });
   $(document).ready(function() {
   $('.main').hide();
});
    $(function() {
  $(".main").delay(4000).fadeIn(1000);
  setTimeout(() => {  
  $('.loading-wrapper').fadeOut('fast');  
}, 4000);
});
});
