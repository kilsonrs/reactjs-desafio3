/**
 * addGitUser
 */

export const addGitUserRequest = input => ({
  type: "ADD_GITUSER_REQUEST",
  payload: { input }
});

//REQUEST -> SAGA -> CHAMADA API -> SUCCESS

export const addGitUserSuccess = data => ({
  type: "ADD_GITUSER_SUCCESS",
  payload: { data }
});

export const addGitUserFailure = error => ({
  type: "ADD_GITUSER_FAILURE",
  payload: { error }
});

/**
 * removeGitUser
 */
export const removeGitUserRequest = id => ({
  type: "REMOVE_GITUSER_REQUEST",
  payload: { id }
});

export const removeGitUserSuccess = id => ({
  type: "REMOVE_GITUSER_SUCCESS",
  payload: { id }
});
