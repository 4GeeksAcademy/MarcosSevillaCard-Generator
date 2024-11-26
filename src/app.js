/* eslint-disable */
import "bootstrap";

window.onload = () => {
  const suits = ["♥", "♠", "♣", "♦"];
  const values = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];

  // Función para generar una carta
  const generateCard = () => {
    const suit = suits[Math.floor(Math.random() * suits.length)];
    const value = values[Math.floor(Math.random() * values.length)];
    const cardContainer = document.getElementById("cardContainer");

    document.getElementById("topSuit").innerText = suit;
    document.getElementById("cardValue").innerText = value;
    document.getElementById("bottomSuit").innerText = suit;

    cardContainer.style.color = suit === "♥" || suit === "♦" ? "red" : "black";
  };
  // Función para actualizar el tamaño de la carta
  const updateCardSize = () => {
    const width = document.getElementById("widthInput").value;
    const height = document.getElementById("heightInput").value;
    const cardContainer = document.getElementById("cardContainer");

    if (width) cardContainer.style.width = `${width}px`;
    if (height) cardContainer.style.height = `${height}px`;
  };
  // Event Listeners
  document.getElementById("newCardBtn").addEventListener("click", generateCard);
  document
    .getElementById("widthInput")
    .addEventListener("input", updateCardSize);
  document
    .getElementById("heightInput")
    .addEventListener("input", updateCardSize);
  // Generar una carta al cargar la página y cada 10 segundos
  generateCard();
  setInterval(generateCard, 10000);
};
