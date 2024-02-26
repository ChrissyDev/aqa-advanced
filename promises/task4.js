class ServerDataFetcher {
    static async fetchTodoData() {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        const data = await response.json();
        console.log('Todo Data:', data);
        return data;
      } catch (error) {
        console.error('Fetch Todo Data Error:', error);
        throw error;
      }
    }
  
    static async fetchUserData() {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
        const data = await response.json();
        console.log('User Data:', data);
        return data;
      } catch (error) {
        console.error('Fetch User Data Error:', error);
        throw error;
      }
    }
  }
  
  Promise.all([ServerDataFetcher.fetchTodoData(), ServerDataFetcher.fetchUserData()])
    .then(results => {
      console.log('Promise.all Results (Class):', results);
    })
    .catch(error => console.error('Promise.all Error (Class):', error));
  