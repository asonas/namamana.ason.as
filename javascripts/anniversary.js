(function() {
  $(function() {
    var anniversaryDate, diff, today;
    anniversaryDate = new Date(2013, 4, 18);
    today = new Date;
    diff = (today.getTime() - anniversaryDate.getTime()) / 1000;
    console.log(diff);
    diff = diff / 86400;
    console.log(diff);
    return $(".date").text("" + (Math.floor(diff)) + "日");
  });

}).call(this);
