import React, { useState } from 'react';
import './Login.css';
import { auth } from './firebase';
import { useDispatch } from 'react-redux';
import { login } from './features/counterUser';

function Login() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [profilePic, setProfilePic] = useState('');
  const dispatch = useDispatch();

  const loginToApp = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((userAuth) => {
        dispatch(
          login({
            email: userAuth.user.emial,
            uid: userAuth.user.uid,
            displayName: userAuth.user.displayName,
            profileUrl: userAuth.user.photoURL,
          })
        );
      })
      .catch((error) => alert('Please eneter a full name'));
  };

  const register = () => {
    if (!name) {
      return alert('Please eneter a full name');
    }
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((userAuth) => {
        userAuth.user
          .updateProfile({
            displayName: name,
            photoURL: profilePic,
          })
          .then(() => {
            dispatch(
              login({
                email: userAuth.user.email,
                uid: userAuth.user.uid,
                displayName: name,
                photoUrl: profilePic,
              })
            );
          });
      })
      .catch((error) => alert(error));
  };
  return (
    <div className="login">
      <img
        src="https://blog.waalaxy.com/wp-content/uploads/2021/01/Linkedin-Logo-2048x1280.png"
        alt=""
      />
      <form>
        <input
          placeholder="Full name(required if registering)"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          value={profilePic}
          onChange={(e) => setProfilePic(e.target.value)}
          placeholder="Profile pic URL (oprional)"
        />
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="Email"
        />
        <input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          placeholder="password"
        />

        <button onClick={loginToApp} type="submit">
          Sign In
        </button>
      </form>
      <p>
        Not a member?
        <span className="login__register" onClick={register}>
          Register Now!
        </span>
      </p>
    </div>
  );
}

export default Login;
