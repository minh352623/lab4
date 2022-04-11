$(document).ready(function() {
    var d = new Date();
    var ads =
        "Khách hàng có ngày sinh trong tháng " +
        d.getMonth() +
        " sẽ được tặng 2 phần sữa chua dâu cho đơn hàng đầu tiên trong tháng.";

    $("footer").append(
        "<div id='adscontainer'><span id='adstext'><h2>" +
        ads +
        "</h2></span></div>"
    );
    window.onload = showAds;
    window.onresize = function() {
        location.reload();
    };
});

function showAds() {
    var W = ($(window).width() - $("main").width()) / 2;

    if (W >= 200) {
        adsVerEffect();
    } else {
        adsHorEffect();
    }
}

function adsVerEffect() {
    $("#adscontainer").addClass("adsvercontainer container");
    $("#adscontainer").css(
        "width",
        ($(window).width() - $("main").width()) / 2
    );

    $("#adstext").addClass("adsvertext adstext");
    $("#adstext").css("top", $("#adscontainer").height());
    $("#adstext").animate({
            top: "-=" + ($("#adscontainer").height() + $("#adstext").height()),
        },
        30000,
        function() {
            adsVerEffect();
        }
    );
}

function adsHorEffect() {   
    $("#adscontainer").addClass("adshorcontainer container");
    $("#adscontainer").css("left", $("main").position().left);
    $("#adscontainer").css("width", $("main").width());

    $("#adstext").addClass("adshortext adstext");
    $("#adstext").css("left", $("#adscontainer").width());
    $(
        "#adstext").animate({
            left: "-=" + ($("#adscontainer").width() + $("#adstext").width()),
        },
        30000,
        function() {
            adsHorEffect();
        }
    );
}
// 
$(document).ready(function () {
    var headlineContent = [
      {
        title: "Bánh flan sữa chua - sự kết hợp hoàn hảo",
        photo: "data/images/trangchu/headline/headline1.jpg",
      },
  
      {
        title: "Sữa chua làm từ sữa dê - đậm đà hương vị khó quên",
        photo: "data/images/trangchu/headline/headline2.jpg",
      },
  
      {
        title: "Thưởng thức sữa chua theo cách của bạn",
        photo: "data/images/trangchu/headline/headline3.jpg",
      },
    ];
  
    for (var i = 0; i < headlineContent.length; i++) {
      var item = headlineContent[i];
      var dc = $("<div>");
      $("<span><h3>" + item.title + "</h3></span>").appendTo(dc);
      $("<img src='" + item.photo + "'/>").appendTo(dc);
      $("#headline").append(dc);
      if(i > 0) dc.hide();
    }
  
  
    setInterval(function () {
      $("#headline > div:first")
        .hide()
        .next()
        .fadeIn(1000)
        .end()
        .appendTo("#headline");
    }, 5000);
    
  });
  