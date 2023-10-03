import axios from 'axios';

axios.defaults.baseURL = 'https://goose-track-backend-q3re.onrender.com';

const response = await axios.post('/auth/register', {
    name: 'al',
    email: 'al@gmail.com',
    password: '123456',
});

console.log(response);
