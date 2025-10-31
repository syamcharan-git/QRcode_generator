let qr;

function generateQR() {
  const text = document.getElementById("text").value.trim();
  const qrContainer = document.getElementById("qrcode");
  const downloadLink = document.getElementById("download");

  if (!text) {
    alert("Please enter text or URL!");
    return;
  }

  qrContainer.innerHTML = ""; // Clear previous QR

  qr = new QRCode(qrContainer, {
    text: text,
    width: 200,
    height: 200,
    colorDark: "#003f5c",
    colorLight: "#ffffff",
    correctLevel: QRCode.CorrectLevel.H
  });

  // Wait for QR to render before enabling download
  setTimeout(() => {
    const img = qrContainer.querySelector("img") || qrContainer.querySelector("canvas");
    if (img) {
      downloadLink.href = img.src;
      downloadLink.style.display = "inline-block";
    }
  }, 500);
}
