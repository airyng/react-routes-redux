// API methods
const getComments = () => {
  return fetch('https://jsonplaceholder.typicode.com/comments?_limit=300')
    .then(res => res.ok ? res : Promise.reject(res))
    .then(async data => {
      const result = await data.json();
      console.log('getComments success: ', data, result);
      return result;
    })
    .catch(() => {
      console.log('getComments has some error...');
      return [];
    });
}

const getPosts = () => {
  return fetch('https://jsonplaceholder.typicode.com/posts?_limit=300')
    .then(res => res.ok ? res : Promise.reject(res))
    .then(async data => {
      const result = await data.json();
      console.log('getPosts success: ', data, result);
      return result;
    })
    .catch(() => {
      console.log('getPosts has some error...');
      return [];
    });
}

const api = {
  getComments,
  getPosts
}

export default api
