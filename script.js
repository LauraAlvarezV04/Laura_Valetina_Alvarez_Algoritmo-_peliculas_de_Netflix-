document.addEventListener("DOMContentLoaded", function () {

    let series = [
        { name: "Stranger Things", score: 0 },
        { name: "Wednesday", score: 0 },
        { name: "La Casa de Papel", score: 0 },
        { name: "The Witcher", score: 0 },
        { name: "Bridgerton", score: 0 },
        { name: "Squid Game", score: 0 },
        { name: "The Crown", score: 0 },
        { name: "Lupin", score: 0 }
    ];

    let currentPair = [];

    function getRandomPair() {
        let first = Math.floor(Math.random() * series.length);
        let second;

        do {
            second = Math.floor(Math.random() * series.length);
        } while (second === first);

        currentPair = [first, second];

        document.getElementById("optionA").textContent = series[first].name;
        document.getElementById("optionB").textContent = series[second].name;
    }

    function vote(index) {
        let selected = currentPair[index];
        series[selected].score++;

        updateRanking();
        getRandomPair();
    }

    function updateRanking() {
        let sorted = [...series].sort((a, b) => b.score - a.score);

        let html = "<h2>🔥 Ranking Actual</h2><ol>";

        sorted.forEach(item => {
            html += `<li>${item.name} — ${item.score} votos</li>`;
        });

        html += "</ol>";

        document.getElementById("ranking").innerHTML = html;
    }

    document.getElementById("optionA").addEventListener("click", function () {
        vote(0);
    });

    document.getElementById("optionB").addEventListener("click", function () {
        vote(1);
    });

    getRandomPair();
});
