async function fetchDataFromServer() {
    try {
      const todoResponse = await fetch('https://jsonplaceholder.typicode.com/todos/1');
      const userResponse = await fetch('https://jsonplaceholder.typicode.com/users/1');
  
      const todoData = await todoResponse.json();
      const userData = await userResponse.json();
  
      console.log('Todo Data:', todoData);
      console.log('User Data:', userData);
  
      return [todoData, userData];
    } catch (error) {
      console.error('Fetch Data From Server Error:', error);
      throw error;
    }
  }
  
  fetchDataFromServer()
    .then(results => {
      console.log('Async/Await Results:', results);
    })
    .catch(error => console.error('Async/Await Error:', error));  