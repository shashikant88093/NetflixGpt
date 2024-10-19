import React, { useState, useRef } from 'react';

// components
import Header from '../Header/index';

// validation function
import checkValidaData from '../../utils/validate';

// Third party library
// firebase
import {createUserWithEmailAndPassword, signInWithEmailAndPassword} from 'firebase/auth';
import {auth} from "../../utils/firebase"

// import {Formik} from 'formik'

interface FormValueType {
  userName: string;
  password: string;
  email: string;
}

const Login: React.FC = () => {
  const [toggleForm, setToggleForm] = useState<string>('Sign In');
  const [formValue, setFormValue] = useState<FormValueType>({
    userName: '',
    password: '',
    email: '',
  });
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const email = useRef<HTMLInputElement>(null);
  const password = useRef<HTMLInputElement>(null);
  const handleToggle = (): void => {
    setToggleForm((prev) => (prev === 'Sign In' ? 'Sign Up' : 'Sign In'));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setFormValue((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    // Add form submission logic here.
    console.log(email, password, 'preint pls');
    if (email.current && password.current) {
      const message = checkValidaData(
        email.current.value,
        password.current.value,
      );
      console.log(message, 'message');
      if (typeof message === 'string') {
        setErrorMessage(message);
      } else {
        setErrorMessage(null);
        console.log('Form submitted with:', email, password);
        // Add further submission logic here (e.g., API call)
      }
      if (message) return;
      if (toggleForm === 'Sign In' && message ===null) {
        console.log(toggleForm,"toggleform")

        signInWithEmailAndPassword(auth,formValue.email,formValue.password)
        .then((userCredential)=>{
          const user = userCredential.user
          console.log(user,"signin")
        })
        .catch((error)=>{
          const errorCode = error.code;
          const errorMessage = error.message
          setErrorMessage(errorCode+"_"+errorMessage)
          console.log(errorCode,errorMessage)
        })


      } else if (message === 'Sign Up' && message ===null) {
        createUserWithEmailAndPassword(auth,formValue.email,formValue.password)
        .then((useCredential)=>{
          const user = useCredential.user
          console.log(user,"user")
        })
        .catch((error)=>{
          const errorCode = error.code;
          const errorMessage = error.message
          setErrorMessage(errorCode+"_"+errorMessage)
          console.log(errorCode,errorMessage)
        })
      }
      console.log(
        'Form submitted with:',
        email.current.value,
        password.current.value,
      );
    }
  };

  return (
    <div>
      <Header />
      <div>
        <img
          className="absolute w-full h-full"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/f272782d-cf96-4988-a675-6db2afd165e0/web/IN-en-20241008-TRIFECTA-perspective_b28b640f-cee0-426b-ac3a-7c000d3b41b7_medium.jpg"
          alt="Netflix background"
        />
      </div>
      <div>
        <form
          className="absolute p-12 w-1/2 bg-black bg-opacity-80 my-24 mx-auto right-0 left-0 text-white"
          onSubmit={handleSubmit}
        >
          <h1 className="font-bold mb-4 text-2xl">{toggleForm}</h1>
          {toggleForm === 'Sign Up' && (
            <input
              type="text"
              placeholder="Full name"
              value={formValue.userName}
              name="userName"
              onChange={handleChange}
              className="border-white font-normal rounded px-8 py-4 mb-4 bg-zinc-800 w-full"
            />
          )}
          <input
            ref={email}
            type="text"
            placeholder="Email or mobile number"
            value={formValue.email}
            name="email"
            onChange={handleChange}
            className="border-white font-normal rounded px-8 py-4 mb-4 bg-zinc-800 w-full"
          />

          <input
            ref={password}
            type="password"
            placeholder="Password"
            value={formValue.password}
            name="password"
            onChange={handleChange}
            className="border-white rounded px-8 py-4 mb-4 bg-zinc-800 w-full"
          />
          <p className="text-red-500 py-2 font-bold font-xl">{errorMessage}</p>
          <button
            type="submit"
            className="bg-[#C11119] rounded font-semibold px-8 py-2 w-full"
          >
            {toggleForm}
          </button>
          <h2 className="text-center mt-4">OR</h2>

          <button
            type="button"
            onClick={handleToggle}
            className="text-center mt-4 text-white"
          >
            {/* New to Netflix?{' '} */}
            {toggleForm === 'Sign In' ? 'New to Netflix' : 'Already register'}
            <span className="pl-2 text-xl font-bold">
              {toggleForm === 'Sign In' ? 'Sign Up' : 'Sign In'} now.
            </span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
