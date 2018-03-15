import React from 'react'
import Link from 'next/link'
import { firebaseAuth } from '../../lib/firebase/'

export default class Login extends React.Component {
  onSubmit(e) {
    e.preventDefault()

    firebaseAuth().signInWithEmailAndPassword(e.target.email.value, e.target.password.value)
    .then(data => {
      console.log('success')
      console.log(data)
    })
    .catch(e => {
      if (e) console.log(`${e.code} : ${e.message}`)
    })
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <h1>Login</h1>
        Email: <input type="email" name="email" />
        Password: <input type="password" name="password" />
        <input type="submit" />
        <Link href="/signup">to sign up</Link>
      </form>
    )
  }
}