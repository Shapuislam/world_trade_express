
//foottersliderjs
var swiper = new Swiper('.swiper-container', {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});


// sliderjs
 var carouselContainer = $('.carousel');
   var slideInterval = 5000;

function toggleH(){
    $('.toggleHeading').hide()
    var caption = carouselContainer.find('.active').find('.toggleHeading').addClass('animated fadeInRight').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',
        function (){
        $(this).removeClass('animated fadeInRight')});
caption.slideToggle();
}

function toggleC(){
    $('.toggleCaption').hide()
    var caption = carouselContainer.find('.active').find('.toggleCaption').addClass('animated fadeInUp').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',
        function (){
        $(this).removeClass('animated fadeInUp')
});
caption.slideToggle();
}
  carouselContainer.carousel({
  interval: slideInterval, cycle: true, pause: "hover"})
 .on('slide.bs.carousel slid.bs.carousel', toggleH).trigger('slide.bs.carousel')
 .on('slide.bs.carousel slid.bs.carousel', toggleC).trigger('slide.bs.carousel');



 /*--
    Menu Stick
    -----------------------------------*/
    var header = $('.sticker');
    var win = $(window);
    
    win.on('scroll', function() {
        var scroll = win.scrollTop();
        if (scroll < 20) {
            header.removeClass('stick');
        } else {
            header.addClass('stick');
        }
    });
    
 

// ===== Scroll to Top ==== 
$(window).scroll(function() {
    if ($(this).scrollTop() >= 50) {        // If page is scrolled more than 50px
        $('#return-to-top').fadeIn(200);    // Fade in the arrow
    } else {
        $('#return-to-top').fadeOut(200);   // Else fade out the arrow
    }
});
$('#return-to-top').click(function() {      // When arrow is clicked
    $('body,html').animate({
        scrollTop : 0                       // Scroll to top of body
    }, 500);
});

//datepickerjs
$(document).ready(function(){
    var date_input=$('input[name="date"]'); //our date input has the name "date"
    var container=$('.bootstrap-iso form').length>0 ? $('.bootstrap-iso form').parent() : "body";
    date_input.datepicker({
        format: 'mm/dd/yyyy',
        container: container,
        todayHighlight: true,
        autoclose: true,
    })
})


//data table js
$(document).ready(function() {
    $('#example').DataTable( {
        "scrollX": true,
        "dom": "<'row'<'col-md-6 col-sm-3 col-xs-3'l><'col-md-6 col-sm-9 col-xs-9'<'ordertablemain_wrap'>f>>" +
               "<'row'<'col-sm-12'tr>>" +
               "<'row'<'col-sm-5'i><'col-sm-7'p>>",
        "columnDefs": [ {

              "targets": [0], // column or columns numbers

              "orderable": false,  // set orderable for selected columns

              }],
        "order": [[ 0, "false" ]],
        "order": [[ 7, "desc" ]]
    } );

    $('.ordertablemain_wrap').append( $('.ordertablemain') );

} );

$(document).ready(function() {
    $('#payment').DataTable( {
        "scrollX": true,
        "dom": "<'row'<'col-md-12 col-sm-12 col-xs-12'l>>" +
               "<'row'<'col-sm-12'tr>>" +
               "<'row'<'col-sm-5'i><'col-sm-7'p>>",
        "order": [[ 9, "desc" ]]
    } );

} );

$(document).ready(function() {
    $('#ticket_table').DataTable( {
        "scrollX": true,
        "dom": "<'row'<'col-md-6 col-sm-3 col-xs-3'l><'col-md-6 col-sm-9 col-xs-9'f>>" +
               "<'row'<'col-sm-12'tr>>" +
               "<'row'<'col-sm-5'i><'col-sm-7'p>>",
        "order": [[ 0, "desc" ]]
    } );

} );

$(document).ready(function() {
    $('#paymentlog').DataTable( {
        "scrollX": true,
        "dom": "<'row'<'col-md-12 col-sm-12 col-xs-12'l>>" +
               "<'row'<'col-sm-12'tr>>" +
               "<'row'<'col-sm-5'i><'col-sm-7'p>>",
        "order": [[ 3, "desc" ]]
    } );

} );

$(document).ready(function() {
    $('#log').DataTable( {
        "scrollX": true,
        "dom": "<'row'<'col-md-12 col-sm-12 col-xs-12'l>>" +
               "<'row'<'col-sm-12'tr>>" +
               "<'row'<'col-sm-5'i><'col-sm-7'p>>",
        "order": [[ 5, "desc" ]]
    } );

} );

$(document).ready(function() {
    $('#Number').DataTable( {
        "scrollX": true,
        "dom": "<'row'<'col-md-6 col-sm-3 col-xs-3'l><'col-md-6 col-sm-9 col-xs-9'f>>" +
               "<'row'<'col-sm-12'tr>>" +
               "<'row'<'col-sm-5'i><'col-sm-7'p>>",
               "columnDefs": [ {

              "targets": [2], // column or columns numbers

              "orderable": false,  // set orderable for selected columns

              }],
        "order": [[ 2, "false" ]],
        "order": [[ 0, "desc" ]]
    } );

} );

$(document).ready(function() {
    $('#package').DataTable( {
        "scrollX": true,
        "dom": "<'row'<'col-sm-12'tr>>",
               "columnDefs": [ {

              "targets": [0,1,2,3,4,5], // column or columns numbers

              "orderable": false,  // set orderable for selected columns

              }],
        "order": [[ 0,1,2,3,4, "false" ]]
    } );

} );

$(document).ready(function() {
    $('#accountdetails').DataTable( {
        "scrollX": true,
        "dom": "<'row'<'col-sm-12'tr>>",
        "order": [[ 3, "desc" ]]
    } );

} );

$(document).ready(function() {
    $('#accountdetails_top').DataTable( {
        "scrollX": false
    } );

} );



//radiobuttonjs
$(document).ready(function () 
 { 
  $("#watch-me").click(function()
  {
    $("#show-me:hidden").show('slow');
   $("#show-me-two").hide();
   $("#show-me-three").hide();
   });
   $("#watch-me").click(function()
  {
    if($('watch-me').prop('checked')===false)
   {
    $('#show-me').hide();
   }
  });
  
  
  
  
  
  
  $("#see-me").click(function()
  {
    $("#show-me-two:hidden").show('slow');
   $("#show-me").hide();
   $("#show-me-three").hide();
   });
   $("#see-me").click(function()
  {
    if($('see-me-two').prop('checked')===false)
   {
    $('#show-me-two').hide();
   }
  });
  
  
  
  
  
  
  
  $("#look-me").click(function()
  {
    $("#show-me-three:hidden").show('slow');
   $("#show-me").hide();
   $("#show-me-two").hide();
   });
   $("#look-me").click(function()
  {
    if($('see-me-three').prop('checked')===false)
   {
    $('#show-me-three').hide();
   }
  });
  
 });

//file input

$(document).on('click', '#close-preview', function(){ 
    $('.image-preview').popover('hide');
    // Hover befor close the preview
    $('.image-preview').hover(
        function () {
           $('.image-preview').popover('show');
        }, 
         function () {
           $('.image-preview').popover('hide');
        }
    );    
});

$(function() {
    // Create the close button
    var closebtn = $('<button/>', {
        type:"button",
        text: 'x',
        id: 'close-preview',
        style: 'font-size: initial;',
    });
    closebtn.attr("class","close pull-right");
    // Set the popover default content
    $('.image-preview').popover({
        trigger:'manual',
        html:true,
        title: "<strong>Preview</strong>"+$(closebtn)[0].outerHTML,
        content: "There's no image",
        placement:'bottom'
    });
    // Clear event
    $('.image-preview-clear').click(function(){
        $('.image-preview').attr("data-content","").popover('hide');
        $('.image-preview-filename').val("");
        $('.image-preview-clear').hide();
        $('.image-preview-input input:file').val("");
        $(".image-preview-input-title").text("Browse"); 
    }); 
    // Create the preview image
    $(".image-preview-input input:file").change(function (){     
        var img = $('<img/>', {
            id: 'dynamic',
            width:250,
            height:200
        });      
        var file = this.files[0];
        var reader = new FileReader();
        // Set preview image into the popover data-content
        reader.onload = function (e) {
            $(".image-preview-input-title").text("Change");
            $(".image-preview-clear").show();
            $(".image-preview-filename").val(file.name);            
            img.attr('src', e.target.result);
            $(".image-preview").attr("data-content",$(img)[0].outerHTML).popover("show");
        }        
        reader.readAsDataURL(file);
    });  
});