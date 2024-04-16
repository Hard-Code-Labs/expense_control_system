const url = "https://gfrishrogyzckgrqsivs.supabase.co/rest/v1/exp_category_person?select=*";
const apiKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdmcmlzaHJvZ3l6Y2tncnFzaXZzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTE5NDA2MDMsImV4cCI6MjAyNzUxNjYwM30.I5FoCBE9dVUa29RIC8F6GiOzD3Qq7yH8gXNh8sziQ24";
const authorization = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdmcmlzaHJvZ3l6Y2tncnFzaXZzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTE5NDA2MDMsImV4cCI6MjAyNzUxNjYwM30.I5FoCBE9dVUa29RIC8F6GiOzD3Qq7yH8gXNh8sziQ24";


export const getCategories = async () => {

  const options = {
    method: "GET",
    headers: {
      'Content-Type': 'application/json',
      'apikey': apiKey,
      'Authorization': authorization,
    },
  }

  const request = fetch(url, options)

  return request
}