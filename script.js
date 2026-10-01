const hats = [
    'https://i.imgur.com/qCcovAh.png',
    'https://i.imgur.com/Dti6XaW.png',
    'https://i.imgur.com/olUngKI.png',
    'https://i.imgur.com/FUDsDCv.png',
  ];
  
const shirts = [
    'https://i.imgur.com/eroo5Ca.png',
    'https://i.imgur.com/t7H8Anh.png',
    'https://i.imgur.com/HMZgFIt.png',
    'https://i.imgur.com/45mbBfu.png',
    'https://i.imgur.com/pOeRQzT.png',
    'https://i.imgur.com/iPcYyPu.png',
    'https://i.imgur.com/EpQLxDY.png',
    'https://i.imgur.com/d1Eh4co.png',
    'https://i.imgur.com/cJqfNn4.png',
  ];
  
const pants = [
    'https://i.imgur.com/TqKPjuX.png',
    'https://i.imgur.com/cQsuSin.png',
    'https://i.imgur.com/ZbRcAiV.png',
    'https://i.imgur.com/HKnIabB.png',
    'https://i.imgur.com/A3NDEyK.png',
    'https://i.imgur.com/ehKzHnk.png',
];
console.log("script works!");
const hatBack = document.getElementById('hat-back');
let hatIndex = 0;
let shirtIndex = 0;
let pantsIndex = 0;
hatBack.onclick = () => {
    const hatsImg = document.getElementById('hatsImg');
    hatsImg.src = hats[hatIndex - 1];
    hatIndex--;
    if (hatIndex < 0) {
        hatIndex = hats.length - 1;
        hatsImg.src = hats[hatIndex];
    }
    console.log(hatIndex);
    console.log(hats[hatIndex]);
}

const nextHat = document.getElementById('next-hat');
nextHat.onclick = () => {
    const hatsImg = document.getElementById('hatsImg');
    hatsImg.src = hats[hatIndex + 1];
    hatIndex++;
    if (hatIndex >= hats.length) {
        hatIndex = 0;
        hatsImg.src = hats[hatIndex];
    }
}
  
const shirtBack = document.getElementById('shirt-back');
shirtBack.onclick = () => {
    const shirtsImg = document.getElementById('shirtsImg');
    shirtsImg.src = shirts[shirtIndex - 1];
    shirtIndex--;
    if (shirtIndex < 0) {
        shirtIndex = shirts.length - 1;
        shirtsImg.src = shirts[shirtIndex];
    }
    console.log(shirtIndex);
    console.log(shirts[shirtIndex]);
}
  
const nextShirt = document.getElementById('next-shirt');
nextShirt.onclick = () => {
    const shirtsImg = document.getElementById('shirtsImg');
    shirtsImg.src = shirts[shirtIndex + 1];
    shirtIndex++;
    if (shirtIndex >= shirts.length) {
        shirtIndex = 0;
        shirtsImg.src = shirts[shirtIndex];
    }
}

const pantsBack = document.getElementById('pants-back');
pantsBack.onclick = () => {
    const pantsImg = document.getElementById('pantsImg');
    pantsImg.src = pants[pantsIndex - 1];
    pantsIndex--;
    if (pantsIndex < 0) {
        pantsIndex = pants.length - 1;
        pantsImg.src = pants[pantsIndex];
    }
    console.log(pantsIndex);
    console.log(pants[pantsIndex]);
    
}
  
  const nextPants = document.getElementById('next-pants');
  nextPants.onclick = () => {
    const pantsImg = document.getElementById('pantsImg');
    pantsImg.src = pants[pantsIndex + 1];
    pantsIndex++;
    if (pantsIndex >= pants.length) {
        pantsIndex = 0;
        pantsImg.src = pants[pantsIndex];
    }
  }



const randomize = document.getElementById('randomize');
randomize.onclick = () => {
    hatIndex = Math.floor(Math.random() * hats.length);
    shirtIndex = Math.floor(Math.random() * shirts.length);
    pantsIndex = Math.floor(Math.random() * pants.length);
    const hatsImg = document.getElementById('hatsImg');
    hatsImg.src = hats[hatIndex];
    const shirtsImg = document.getElementById('shirtsImg');
    shirtsImg.src = shirts[shirtIndex];
    const pantsImg = document.getElementById('pantsImg');
    pantsImg.src = pants[pantsIndex];
}