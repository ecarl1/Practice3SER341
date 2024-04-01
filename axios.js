const axios = require('axios');

const baseURL = 'http://localhost:3200'; 


// This uses the express router and uses the index.js file
// Function to make GET request to your server
async function getRequest(url) {
    try {
      const response = await axios.get(url);
      console.log('Response:', response.data);
    } catch (error) {
      //error handling
      if (error.response && error.response.data) {
        console.error('Error:', error.response.data);
      } else if (error.response) {
        console.error('Error: Response without data');
      } else if (error.request) {
        // The request was made but no response was received
        console.error('Error: No response received');
      } else {
        // more error handling
        console.error('Error:', error.message);
      }
    }
  }
  

// Function to test GET requests with a specific name
async function testGETRequest(name) {
  console.log(`Testing GET request for ${name}:`);
  await getRequest(`${baseURL}/welcome/${name}`);
}

// Call the testing function
async function testAxiosClient() {
  // Test with different names
  await testGETRequest('Alice');
  await testGETRequest('Bob');
}

testAxiosClient();
