const xhr = new XMLHttpRequest()

xhr.open('GET', 'people.json', true)
xhr.onload = function () {
    if (xhr.status === 200) {
        const jsonData = JSON.parse(xhr.responseText)

        console.log('Data from people.json:', jsonData)
    } else {
        console.error('Failed to load data. Status:', xhr.status)
    }
}

xhr.onerror = function () {
    console.error('Error occurred during the request.')
};

xhr.send()