fetch("pages/home/home-card.html")
    .then(response => {
        return response.text()
    }).then(data => {
        document.getElementById("home").innerHTML = data;
    });

    fetch("pages/about/about.html")
    .then(response => {
        return response.text()
    }).then(data => {
        document.getElementById("about").innerHTML = data;
    });