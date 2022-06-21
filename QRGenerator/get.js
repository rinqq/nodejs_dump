const googleAPIURL = "https://chart.googleapis.com/chart?cht=qr";

function generateQR(form) {
  var data = form.idata.value;

  var pic = `${googleAPIURL}&chl="${data}"${"&chs=200x200"}`;

  document.getElementById("qr").src = pic.replace("200x200", "200x200");
  document.getElementById("qr").style.display = "block";
}
