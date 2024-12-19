// Exercise 1
export function fetchUser(id, callback) { 
    if (id === 1) {
        callback("Brendan Eich"); 
        return true; 
    } else if (id === 2) {
        callback("Douglas Crockford"); 
        return true; 
    } else if (id === 3) {
        callback("Jeremy Ashkenas"); 
        return true; 
    } 
    return false; 
}

// Exercise 2
export function getComments(fetchUser, fetchPosts, fetchComments) {
    return fetchUser()
    .then((userId) => {
        return fetchPosts(userId);
    })
    .then((postIds) => {
        return fetchComments(postIds);
    })
    .then((comments) => {
        return comments;
    })
    .catch((error) => {
        throw new Error(`Error: ${error}`);
    });
}

// Exercise 3
export function fetchUserPromise(id) {

}

// Exercise 4
export async function fetchAsyncData(asyncCallback) {

}

// Exercise 5
export async function getCommentsAsync(fetchUser, fetchPosts, fetchComments) {

}

// Exercise 6 
export function createTaskWorker() {

}