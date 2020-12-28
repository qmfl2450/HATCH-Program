const start = document.querySelector('.start button')
const turnNumber = document.querySelector('.turnNumber')
const hostCards = document.querySelector('.hostCards')
const hostCard = document.querySelectorAll('.hostCard')
const hostNumber = document.querySelector('.hostNumber strong')
const playerCards = document.querySelectorAll('.playerCards')
const playerCard = document.querySelectorAll('.playerCard')

const cards = []
for (let i = 0; i < 20; i++) {
    cards.push(document.createElement('div'))
}

const cardNumber = []
for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 13; j++) {
        cardNumber.push(j  + 1);
    }
}

function randomItem (a) {
    return a[Math.floor(Math.random() * a.length)]
}

// '시작' 버튼을 누를 때
// '다음 턴'
// 턴 알림
// 플레이어 카드
// 랜덤으로 숫자 생성 -> 플레이어 카드 & 호스트 카드
// 호스트 숫자 합산

let hostSum = 0

start.addEventListener('click', v => {
    if (start.textContent === '시작') {
        start.textContent = "다음 턴"
        turnNumber.classList.add('show')

        hostCard.forEach(v => {
            v.textContent = randomItem(cardNumber)
        });
        playerCard.forEach(v => {
            v.textContent = randomItem(cardNumber)
        });
        
        for (let i = 0; i < hostCard.length; i++) {
            hostSum += Number(hostCard[i].textContent)
        }
        hostNumber.textContent = hostSum

        return
    }

    if (start.textContent === '다음 턴') {
        playerCards.forEach(v => {
            v.appendChild(cards)
        })
    }
})