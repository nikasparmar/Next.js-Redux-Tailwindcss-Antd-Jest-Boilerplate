import config from '../config/index';

export const getuser = async (requestData) => {
  let data = await fetch(`${config.API_URL}/api`, {
    method: 'get',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(requestData)
  });
  data = await data.json();
  return data;
};
