import axios from 'axios';


export const getUser = async () => {
  await axios.get('http://asdf2345.us.to:6010/api/user/username', {
    headers: {
      'accept': 'application/json',
      'Content-Type': 'application/json'
    }
  });
}
