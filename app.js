/* 1. Ilk olarak inex.html sayfamizi olusturduk...
2. section ve div lerle pilimizin olusturduk.
3. style.css sayfamizi acarak html sayfamizi sekillendirdik.
4. apps.js sayfasinda da pilin fonksiyon ve hareketli yapilarini olusturduk.*/


// functions
function updateUI(pEnergyLevel, pBatteryContainer, pLevelInfo) {
    /*  if(pEnergyLevel == 0){
        pBatteryContainer.className = "energy-level-0";
      }else if(pEnergyLevel == 1){
        pBatteryContainer.className = "energy-level-1";
      }else if(pEnergyLevel == 2){
        pBatteryContainer.className = "energy-level-2";
      }else if(pEnergyLevel == 3){
        pBatteryContainer.className = "energy-level-3";
      } pilin 3 farkli durumda degiskenligini if-else kosuluyla olusturduk. 
      fonksiyonun haline getirdigimiz kosulumuzu daha sonra kisalttik>>*/ pBatteryContainer.className = `energy-level-${pEnergyLevel}`;
  pLevelInfo.innerHTML = Math.round((energyLevel / 3) * 100);          //pil yuzde oranlari 
}

// Data model
let energyLevel = 0; // enerji level seviyesi max=3

// DOM API - Event handler - Interactions
const sarjingElement = document.querySelector("#sarj");
const desarjingElement = document.querySelector("#desarj");
const batteryElement = document.querySelector("#battery");
const levelInfoElement = document.querySelector("#enery-level-info");

sarjingElement.addEventListener("click", function (eventBilgisi) {
  if (energyLevel < 3) {
    energyLevel++;
  }//sarj butonuna her tiklamada enerji seviyesi yukseltilir

  updateUI(energyLevel, batteryElement, levelInfoElement);
});

desarjingElement.addEventListener("click", function (eventBilgisi) {
  if (energyLevel > 0) {
    energyLevel--;
  }//desarj butonuna her tiklamada enerji seviyesi alcaltilir

  updateUI(energyLevel, batteryElement, levelInfoElement);
});