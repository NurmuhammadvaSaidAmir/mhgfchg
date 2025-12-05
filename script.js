let gender = prompt("Введите ваш пол (мужчина / женщина)").trim().toLowerCase();

switch (gender) {
    case "мужчина":
        createCard("Мужская карточка", "#1e90ff");
        break;

    case "женщина":
        createCard("Женская карточка", "#ff69b4");
        break;

    default:
        alert("Пол указан неверно!");
        break;
}

function createCard(title, color) {
    let card = document.createElement("div");

    card.style.width = "300px";
    card.style.height = "200px";
    card.style.backgroundColor = color;
    card.style.color = "white";
    card.style.margin = "20px auto";
    card.style.borderRadius = "10px";
    card.style.padding = "20px";
    card.style.fontSize = "22px";
    card.style.display = "flex";
    card.style.flexDirection = "column";
    card.style.justifyContent = "center";
    card.style.alignItems = "center";

    card.innerHTML = `
        <h2>${title}</h2>
        <p>Добро пожаловать!</p>
    `;

    document.body.appendChild(card);
}