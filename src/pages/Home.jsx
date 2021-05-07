import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

function Home({ user }) {
  return (
    <div style={{ textAlign: 'center', padding: 50 }}>
      <h1>Home Page</h1>
      <h2>Welcome to my page</h2>
      <h4>username: {user.email}</h4>
      <h4>password: {user.password}</h4>
      <Link to="/login">Log In</Link>
    </div>
  )
}

const mapStateToProps = state => ({
  user: state.auth.user
})

export default connect(mapStateToProps)(Home);