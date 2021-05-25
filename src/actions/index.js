export const getUser = user => ({
  type: 'GET_USER',
  user
})

export const isLoading = isLoading => ({
  type: 'IS_LOADING',
  isLoading
});

export const hasErrored = errorMsg => ({
  type: 'HAS_ERRORED',
  errorMsg
});
