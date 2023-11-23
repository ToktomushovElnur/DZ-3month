function loadPeopleData() {
    fetch('peoples.json')
        .then(response => response.json())
        .then(data => {
            console.log('Loaded data:', data)
            displayPeople(data)
        })
        .catch(error => console.error('Ошибка при загрузке данных:', error))
}

function displayPeople(peopleData) {
    console.log('Displaying people:', peopleData)

    const personContainer = document.querySelector('.person')

    peopleData.forEach(person => {
        console.log('Processing person:', person)

        const card = document.createElement('div')
        card.classList.add('cards')

        const imgContainer = document.createElement('div')
        imgContainer.classList.add('img')

        const photo = document.createElement('img')
        photo.src = person.photo || 'images/none.png'
        photo.alt = 'Person Photo'

        const name = document.createElement('p')
        name.textContent = `Name: ${person.name}`

        const surname = document.createElement('p')
        surname.textContent = `Surname: ${person.surname}`;

        const age = document.createElement('span')
        age.textContent = `Age: ${person.age}`

        imgContainer.appendChild(photo)
        card.appendChild(imgContainer)
        card.appendChild(name)
        card.appendChild(surname)
        card.appendChild(age)

        personContainer.appendChild(card)
    });
}

document.addEventListener('DOMContentLoaded', loadPeopleData)