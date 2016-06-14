var g = G$("john", "doe");

g.greet().setLang("es").greet(true).setLang("en").log();

$("#login").click(() => {
  var loginGrtr = G$("John", "Doe");

  $("#logindiv").hide();

  loginGrtr.setLang($("#lang").val()).HTMLGreeting("#greeting", true).log();
});
