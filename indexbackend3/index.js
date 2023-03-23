function postUser(user) {
    return fetch(`http://u52832.kubsu-dev.ru/aweb3/api/user.php`, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
    })
}


function handleSubmit(event) {
    event.preventDefault();
    
    const data = new FormData(event.target);
    const user = Object.fromEntries(data.entries());

    const statusEl = document.querySelector('#status')
    postUser(user).then((res) => {
        statusEl.innerText = 'Успешно отправлено!'
    }).catch((err) => {
        statusEl.innerText = 'Габела'
    })


}
    
const form = document.querySelector('#myform');
form.addEventListener('submit', handleSubmit);