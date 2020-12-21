const button = document.querySelector('.button')
const sellTable = document.getElementById('sellTable')
const buyTable = document.getElementById('buyTable')
const sellTbody = sellTable.querySelector('tbody')
const buyTbody = buyTable.querySelector('tbody')

const LENGTH = 20
const PRICE_PRECISION = 1
const QTY_PRECISION = 4

function processData(rawData, side) {
  // dataList는 rawData를 오름차순으로 정렬한 배열
  let dataList = [...rawData].sort((a, b) => b.price - a.price)

  // side가 SELL이면 반대로 정렬
  if (side === 'SELL') {
    dataList.reverse()
  }

  // dataList를 0부터 length(20)까지만 남김
  dataList = dataList.slice(0, LENGTH)

  // totalQty(총 수량)는 dataList의 모든 아이템들의 qty값을 더한 acc
  const totalQty = dataList.reduce((acc, d) => {
    acc += Number(d.qty)
    return acc
  }, 0)

  // cumQty에 각 아이템들의 qty를 더해서 percent를 구함
  let cumQty = 0
  return dataList.map((data) => {
    const { price, qty } = data
    cumQty += Number(qty)
    const percent = (cumQty / totalQty) * 100

    // price, qty, cumQty, percent를 반환
    return {
      price,
      qty,
      cumQty: cumQty,
      percent,
    }
  })
}

function splitFloatValue(value, precision) {
  let integer = parseInt(value, 10)
  let float = parseFloat(value) - integer
  integer = integer.toLocaleString()
  float = float.toFixed(precision).split('.')[1]

  return [integer, float]
}

function prettyPrice(value, precision) {
  const elem = document.createElement('div')
  const decimal = document.createElement('span')
  elem.classList.add('prettyPrice')

  let [intValue, floatValue] = splitFloatValue(value, precision)
  elem.innerText = intValue + '.'
  decimal.innerText = floatValue
  elem.appendChild(decimal)
  return elem
}

function createTableRow(data, index) {
  const { price, qty, cumQty, percent } = data
  const animationDelay = index * 50
  const row = document.createElement('tr')
  const priceData = document.createElement('td')
  const qtyData = document.createElement('td')
  const cumQtyData = document.createElement('td')
  const cumQtyBar = document.createElement('span')

  row.setAttribute('style', `animation-delay: ${animationDelay}ms;`)

  priceData.classList.add('price')
  priceData.appendChild(prettyPrice(price, PRICE_PRECISION))

  qtyData.classList.add('qty')
  qtyData.appendChild(prettyPrice(qty, QTY_PRECISION))

  cumQtyBar.classList.add('bar')
  cumQtyBar.setAttribute('style', `width: ${percent}%;`)

  cumQtyData.classList.add('total')
  cumQtyData.appendChild(prettyPrice(cumQty, QTY_PRECISION))
  cumQtyData.appendChild(cumQtyBar)

  row.append(priceData, qtyData, cumQtyData)

  return row
}

function renderTable(data) {
  const sell = data.filter((d) => d.side === 'SELL')
  const buy = data.filter((d) => d.side === 'BUY')

  const sellList = processData(sell, 'SELL')
  const buyList = processData(buy, 'BUY')

  sellList.forEach((item, i) => {
    sellTbody.appendChild(createTableRow(item, i))
  })

  buyList.forEach((item, i) => {
    buyTbody.appendChild(createTableRow(item, i))
  })
}

button.addEventListener('click', function () {
  this.parentNode.classList.add('hide')

  axios
    .get('/orderbook')
    .then((res) => {
      const { data } = res
      renderTable(data)
    })
    .catch((err) => {
      console.error(err)
    })
})
