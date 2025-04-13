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