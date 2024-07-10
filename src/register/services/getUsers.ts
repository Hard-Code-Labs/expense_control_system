export const getUsers = async () => {

  const options = {
    method: "GET",
    headers: {
      'Content-Type': 'application/json',
    },
  }

  const response = await fetch("https://inquisitive-sarita-hardcodelabs-7e4c08e2.koyeb.app/xis/person", options)
  // const response = await fetch("https://inquisitive-sarita-hardcodelabs-7e4c08e2.koyeb.app/xis/person", {method: "GET",
  //   headers: {
  //     'Content-Type': 'application/json',
  //   },
  //   mode: 'cors',
  //   credentials: 'include'})

  return response
}