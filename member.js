function skillsMember() {
  var member = document.getElementById("member");
  var memberValue = member.value;

  if (memberValue == "0") {
    document.getElementById("skills").style.display = "none";
  } else {
    document.getElementById("skills").style.display = "block";
  }
}