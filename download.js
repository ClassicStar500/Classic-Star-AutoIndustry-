function downloadRecord() {

    const card = document.getElementById("result");

    html2canvas(card, {
        scale: 3,
        backgroundColor: "#ffffff",
        useCORS: true
    }).then(canvas => {

        const image = canvas.toDataURL("image/png");

        const link = document.createElement("a");

        link.href = image;

        link.download = "Classic_Star_Record.png";

        link.click();

    });

}

document.getElementById("downloadBtn")
.addEventListener("click", downloadRecord);