const mainImage = document.getElementById('main-image');
const mainText = document.getElementById('main-text');
const subText = document.getElementById('sub-text');
const noBtn = document.getElementById('no-btn');
const yesBtn = document.getElementById('yes-btn');

// Text and Image stages based on the video
const textStages = [
    {
        text: "Please think again! 🥺",
        subtext: "Aryy itti jldi na mtt bolo..", 
        image: "2.gif" 
    },
    {
        text: "Ek aur baar Soch lo! 😣",
        subtext: "Kyu aisa kar rahi ho Man jao >_<",
        image: "3.gif"
    },
    {
        text: "beautiful pls Man jao na! Kitna code likh waogi 😭",
        subtext: "bhav kha rahi ho yr tum bahut glt baat hai ye", 
        image: "4.gif"
    }
];

let clickCount = 0;

// Function for NO button
noBtn.addEventListener('click', () => {
    if (clickCount < textStages.length) {
        // Change text and image
        const stage = textStages[clickCount];
        mainText.innerText = stage.text;
        subText.innerText = stage.subtext;
        mainImage.src = stage.image;
        
        clickCount++;
    }
    
    // If we reach the last stage, start moving the button
    if (clickCount === textStages.length) {
        enableMovingButton();
    }
});

function enableMovingButton() {
    noBtn.innerText = "No"; 
    
    // Desktop: Move on mouse hover
    noBtn.addEventListener('mouseover', moveButton);
    
    // Mobile: Move on touch
    noBtn.addEventListener('touchstart', moveButton);

    // Jump immediately so it's not under the finger/mouse
    moveButton(); 
}

function moveButton(e) {
    // MOBILE FIX: If this is a touch event, stop the "click" from happening
    if (e && e.type === 'touchstart') {
        e.preventDefault();
    }

    // Get screen width and height
    const maxWidth = window.innerWidth - noBtn.offsetWidth - 20;
    const maxHeight = window.innerHeight - noBtn.offsetHeight - 20;

    // Calculate random position
    const randomX = Math.random() * maxWidth;
    const randomY = Math.random() * maxHeight;

    // Apply new position
    noBtn.style.position = 'fixed';
    noBtn.style.left = randomX + 'px';
    noBtn.style.top = randomY + 'px';
}

// Function for YES button
yesBtn.addEventListener('click', () => {
    mainImage.src = "5.gif"; // Happy gif
    mainText.innerText = "I knew it! You Love me a lot 😘";
    subText.innerText = "";
    
    // Hide buttons
    noBtn.style.display = 'none';
    yesBtn.style.display = 'none';
});