// Lista base adaptada al tema Series
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

// Genera comparación A/B aleatoria
function getRandomPair() {
    let first = Math.floor(Math.random() * series.length);
    let second;

    do {
        second = Math.floor(Math.random() * series.length);
    } while (second === first);

    currentPair = [first, second];

    document.getElementById("optionA").innerText = series[first].name;
    document.getElementById("optionB").innerText = series[second].name;
}

// Usuario vota
function vote(choice) {
    let selectedIndex = currentPair[choice];
    series[selectedIndex].score++;

    updateRanking();
    getRandomPair();
}

// Ordena y muestra ranking
function updateRanking() {
    let sortedSeries = [...series].sort((a, b) => b.score - a.score);

    let rankingHTML = "<h2>🔥 Ranking Actual</h2><ol>";

    sortedSeries.forEach(item => {
        rankingHTML += `<li>${item.name} — ${item.score} votos</li>`;
    });

    rankingHTML += "</ol>";

    document.getElementById("ranking").innerHTML = rankingHTML;
}

// Inicializa primera comparación
getRandomPair();
