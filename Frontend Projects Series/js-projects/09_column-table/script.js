const rowsCountLabel = document.querySelector('[for="rows-count"] span')
const columnsCountLabel = document.querySelector('[for="columns-count"] span')
const rowsCountInput = document.querySelector('#rows-count')
const columnsCountInput = document.querySelector('#columns-count')
const tbody = document.querySelector('tbody')

let rowsCount = parseInt(rowsCountInput.value)
let columnsCount = parseInt(columnsCountInput.value)

rowsCountLabel.innerText = rowsCount
columnsCountLabel.innerText = columnsCount

function generateTable() {
  for (let i = 1; i <= rowsCount; i++) {
    const tr = document.createElement('tr')
    let prevTdValue = i
    for (let j = 1; j <= columnsCount; j++) {
      const td = document.createElement('td')
      td.innerText = prevTdValue
      prevTdValue = columnsCount + prevTdValue
      tr.append(td)
    }

    tbody.append(tr)
  }
}

generateTable()

rowsCountInput.addEventListener('input', () => {
  rowsCount = parseInt(rowsCountInput.value)
  rowsCountLabel.innerText = rowsCount

  tbody.innerText = ''

  generateTable()
})

columnsCountInput.addEventListener('input', () => {
  columnsCount = parseInt(columnsCountInput.value)
  columnsCountLabel.innerText = columnsCount
  tbody.innerText = ''
  generateTable()
})
