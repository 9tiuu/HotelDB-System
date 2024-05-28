// Menu buttons --------------------------

const homeButton = document.getElementById('home');
const hostedButton = document.getElementById('hosted');
const bedroomsButton = document.getElementById('bedrooms');
const recordButton = document.getElementById('record');
const configButton = document.getElementById('configuration');

const homeInfo = document.querySelector('.home-info');
const hostedInfo = document.querySelector('.hosted-info');
const bedroomsInfo = document.querySelector('.bedrooms-info');
const recordInfo = document.querySelector('.record-info');
const configInfo = document.querySelector('.config-info');

function BtnNoSelected(btn1, btn2, btn3, btn4) {
    let btn = [btn1, btn2, btn3, btn4];

    btn.forEach(function(menuBtns) {
        return menuBtns.classList.remove('selected');
    });
};

function InfoNoVisible(info1, info2, info3, info4) {
    let info = [info1, info2, info3, info4];

    info.forEach(function(menuInfo) {
        return menuInfo.classList.remove('active');
    });
};

function BtnSelected(btn, info, b1, b2, b3, b4, f1, f2, f3, f4) {
    btn.classList.add('selected');

    if (btn.classList.contains('selected')) {
        info.classList.add('active');

        BtnNoSelected(b1, b2, b3, b4);
        InfoNoVisible(f1, f2, f3, f4);
    };
};

homeButton.classList.add('selected');
homeButton.addEventListener('click', () => {  
    BtnSelected(homeButton, homeInfo, 
        hostedButton, bedroomsButton, recordButton, configButton, 
        hostedInfo, bedroomsInfo, recordInfo, configInfo
    );
});

hostedButton.addEventListener('click', () => {
    BtnSelected(hostedButton, hostedInfo, 
        homeButton, bedroomsButton, recordButton, configButton, 
        homeInfo, bedroomsInfo, recordInfo, configInfo
    );
});

bedroomsButton.addEventListener('click', () => {
    BtnSelected(bedroomsButton, bedroomsInfo, 
        homeButton, hostedButton, recordButton, configButton, 
        homeInfo, hostedInfo, recordInfo, configInfo
    );
});

recordButton.addEventListener('click', () => {
    BtnSelected(recordButton, recordInfo, 
        homeButton, hostedButton, bedroomsButton, configButton, 
        homeInfo, hostedInfo, bedroomsInfo, configInfo
    );
});

configButton.addEventListener('click', () => { 
    BtnSelected(configButton, configInfo, 
        homeButton, hostedButton, bedroomsButton, recordButton, 
        homeInfo, hostedInfo, bedroomsInfo, recordInfo
    );
});