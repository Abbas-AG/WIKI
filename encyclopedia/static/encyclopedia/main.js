$(document).ready(() => {

  /* Bootstrap Modal */
  $('#deletion_modal').modal('show')

  /* Bootstrap Alert */
  setTimeout(function () {
    // Close alert popup
    $("#alert_message").alert("close");
  }, 2500);

  
  const bes = $('#base_entry_content');
  if (bes !== undefined || bes !== "undefined") {
    try {
      const start = bes.offset().top;
      $('#base_entry_section').scroll(function () {
        const nb = $('#entry_navbar');
        if (bes.offset().top !== start) {
          $(nb).css({ "box-shadow": "0px 2px 10px rgba(0,0,0,.5)" });
        } else {
          $(nb).css({ "box-shadow": "none" });
        }
      })
    } catch{ null }
  }

  
  const sidebar_btn = $('#sidebar_btn')
  if (sidebar_btn !== undefined || sidebar_btn !== "undefined") {
  
    const SB = document.querySelector('#sidebar_btn')
    const sbd = getComputedStyle(SB)
    if (sbd && sbd.display === "none") {
      $('#sidebar_nav_menu').removeClass('collapse').addClass('expanded');
    } else {
      $('#sidebar_nav_menu').removeClass('expanded').addClass('collapse');
    }
  }
})