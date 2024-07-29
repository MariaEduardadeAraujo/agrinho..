// script.js

// Variáveis globais
let money = 100;
let crops = [];

// Função para plantar uma cultura
function plantCrop(type) {
    if (money >= 10) {
        money -= 10;
        crops.push({ type: type, growth: 0 });
        updateUI();
    } else {
        alert("Você não tem dinheiro suficiente!");
    }
}

// Função para simular o crescimento das culturas
function simulateGrowth() {
    crops.forEach(crop => {
        crop.growth += Math.random() * 10;
    });
    updateUI();
}

// Função para colher as culturas maduras
function harvestCrops() {
    let harvestIncome = 0;
    crops = crops.filter(crop => {
        if (crop.growth >= 100) {
            harvestIncome += 20; // Preço fixo para cada colheita
            return false; // Remove a cultura do array
        }
        return true; // Mantém a cultura no array
    });
    money += harvestIncome;
    updateUI();
}

// Função para atualizar a interface do usuário com os dados atuais
function updateUI() {
    document.getElementById('money').innerText = `Dinheiro: $${money}`;
    document.getElementById('crops').innerHTML = "";
    crops.forEach((crop, index) => {
        let cropElem = document.createElement('li');
        cropElem.innerText = `Cultura ${index + 1}: ${crop.type} (${crop.growth.toFixed(2)}% concluído)`;
        document.getElementById('crops').appendChild(cropElem);
    });
}

// Inicialização
updateUI();
setInterval(simulateGrowth, 2000); // A cada 2 segundos, simula crescimento das culturas

