const start = document.querySelector('.start button')
const turn = document.querySelector('.turnNumber')
let turnNumber = document.querySelector('.turnNumber strong')
const hostCards = document.querySelectorAll('.hostCards')
const hostCard = document.querySelectorAll('.hostCard')
const hostNumber = document.querySelector('.hostNumber strong')
const playerCards = document.querySelectorAll('.playerCards')
const playerCard = document.querySelectorAll('.playerCard')

// 중복 확인을 위한 배열
const noOverLap = []


// 배열의 아이템들을 랜덤으로 배정해주는 함수
function randomItem (a) {
    return a[Math.floor(Math.random() * a.length)]
}

// 모두 1 ~ 13으로 만들어주는 함수
function dec (a) {
    if (0 < a < 14) {
        return a
    }
    if (20 < a < 34) {
        const b = a - 20
        return b
    }
    if (40 < a < 54) {
        const b = a - 40
        return b
    }
    if (60 < a < 74) {
        const b = a - 60
        return b
    }
}

// 전체 카드 (1 ~ 13 , 21 ~ 33 , 41 ~ 53 , 61 ~ 73)
const cardNumber = []
for (let i = 1; i < 14; i++) {
    cardNumber.push(i)
}
for (let i = 21; i < 34; i++) {
    cardNumber.push(i)
}
for (let i = 41; i < 54; i++) {
    cardNumber.push(i)
}
for (let i = 61; i < 74; i++) {
    cardNumber.push(i)
}

// 호스트와 플레이어들에게 배분할 카드 숫자 (턴 당 1장씩 * 2인 = 20장 + 호스트 5장 = 25장)
const cards = []
const card = []
for (let i = 0; i < 18; i++) {
    card.push(document.createElement('div'))
}

start.addEventListener('click', v => {
    if (start.textContent === '시작') {
        start.textContent = "다음 턴"
        turn.classList.add('show')

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
            if (!noOverLap.includes(random)) {
                noOverLap.push(random)
                hostCard[i].textContent = dec(random)
            } else i--
        }

        // 플레이어 카드 2장 배분
        for (let i = 0; i < 2; i++) {
            const random = randomItem(cards)
            if (!noOverLap.includes(random)) {
                noOverLap.push(random)
                playerCard[i].textContent = dec(random)
            } else i--
        }

        return
    }

    if (start.textContent === '다음 턴') {
        // 10턴이 지나면 종료
        if (turnNumber.textContent == 10) return

        // 턴 수 증가
        turnNumber.textContent = Number(turnNumber.textContent) + 1

        // 플레이어 카드 2장 배분
        // card에서 랜덤으로 주고 pop()
        for (let i = 0; i < 2; i++) {
            const addCard = card[0]
            addCard.classList.add('playerCard')
            playerCards[i].appendChild(addCard)
            card.shift(addCard)
        }

        // 붙이기 기능 활성화
        if (turnNumber.textContent > 1) {

        }
    }
})