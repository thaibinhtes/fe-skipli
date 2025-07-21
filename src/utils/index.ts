const NAME_TOKEN = 'token'
export const setTokenAuth = (token: string) => {
  localStorage.setItem(NAME_TOKEN, token)
}

export const getTokenAuth = () => {
  return localStorage.getItem(NAME_TOKEN)
}

export const deleteTokenAuth = () => {
  localStorage.setItem(NAME_TOKEN, '')
}
