$(document).ready(function() {
  $("form#info").submit(function(event) {
    event.preventDefault();
    const name1Input = $("input#name1").val();
    const address1Input = $("input#address1").val();
    const address2Input= $("input#address2").val();
    const deliveryInput = $("#delivery").val();
    const radioInput = $("input:radio[name=size]:checked").val();
    const colorInput = $("#color").val();
    const shippingInput = $("#shipping").val();

    $(".name1").text(name1Input);
    $(".address1").text(address1Input);
    $(".address2").text(address2Input);
    $(".delivery").text(deliveryInput);
    $(".radio").text(radioInput);
    $(".color").text(colorInput);
    $(".shipping").text(shippingInput);

    $(".receipt").show();
    $("form#info").hide();
  });
});