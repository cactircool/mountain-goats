const main = document.querySelector('main');
const content = document.querySelector('.content');
const header = document.querySelector('header');
const heading = document.querySelector('.heading');
const headingCreds = document.querySelector('.heading-creds');

let titles = [
    `Your ip-address is ${address}`,
    `Welcome to cybersecurity club`,
    `You are using ${(() => {
        let os = navigator.userAgent;
        let finalOs="";
        if (os.search('Windows')!==-1){
            finalOs="Windows";
        }
        else if (os.search('Mac')!==-1){
            finalOs="MacOS";
        }
        else if (os.search('X11')!==-1 && !(os.search('Linux')!==-1)){
            finalOs="UNIX";
        }
        else if (os.search('Linux')!==-1 && os.search('X11')!==-1){
            finalOs="Linux"
        }
        return finalOs;
    })()}`,
    `Hacking in progress ...`,
    `I just sold your credit card information ...`,

];

if (document.referrer !== '') {
    titles.push(`You just came from ${document.referrer}`);
}

function setup() {
    main.style.height = `calc(100vh - ${parseFloat(getComputedStyle(header).height)}px)`;
    // heading.style.height = `calc(100vh - ${parseFloat(getComputedStyle(header).height)}px - ${parseFloat(getComputedStyle(content).marginTop)}px)`;
}

function headingAnimation() {
    let str = titles[Math.floor(Math.random() * titles.length)]
    let index = 0;
    let interval = setInterval(() => {
        if (index >= str.length) {
            headingCreds.style.opacity = '1';
            clearInterval(interval);
            return;
        }
        let span = document.createElement('span');
        span.innerHTML = str[index];
        span.style.fontSize = 'var(--title)';
        heading.appendChild(span);
        index++;
    }, 50);
}

window.onload = () => {
    setup();
    headingAnimation();
};
setup();

document.addEventListener('mousemove', (e) => {
    document.body.style.background = 'radial-gradient()'
})