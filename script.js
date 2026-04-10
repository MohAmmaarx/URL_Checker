function checkURL() {
    let url = document.getElementById("urlInput").value;

    if (url.trim() == "") {
        alert("🚨 Please Enter The URL");
        return;
    }

    let score = 0;

    if (url.length > 75)
        score++;

    if (!url.startsWith("https://"))
        score++;

    if (url.includes("@"))
        score++;

    let words = ["login", "verify", "bank", "secure", "update"];

    for (i in words){
        if(url.toLowerCase().includes(i))
            score++;
    }

    let safeSites = ["youtube.com", "google.com", "facebook.com", "wikipedia.org"];

    for (let s of safeSites) {
        if (url.includes(s)) {
            score = 0;
        }
    }

    let result = document.getElementById("result");

    if (score >= 2){
        result.textContent = "⚠️ SUSPICIOUS / PHISHING";
        result.style.color = "#D4334B";

    }else {
        result.textContent = "🟢 SAFE / NOT PHISING";
        result.style.color = "#33D491";
    }
}