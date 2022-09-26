import React from 'react'
import { List, ListItem, ListItemButton, ListItemText } from '@mui/material';

export const getStaticProps = async () => {

  const response = await fetch('https://jsonplaceholder.typicode.com/users')

  const json = await response.json()


  return {
    props: {users: json}
  }


}

const Nested = ({users}) => {

  console.log(users)
  return (
    <>
      <List>
      {
        users && users.map((user) => {
          return  <ListItem disablePadding key={user.id}>
          <ListItemButton>
            <ListItemText primary={user.name} />
          </ListItemButton>
        </ListItem>
        })
      }
      </List>
    </>
  )
}

export default Nested