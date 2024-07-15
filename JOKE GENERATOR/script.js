document.getElementById('jokeBtn').addEventListener('click', function() {
    const apiUrl = 'https://v2.jokeapi.dev/joke/Any'; 

    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            let joke = '';
            if (data.type === 'single') {
                joke = data.joke;
            } else if (data.type === 'twopart') {
                joke = `${data.setup}<br>${data.delivery}`;
            }
            document.getElementById('jokeText').innerHTML = joke;
        })
        .catch(error => {
            console.error('Error fetching joke:', error);
            alert('Error fetching joke. Please try again.');
        });
});

