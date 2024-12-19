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
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof id !== 'number') {
                reject(new Error('Provided id not valid')); 
                return;
            }
            if (id >= 1 && id <= 999) {
                resolve({ id, name: `User ${id}` }); 
            } else {
                reject(new Error('User id not found')); 
            }
        }, 200);
    });
}

// Exercise 4
export async function fetchAsyncData(asyncCallback) {
    try {
        const result = await asyncCallback();
        return {
            status: "success",
            data: result
        };
    } catch (error) {
        return {
            status: "error",
            message: error
        };
    }
}

// Exercise 5
export async function getCommentsAsync(fetchUser, fetchPosts, fetchComments) {
    try {
        const userId = await fetchUser();
        const postIds = await fetchPosts(userId);
        const comments = await fetchComments(postIds);
        return comments;
    } catch (error) {
        throw new Error(`Error: ${error}`);
    }
}

// Exercise 6 
export function createTaskWorker() {

}