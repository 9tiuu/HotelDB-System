// Menu buttons --------------------------

const homeButton = document.getElementById('home');
const hostedButton = document.getElementById('hosted');
const bedroomsButton = document.getElementById('bedrooms');
const recordButton = document.getElementById('record');
const configButton = document.getElementById('configuration');
const transactionButton = document.getElementById('transaction');

const homeInfo = document.querySelector('.home-info');
const hostedInfo = document.querySelector('.hosted-info');
const bedroomsInfo = document.querySelector('.bedrooms-info');
const recordInfo = document.querySelector('.record-info');
const configInfo = document.querySelector('.config-info');
const transactionInfo = document.querySelector('.transaction-info');

function BtnNoSelected(btn1, btn2, btn3, btn4, btn5) {
    let btn = [btn1, btn2, btn3, btn4, btn5];

    btn.forEach(function(menuBtns) {
        return menuBtns.classList.remove('selected');
    });
};

function InfoNoVisible(info1, info2, info3, info4, info5) {
    let info = [info1, info2, info3, info4, info5];

    info.forEach(function(menuInfo) {
        return menuInfo.classList.remove('active');
    });
};

function BtnSelected(btn, info, b1, b2, b3, b4, b5, f1, f2, f3, f4, f5) {
    btn.classList.add('selected');

    if (btn.classList.contains('selected')) {
        info.classList.add('active');

        BtnNoSelected(b1, b2, b3, b4, b5);
        InfoNoVisible(f1, f2, f3, f4, f5);
    };
};

homeButton.classList.add('selected');
homeButton.addEventListener('click', () => {  
    BtnSelected(homeButton, homeInfo, 
        hostedButton, bedroomsButton, recordButton, configButton, transactionButton, 
        hostedInfo, bedroomsInfo, recordInfo, configInfo, transactionInfo
    );
});

hostedButton.addEventListener('click', () => {
    BtnSelected(hostedButton, hostedInfo, 
        homeButton, bedroomsButton, recordButton, configButton, transactionButton,
        homeInfo, bedroomsInfo, recordInfo, configInfo, transactionInfo
    );
});

bedroomsButton.addEventListener('click', () => {
    BtnSelected(bedroomsButton, bedroomsInfo, 
        homeButton, hostedButton, recordButton, configButton, transactionButton,
        homeInfo, hostedInfo, recordInfo, configInfo, transactionInfo
    );
});

recordButton.addEventListener('click', () => {
    BtnSelected(recordButton, recordInfo, 
        homeButton, hostedButton, bedroomsButton, configButton, transactionButton,
        homeInfo, hostedInfo, bedroomsInfo, configInfo, transactionInfo
    );
});

configButton.addEventListener('click', () => { 
    BtnSelected(configButton, configInfo, 
        homeButton, hostedButton, bedroomsButton, recordButton, transactionButton,
        homeInfo, hostedInfo, bedroomsInfo, recordInfo, transactionInfo
    );
});

transactionButton.addEventListener('click', () => {
    BtnSelected(transactionButton, transactionInfo,
        homeButton, hostedButton, bedroomsButton, recordButton, configButton,
        homeInfo, hostedInfo, bedroomsInfo, recordInfo, configInfo
    );
});