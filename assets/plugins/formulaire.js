

 
  $("#building-select").change(function () {
    hideAllForm();
    clearForm();
    const value = $("#building-select").val();
    if (value === "Residential") {
      $("#residential-form").show();
    }  {
      hideAllForm();
    }
  });
