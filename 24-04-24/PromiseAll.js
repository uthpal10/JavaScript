// Simulated asynchronous functions
function fetchUser() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ id: 1, name: 'Alice' });
    }, 1000);
  });
}

function fetchPosts() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([{ id: 1, title: 'Post 1' }, { id: 2, title: 'Post 2' }]);
    }, 1500);
  });
}

function fetchComments() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([{ id: 1, content: 'Comment 1' }, { id: 2, content: 'Comment 2' }]);
    }, 2000);
  });
}

// Using Promise.all() to handle multiple asynchronous operations
Promise.all([fetchUser(), fetchPosts(), fetchComments()])
  .then((results) => {
    const [user, posts, comments] = results;
    console.log('User:', user);
    console.log('Posts:', posts);
    console.log('Comments:', comments);
  })
  .catch((error) => {
    console.error('Error:', error);
  });
