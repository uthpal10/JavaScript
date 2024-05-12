// Function to simulate asynchronous processing
function processElement(element) {
    return new Promise( (resolve, reject) => {
      // Simulating asynchronous processing with setTimeout
      setTimeout( () => {
        const processedElement = element.toUpperCase(); // Just an example processing
        resolve(processedElement);
      }, Math.random() * 1000); // Random timeout to simulate async processing time
    });
  }
  
  // Function to handle array using async/await
  async function handleArray(arr) 
  {
    const processedArray = [];
  
    for (const element of arr) 
    {
      try {
            const processedElement = await processElement(element);
            processedArray.push(processedElement);
          } 
      catch (error) 
      {
        console.error('Error processing element:', error);
      }
    }
    return processedArray;
  }
  // Example usage
  const inputArray = ['apple', 'banana', 'cherry'];
  
  handleArray(inputArray)
    .then(processed => 
    {
      console.log('Processed array:', processed);
    })
    .catch(err => 
    {
      console.error('Error processing array:', err);
    });