import { memo, useState } from "react"

type UsersProps = {
    users: string[]
    onAddClick: () => void
}

const Users = ({users, onAddClick}: UsersProps) => {

    console.log('users')

    
    return <div>
        {users.map((el, i) => <li key={i}>{el}</li>)}
        <button onClick={onAddClick} /* disabled={title.trim().length === 0 ? true : false} */>Add user</button>
    </div>
}

const UserList = memo(Users, arePropsEqual) 
function arePropsEqual(oldProps: UsersProps, newProps: UsersProps) {
    return (
      oldProps.users === newProps.users 
      )
  }

export default UserList  