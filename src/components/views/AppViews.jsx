import { useEffect, useState } from "react"
import { UserView } from "./UserView.jsx"


export const AppViews = () => {
  const [currentUser, setCurrentUser] = useState({})

  useEffect(() => {
    const localLitUser = localStorage.getItem("literary_user")
    const litUserObj = JSON.parse(localLitUser)

    setCurrentUser(litUserObj)
  }, [])

  return <UserView currentUser={currentUser} />
  }
  