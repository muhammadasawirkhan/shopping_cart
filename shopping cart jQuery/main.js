$(document).ready(function () {
  let productsOuter = $(".productOuter");
  let priceValue = $(".priceValue").text();
  let dropText = $("<p>")
  dropText.addClass("dropSite");
  let itemCount = 0;

  productsOuter.draggable({
    helper: "clone",
    start: function () {
      content = $(this).find(".priceValue");
      // alert(content.text());
    },
  });

  let orderList = $(".orderList");
  let checkList = $(".totalPrice");
  let total = "";
  orderList.droppable({
    accept: ".productOuter",
    drop: function (event, ui) {
      var droppedItem = $(ui.draggable).clone();
      $(this).append(droppedItem);
      let cartsum = content.text();
      if (total != "") {
        total += "+" + cartsum;
      } else {
          total += cartsum;
      }
      checkList.html(total);
      $(".dropSite").hide();
      itemCount++;
      $(".itemsCount").text(itemCount);
      dropText.text("");
    }
  });

  let btnSection = $(".btnSection");

  let btnCheckout = $("<button/>").text("Check Out");
  btnCheckout.attr("class","btnCheckOut").css({"margin":"5px"});
  btnSection.append(btnCheckout);

  let btnClear = $("<button/>").text("Clear");
  btnClear.attr("class","btnClear").css({"margin":"5px"});
  btnSection.append(btnClear);

 

  btnCheckout.click(function(){
      result = (eval(total));
      $(".sumValue").text("$" + result);
  });

  btnClear.click(function(){
    orderList.html("");
    $(".itemsCount").text("");
    itemCount = 0;
    total = "";
    checkList.text("");
    $(".sumValue").text("");
    dropText.text("Drop Products Here");
    orderList.append(dropText);  
  });
});
