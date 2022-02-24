const searchButton = () => {
    const input = document.getElementById('input-value')
    const error = document.getElementById('error')
    const inputValue = parseInt(input.value)

    if (isNaN(inputValue) || inputValue == '') {
        // alert("Please enter a number");
        error.innerText = 'Please valid Input Number'
        input.value = ''
        main.innerHTML = ''

    }
    else if (inputValue <= 0) {
        // alert("Please enter a number");
        error.innerText = 'Please valid Input Number'
        input.value = ''
        main.innerHTML = ''
    }
    else {
        fetch(`https://deckofcardsapi.com/api/deck/new/draw/?count=${inputValue}`)
            .then(response => response.json())
            .then(data => displayCard(data))
        input.value = ''
        error.innerHTML = ''
    }
}

const displayCard = (cards) => {
    console.log(cards);
    cards = cards.cards
    const main = document.getElementById('main')
    for (const card of cards) {
        const div = document.createElement('div')
        div.classList.add("col-lg-4")
        div.classList.add("mb-5")
        div.innerHTML = `
        <div class="card" style="width: 18rem;">
        <img src="${card.image}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${card.suit}</h5>
            <p class="card-text">${card.code}.</p>
            <button onclick="cardDetails('${card.code}')" href="#" class="btn btn-primary">Go somewhere</button>
        </div>
    </div>
        `
        main.appendChild(div)
    }
}
const cardDetails = (code) => {
    fetch(`https://deckofcardsapi.com/api/deck/new/draw/?count=52`)
        .then(res => res.json())
        .then(data => {
            const allCards = data.cards
            const singleCard = allCards.find(card => card.code === code)
            const div = document.createElement('div')
            main.innerHTML = ""
            div.innerHTML = `
            <div class="card" style="width: 18rem;">
            <img src="${singleCard.image}" class="card-img-top" alt="...">
            <div class="card-body">
            <h5 class="card-title">${singleCard.suit}</h5>
            <p class="card-text">${singleCard.code}.</p>
            
         </div>
        </div>
            `

            main.appendChild(div)
        })
}
