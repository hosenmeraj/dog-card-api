const loadDog = () => {
    fetch('https://api.thedogapi.com/v1/breeds')
        .then(response => response.json())
        .then(data => displayDog(data))
}

const displayDog = (dogList) => {
    const dogContainer = document.getElementById('dogs')
    firstTenElement = dogList.slice(0, 10)
    for (const dog of firstTenElement) {
        console.log(dogList);
        const div = document.createElement("div")
        div.className = 'col-md-4'

        div.innerHTML = `
        <p>${dog.id}</p>
        <h4>${dog.name}</h4>
        <p>${dog.height.imperial}</p>
        <img src = '${dog.image.url}' width = '300px' height = '300px'/>
        `
        dogContainer.appendChild(div)
    }
}