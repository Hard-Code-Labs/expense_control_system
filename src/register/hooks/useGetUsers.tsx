import { useEffect, useState } from "react"
import { getUsers } from "../services/getUsers"
import { Users } from "../types";

export const useGetUsers = () => {

  const [users, setUsers] = useState<Users [] | undefined>();

  const fetchUsers = () => {
    getUsers()
      .then(response => response.json())
      .then(data => setUsers(data))
      .catch(error => console.error("Error fetching categories:", error))
  }

  useEffect(() => {
    fetchUsers()
  }, [])

  return {
    users,
    fetchUsers
  }
}