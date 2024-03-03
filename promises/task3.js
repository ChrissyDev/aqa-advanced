async function fetchTodoData() {
  try {
      const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
      return await response.json();
  } catch (error) {
      console.error('Fetch Todo Data Error:', error);
      throw error;
  }
}

async function fetchUserData() {
  try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
      return await response.json();
  } catch (error) {
      console.error('Fetch User Data Error:', error);
      throw error;
  }
}

async function fetchDataFromServer() {
  try {
      const [todoData, userData] = await Promise.all([fetchTodoData(), fetchUserData()]);
      
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