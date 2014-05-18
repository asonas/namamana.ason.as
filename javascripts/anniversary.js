(function() {
  $(function() {
    var anniversaryDate, days, diff, today;
    anniversaryDate = new Date(2013, 4, 18);
    today = new Date;
    diff = (today.getTime() - anniversaryDate.getTime()) / 1000;
    days = Math.floor(diff / 86400);
    $(".date").text("" + days + "日");
    return setInterval(function() {
      today = new Date;
      return $(".time").text("" + (today.getHours()) + ":" + (today.getMinutes()) + ":" + (today.getSeconds()));
    }, 1000);
  });

}).call(this);
