console.log('Running app.js on client');

const submitUserForm = async e => {
    try {
        e.preventDefault();
        const response = await fetch('/users', {
            method: 'POST',
            body: JSON.stringify({
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                password: document.getElementById('password').value
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        if (response.status === 201) {
            document.getElementById('name').value = '';
            document.getElementById('email').value = '';
            document.getElementById('password').value = '';
            document.getElementById('name').focus();
            return alert('User registered successfully.');
        }
        throw new Exception();
    } catch (error) {
        alert('User could not be registered.');
    }
};