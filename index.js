let portions = document.getElementById('portions');
let output = document.getElementById('output');
let calculations = document.getElementById('calculations');

const recipeChicken = [
    'Vištienos krūtinėlė: ', '0.5',
    'Citrinos sultys: ', '0.25',
    'Česnako skiltelės: ', '0.5',
    'Alyvuogių aliejus: ', '25 ml',
    'Parmesano sūris: ', '25 g',
    'Ančiuviai aliejuje: ', '1',
    'Majonezas: ', '0.25 a.š.',
    'Garstyčios: ', '0.25 v.š.',
    'Salotos: ', '2'
];

const recipeBlueberry = [
    'Miltai: ', '0.625 stikl.',
    'Cukrus: ', '0.375 stikl.',
    'Kepimo milteliai: ', '0.25 stikl.',
    'Pienas: ', '0.25 cups',
    'Daržovių aliejus', '0.125 stikl.',
    'Plakti kiaušiniai: ', '2',
    'Vanilės ekstraktas: ', '0.5 a.š.',
    'Mėlynės: ', '0.5 stikl.',
    'Lydytas sviestas: ', '0.5 v.š.'
];

const recipePasta = [
    'Malta jautiena: ', '125 g',
    'Pomidorų sriuba: ', '0.5 kons.',
    'Makaronai: ', '0.375 stikl.',
    'Svogūnai: ', '0.25',
    'Raudonoji paprika: ', '0.25'
];

function calculateRecipe(recipe) {
    let text = '';
    for (let i = 0; i < recipe.length; i++) {
        if (i % 2 === 0) {
            text += `<p>${recipe[i]}`;
        } else {
            let temporary = recipe[i].split(" ");
            temporary[0] = parseFloat(temporary[0]) * portions.valueAsNumber;
            text += `<strong>${temporary.join(" ")}</strong></p>`;
        }
    }
    calculations.innerHTML = text;
}

function selection(selected, nonSelected) {
    selected.classList.add('selected');
    selected.firstElementChild.style.display = "block";
    nonSelected.forEach(element => {
        element.classList.remove('selected');
        element.firstElementChild.style.display = "none";
    });
}

let first = document.getElementById('first');
let second = document.getElementById('second');
let third = document.getElementById('third');

first.addEventListener("click", (e) => {
    selection(first, [second, third]);
    calculateRecipe(recipeChicken);
});

second.addEventListener("click", (e) => {
    selection(second, [first, third]);
    calculateRecipe(recipeBlueberry);
});

third.addEventListener("click", (e) => {
    selection(third, [first, second]);
    calculateRecipe(recipePasta);
});

portions.addEventListener('input', (e) => {
    output.innerHTML = e.target.value;
    output.style.left = (e.target.valueAsNumber - 0.73) + 'rem';

    if (document.querySelector('.selected') === first) {
        calculateRecipe(recipeChicken);
    } else if (document.querySelector('.selected') === second) {
        calculateRecipe(recipeBlueberry);
    } else if (document.querySelector('.selected') === third) {
        calculateRecipe(recipePasta);
    }
});