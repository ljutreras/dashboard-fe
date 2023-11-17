import Layout from '../components/Layout'
import Users from "../components/Users"
import { useState } from 'react'

export default function Home({ allUsers }) {

  const [users, setusers] = useState(allUsers)
  const [load, setLoad] = useState(true)

  return (
    <Layout>
      {load && <Users allUsers={users} />}
    </Layout>
  )
}

export async function getServerSideProps() {

  const res = await fetch(`http://localhost:3001/user/all`)
  const allUsers = await res.json()
  return { props: { allUsers } }

}