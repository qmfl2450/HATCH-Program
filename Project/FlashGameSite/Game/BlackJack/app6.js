const start = document.querySelector('.start button')
const turn = document.querySelector('.turnNumber')
let turnNumber = document.querySelector('.turnNumber strong')
const hostCards = document.querySelector('.hostCards')
const hostCard = document.querySelectorAll('.hostCard')
const hostNumber = document.querySelector('.hostNumber strong')
const addButton = document.querySelectorAll('.players button')
const playerCards = document.querySelectorAll('.playerCards')
let playerCard = document.querySelectorAll('.playerCard')
let firstPlayerCard = document.querySelectorAll('.firstPlayer .playerCard')
let secondPlayerCard = document.querySelectorAll('.secondPlayer .playerCard')

// 중복 확인을 위한 배열
const noOverLap = []

// 호스트 카드 합산 (호스트 숫자)
let hostNum = 0
// 첫 번째 플레이어 합산
let firstNum = 0
// 두 번째 플레이어 합산
let secondNum = 0


// 배열의 아이템들을 랜덤으로 배정해주는 함수
function randomItem (a) {
    return a[Math.floor(Math.random() * a.length)]
}

// 모두 1 ~ 13으로 만들어주는 함수
function dec (b) {
    // console.log(b)
    if (b < 14) {
        return b
    }
    if (20 < b && b < 34) {
        return b - 20
    }
    if (40 < b && b < 54) {
        return b - 40
    }
    if (60 < b && b < 74) {
        return b - 60
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
// 플레이어에게 배분할 빈 카드
const card = []
for (let i = 0; i < 18; i++) {
    card.push(document.createElement('div'))
}

// 다시시작 함수
function reset () {
    // 변수 초기화
    hostNum = 0
    firstNum = 0
    secondNum = 0
    noOverLap.length = 0
    cards.length = 0
    
    card.length = 0
    for (let i = 0; i < 18; i++) {
        card.push(document.createElement('div'))
    }

    turnNumber.textContent = '1'
    turnNumber.classList.remove('show')

    start.textContent = '시작'

    // 노드 초기화
    firstPlayerCard = document.querySelectorAll('.firstPlayer .playerCard')
    secondPlayerCard = document.querySelectorAll('.secondPlayer .playerCard')

    while(hostCards.length > 5) {
        hostCards.removeChild('div')
    }
    hostCard.textContent = ''
    hostNumber.textContent = ''
    while(firstPlayerCard.length > 1 && secondPlayerCard.length > 1) {
        let node = document.querySelectorAll('.playerCard');
        if (node.parentNode) {
        node.parentNode.removeChild(node);
        }
    }
    playerCard.textContent = ''
}

// 승패 가르는 함수
function whoIsWinner () {
    // 10턴이 지나면 종료
    if (hostNum > secondNum && hostNum > firstNum && turnNumber.textContent == 9) {
        if (secondNum < firstNum) {
            alert(`Player 1 : ${firstNum}점 \nPlayer 2 : ${secondNum}점 \nPlayer 1가 이겼습니다.`)
        }
        if (secondNum > firstNum) {
            alert(`Player 1 : ${firstNum}점 \nPlayer 2 : ${secondNum}점 \nPlayer 2가 이겼습니다.`)
        }
    }

    // 탈락 종료
    if (hostNum < secondNum && hostNum < firstNum) {
        alert('모두 탈락! 다시 시작해주세요.')
    }
    if (hostNum < secondNum && hostNum > firstNum) {
        alert('Player 2 탈락! Player 1가 이겼습니다.')
    }
    if (hostNum < firstNum && hostNum > secondNum) {
        alert('Player 1 탈락! Player 2가 이겼습니다.')
    }

    reset()
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
                hostNum += Number(hostCard[i].textContent)
            } else i--
        }
        hostNumber.textContent = hostNum

        // 플레이어 카드 2장 배분
        for (let i = 0; i < 2; i++) {
            const random = randomItem(cards)
            if (!noOverLap.includes(random)) {
                noOverLap.push(random)
                playerCard[i].textContent = dec(random)
            } else i--
        }
        firstNum = Number(playerCard[0].textContent)
        secondNum = Number(playerCard[1].textContent)

        playerCard = document.querySelectorAll('.playerCard')
        return
    }

    if (start.textContent === '다음 턴') {
        // 턴 수 증가
        turnNumber.textContent = Number(turnNumber.textContent) + 1

        // 플레이어 카드 2장 배분
        // card에서 랜덤으로 주고 pop()
        for (let i = 0; i < 2; i++) {
            const addCard = card[0]
            addCard.classList.add('playerCard')
            for (let j = 0; j < 1; j++) {
                const random = randomItem(cards)
                if (!noOverLap.includes(random)) {
                    noOverLap.push(random)

                    // 카드에 숫자 추가
                    addCard.textContent = dec(random)
                } else j--
            }
            // 플레이어 카드 추가
            playerCards[i].appendChild(addCard)
            card.shift(addCard)
        }
        // 플레이어 카드 숫자 합산
        firstPlayerCard = document.querySelectorAll('.firstPlayer .playerCard')
        secondPlayerCard = document.querySelectorAll('.secondPlayer .playerCard')
        firstNum = 0
        secondNum = 0
        firstPlayerCard.forEach(v => {
            firstNum += Number(v.textContent)
        })
        secondPlayerCard.forEach(v => {
            secondNum += Number(v.textContent)
        })

        // 체크되어 있는 카드 체크 해제
        playerCard.forEach(c => {
            if (c.classList.contains('checked')) {
                c.classList.toggle('checked')
            }
        })
        playerCard = document.querySelectorAll('.playerCard')
    }
    setTimeout(whoIsWinner, 3000);
})


// 붙이기 기능
playerCard.forEach(v => {
    v.addEventListener('click', function() {
        if (turnNumber.textContent > 1) {
            playerCard.forEach(c => {
                // 이전에 체크된 카드 해제
                if ((v !== c) && c.classList.contains('checked')) {
                    c.classList.toggle('checked')
                }
            })
            v.classList.toggle('checked')
        }
    })
})

addButton.forEach(v => {
    v.addEventListener('click', function() {
        if (v === addButton[0]) {
            firstPlayerCard.forEach (c => {
                if (c.classList.contains('checked')) {
                    // 체크된 카드는 호스트 카드로 이동
                    hostCards.appendChild(c)
                    // 호스트 숫자에 추가
                    hostNum += Number(c.textContent)
                    hostNumber.textContent = hostNum

                    // 플레이어 카드 숫자 합산
                    firstNum -= Number(c.textContent)
                } else return
            })
        }
        if (v === addButton[1]) {
            secondPlayerCard.forEach (c => {
                if (c.classList.contains('checked')) {
                    hostCards.appendChild(c)
                    hostNum += Number(c.textContent)
                    hostNumber.textContent = hostNum

                    // 플레이어 카드 숫자 합산
                    secondNum -= Number(c.textContent)
                } else return
            })
        }
    })
})