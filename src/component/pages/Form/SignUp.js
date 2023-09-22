
import React from 'react';
import './Form.css';
import logo from '../../../Image/signinLogo.svg'
import { useState } from 'react'
import { useNavigate } from 'react-router';
import FormIcons from './FormIcons';
function SignUp() {

const navigate = useNavigate()

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [userName, setUserName] = useState('');
    const [psderror , setPsdError] = useState('');
    const [nameError , setNameError] = useState('');
    const [emailError , setEmailError] = useState('');

    const handlName = (event) => {
        setUserName(event.target.value);
        setNameError('');
        
      };
      const handlEmail = (event) => {        
        setEmail(event.target.value);
        setEmailError('');        
      };
      const handlePsd = (event) => {        
        setPassword(event.target.value);
        setPsdError('');
      };

    function formSubmit(e) {
        
        e.preventDefault();
       if (userName === '') {
        setNameError('User Name is required*')
       }  if(email === ''){
        setEmailError('Email is required*')
       }else if(!email.includes('@')){
        setEmailError('Please enter valid Email*')
       } if(password === ''){
        setPsdError('Password is required*')
       }else if(password.length < 8){
        setPsdError('Minimum 8 characters are required*')
       } else{
        localStorage.setItem('UserName', userName)
        localStorage.setItem('Email', email)
        localStorage.setItem('Password', password)
        alert('Account created suucessfully')
        

        setEmail('')
        setPassword('')
        setUserName('')
        setEmailError('')
        setNameError('')
        setPsdError('')
        navigate("/sign-in")

       }        
    }

    return (
        <div>
            <div className="main">
                <div className="signUpBox shadow-sm">
                    <div className="row">
                        <div className="col-12"><img src={logo} alt="logo" /></div>
                        <div className="col-12"><h1 className='signInHeading'>Sign up</h1></div>
                        <div className="col-12"><span className='mt-2 text-muted'>Already have an account?  <a className='text-decoration-none' href="sign-in" style={{ color: "#754ffe" }} >Sign In</a></span></div>
                    </div>

                    <form onSubmit={formSubmit}>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label mt-4">User name </label>
                            <input type="name" className="form-control" placeholder='User Name' value={userName} onChange={handlName} />
                            <p className='text-danger'>{nameError}</p>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label ">Email</label>
                            <input type="text" className="form-control" placeholder='Enter email here' value={email} onChange={handlEmail} autoSave='off' autoComplete='off' />
                            <p className='text-danger'>{emailError}</p>
                        </div>
                       
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label ">Password</label>
                            <input type="password" className="form-control" placeholder='******' value={password} onChange={handlePsd} autoSave='off' autoComplete='off' />
                            <p className='text-danger'>{psderror}</p>
                        </div>

                        <div className="mb-3 form-check">
                            <input type="checkbox"  className="form-check-input" />
                            <label className="form-check-label text-muted" >I agree to the <a className='text-decoration-none' href="#" style={{ color: "#754ffe" }}>Terms of services</a> and <a className='text-decoration-none' href="#" style={{ color: "#754ffe" }}>Privacy Policy.</a></label>

                        </div>
                        <button type="submit" className="form-control text-white fw-bold btn mt-3" style={{ backgroundColor: "#754ffe" }}>Create Free Account</button>
                    </form>
                    <hr />
                    {/* social links */}
                   <FormIcons />
                </div>
            </div>
        </div>

    )
}
export default SignUp

