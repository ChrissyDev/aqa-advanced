function fetchTodoData() {
    return fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(data => {
        console.log('Todo Data:', data);
        return data;
      })
      .catch(error => console.error('Fetch Todo Data Error:', error));
  }
  
  function fetchUserData() {
    return fetch('https://jsonplaceholder.typicode.com/users/1')
      .then(response => response.json())
      .then(data => {
        console.log('User Data:', data);
        return data;
      })
      .catch(error => console.error('Fetch User Data Error:', error));
  }
  
  Promise.all([fetchTodoData(), fetchUserData()])
    .then(results => {
      console.log('Promise.all Results:', results);
    })
    .catch(error => console.error('Promise.all Error:', error));  