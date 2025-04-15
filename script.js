const imagini = [
    'Imagini/fundal/Background2.png',
    'Imagini/fundal/Imagine_de_fundal.png',
    'Imagini/fundal/Background.png',
    'Imagini/fundal/hak.png',
    'Imagini/fundal/CPP1.png',
    'Imagini/fundal/CPP2.png',
    'Imagini/fundal/Dragonvscavaler.png'
];


function schimbaFundal(imagini){
    const indexAleatoriu = Math.floor(Math.random() * imagini.length);
    document.body.style.backgroundImage = 'url(' + imagini[indexAleatoriu] + ')';
    console.log(indexAleatoriu);
    console.log(imagini[indexAleatoriu]);
}


let array = [];
const container = document.getElementById('container');
const numarElementeInput = document.getElementById('numarElemente');
const vitezaInput = document.getElementById('viteza');

// Generează un array aleator
function genereazaArray(numarElemente) {
    array = [];
    container.innerHTML = '';
    for (let i = 0; i < numarElemente; i++) {
        array.push(Math.floor(Math.random() * 250) + 10);
    }
    afiseazaArray();
}

// Afișează array-ul ca bare
function afiseazaArray(arraySchimbat = []) {
    container.innerHTML = '';
    for (let i = 0; i < array.length; i++) {
        const divBara = document.createElement('div');
        divBara.className = 'div-bara';
        divBara.style.height = `${array[i]}px`;
        if (arraySchimbat.includes(i)) {
            divBara.style.backgroundColor = 'red';
        }
        container.appendChild(divBara);
    }
}

// Implementare Bubble Sort
async function sortareVizualizare() {
    const numarElemente = parseInt(numarElementeInput.value);
    genereazaArray(numarElemente); // Generează un nou array pentru sortare
    let schimbat;
    do {
        schimbat = false;
        for (let i = 0; i < array.length - 1; i++) {
            const viteza = parseInt(vitezaInput.value); // Obține viteza de la slide
            if (array[i] > array[i + 1]) {
                [array[i], array[i + 1]] = [array[i + 1], array[i]];
                schimbat = true;
                await new Promise(resolve => setTimeout(resolve, viteza)); // Pauză pentru vizualizare
                afiseazaArray([i, i + 1]);
            }
        }
    } while (schimbat);
    afiseazaArray(Array.from(array.keys())); // Afișează array-ul sortat cu toate barele verzi
}

// Inițializează array-ul la încărcarea paginii
genereazaArray(parseInt(numarElementeInput.value));