$('#slide_check_contact').on('change', function() {
  if ($(this).is(':checked')) { 
    $('#box_slide_check_contact').slideDown("slow");
  }
  else {
    $('#box_slide_check_contact').slideUp("slow");
  }
})  

$('#lead_contact').on('change', function() {
  if ($(this).is(':checked')) { 
    $('#box_lead_contact').slideDown("slow");
  }
  else {
    $('#box_lead_contact').slideUp("slow");
  }
})  

$('#slide_check_lead').on('change', function() {
  if ($(this).is(':checked')) { 
    $('#box_slide_check_lead').slideDown("slow");
  }
  else {
    $('#box_slide_check_lead').slideUp("slow");
  }
})


