const start = document.querySelector('.start button')
const turnNumber = document.querySelector('.turnNumber')
const hostCards = document.querySelectorAll('.hostCards')
const hostCard = document.querySelectorAll('.hostCard')
const hostNumber = document.querySelector('.hostNumber strong')
const playerCards = document.querySelectorAll('.playerCards')
const playerCard = document.querySelectorAll('.playerCard')

const FPlayerCards = playerCards[0]
const SPlayerCards = playerCards[1]
const FPlayerCard = playerCard[0]
const SPlayerCard = playerCard[1]

// 호드트 카드 배열
const arrHostCards = []
// 1 플레이어 카드 배열
const arrFPlayerCards = []
// 2 플레이어 카드 배열
const arrSPlayerCards = []


// 배열의 아이템들을 랜덤으로 배정해주는 함수
function randomItem (a) {
    return a[Math.floor(Math.random() * a.length)]
}

// 전체 카드 (a ~ m , n ~ z , A ~ M , N ~ Z)
const cardNumber = []
for (let i = 65; i < 91; i++) {
    cardNumber.push(String.fromCharCode(i))
}
for (let j = 97; j < 123; j++) {
    cardNumber.push(String.fromCharCode(j))
}

// 호스트와 플레이어들에게 배분할 카드 숫자 (턴 당 1장씩 * 2인 = 20장 + 호스트 5장 = 25장)
const cards = []

start.addEventListener('click', v => {
    if (start.textContent === '시작') {
        start.textContent = "다음 턴"
        turnNumber.classList.add('show')

        // cards에 랜덤 숫자 배정
        for (let i = 0; i < 25; i++) {
            const random = randomItem(cardNumber)
            if (!cards.includes(random)) {
                cards.push(random)
            } else i--
        }

        // 호스트 카드 5장 배분
        for (let i = 0; i < 5; i++) {
            const random = randomItem(cards)
            if (!arrHostCards.includes(random)) {
                arrHostCards.push(random)
                hostCard[i].textContent = random
            } else i--
        }

        // 플레이어 카드 2장 배분
        for (let i = 0; i < 2; i++) {
            const random = randomItem(cards)
            if (!arrHostCards.includes(random) && !(playerCard[0].textContent === random)) {
                playerCard[i].textContent = random
            } else i--
        }
        arrFPlayerCards.push(FPlayerCard.textContent)
        arrSPlayerCards.push(SplayerCard.textContent)

        return
    }


    if (start.textContent === '다음 턴') {
        
    }
})