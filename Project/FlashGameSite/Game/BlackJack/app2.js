const start = document.querySelector('.start button')
const turnNumber = document.querySelector('.turnNumber')
const hostCards = document.querySelectorAll('.hostCards')
const hostCard = document.querySelectorAll('.hostCard')
const hostNumber = document.querySelector('.hostNumber strong')
const playerCards = document.querySelectorAll('.playerCards')
const playerCard = document.querySelectorAll('.playerCard')


// 배열의 아이템들을 랜덤으로 배정해주는 함수
function randomItem (a) {
    return a[Math.floor(Math.random() * a.length)]
}

// 전체 카드 (1 ~ 13까지의 숫자가 적힌 13장 * 4)
const cardNumber = []
for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 13; j++) {
        cardNumber.push(j  + 1);
    }
}

// 호스트와 플레이어들에게 배분할 카드 숫자 (턴 당 1장씩 * 2인 = 20장 + 호스트 5장 = 25장)
const cards = []
for (let i = 0; i < 25; i++) {
    cards.push(randomItem(cardNumber))
    console.log()
}

start.addEventListener('click', v => {
    if (start.textContent === '시작') {
        start.textContent = "다음 턴"
        turnNumber.classList.add('show')

        // 카드에 랜덤한 숫자 배정
        cards.forEach(v => {
            v.textContent = randomItem(cardNumber)
        })

        // 호스트 카드
        hostCards.forEach(v => {
            v = randomItem(cards)
        })
    }
})