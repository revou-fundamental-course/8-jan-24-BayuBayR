function calculate() {
  var sideLength = parseFloat(document.getElementById("sideLength").value);

  if (isNaN(sideLength)) {
    alert("data input tidak ada");
    return;
  } else if (sideLength <= 0) {
    alert("Input tidak boleh kurang dari 0");
  }

  var calculation = document.querySelector('input[name="calculationType"]:checked').value;
  var luas, keliling;

  if (calculation === "luas") {
    luas = sideLength * sideLength;
    keliling = null;
  } else {
    keliling = 4 * sideLength;
    luas = null;
  }

  var resultElement = document.getElementById("result");
  var resultHTML = `<p>Sisi = ${sideLength}</p>`;
  
  if (calculation === "luas") {
    resultHTML += `<p>Luas = ${sideLength} x ${sideLength} = ${luas}</p>`;
  } else {
    resultHTML += `<p>Keliling = 4 x ${sideLength} = ${keliling}</p>`;
  }

  resultElement.innerHTML = resultHTML;
}
