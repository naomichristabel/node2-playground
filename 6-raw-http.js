const http = require('http');


url = 'http://api.weatherstack.com/current?access_key=06056d9ce930069b12528fb2c83ecd97&query=13,80';

const request = http.request(url, (response) => {
    let data = '';

    response.on('data', (chunk) => {
        data = data + chunk.toString();
    })

    response.on('end', () => {
        const body = JSON.parse(data);
        console.log(body);
    })
});

request.on('error', (error) => {
    console.log('Error has happened...', error);
})


request.end();