import axios from 'axios';


export const getUser = async () => {
  await axios.get('http://149.248.18.115:6010/api/user/username', {
    headers: {
      'accept': 'application/json',
      'Content-Type': 'application/json'
    }
  });
}
