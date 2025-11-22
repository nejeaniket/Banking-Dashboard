export const fakeAuth = async ({ username, password }) => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      if (!username) return rej(new Error('Username required'))
      res({ token: 'demo-token', user: { username, role: 'user' } })
    }, 400)
  })
}
