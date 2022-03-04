import React, { useEffect, useState } from 'react'
import GoogleIcon from '@mui/icons-material/Google';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Slide from 'react-reveal/Slide'
import { Link } from 'react-router-dom'
import useInputValidator from '../../hooks/validInput'

const LoginForm = () => {
    // for display of password on clicking the show password button
    const [showPassword, setShowPassoword] = useState(false)
    // for validating the email and password
    const [isError, setError] = useState(false);
    const [formIsValid, setFormIsValid] = useState(false);
    // const [isSubmit, setIsSubmit] = useState(false);
    const handlePasswordShowChange = (event) => {
        setShowPassoword(event.target.checked);
        console.log(event.target.checked)
    };
    // validating email
    const {
        value: email,
        valueIsValid: emailIsValid,
        hasError: emailHasError,
        inputChangeHandler: emailChangeHandler,
        reset: emailReset,
    } = useInputValidator((val) => val.includes("@") && val.includes("."));
    // validating password
    const {
        value: password,
        valueIsValid: passwordIsValid,
        hasError: passwordHasError,
        inputChangeHandler: passwordChangeHandler,
        reset: passwordReset,
    } = useInputValidator((val) => val.length > 8);

    useEffect(() => {
        if (passwordIsValid && emailIsValid) {
            setFormIsValid(true);
        } else {
            setFormIsValid(false);
        }
    }, [passwordIsValid && emailIsValid]);
    const submitHandler = (event) => {
        event.preventDefault();
        emailReset();
        passwordReset();
        if (!formIsValid) {
            setError(true);
            return;
        }
        emailReset();
        passwordReset();
    }





    return (
        <div className='h-[100%] sm:h-[70%] md:h-[70%] lg:h-[70%] w-full m-auto flex flex-col'>

            {/* adding the form */}
            <form action="" className="flex h-[55%] flex-col w-full justify-around mx-auto" onSubmit={submitHandler}>
                {/* username */}
                <Slide right duration={500}>

                    <section className="flex w-full mx-auto my-0 sm:my-4" >
                        <input onChange={emailChangeHandler} value={email} type="text" name="" id="" placeholder='Enter Email' className=' mx-auto w-[70%] border-[1px] rounded-2xl p-2 sm:p-4 md:p-4 placeholder:text-gray-200 bg-transparent opacity-[0.7] text-gray-200 outline-transparent' />
                    </section>
                </Slide>
                {/* password */}
                <Slide right duration={900}>
                    <section className="flex w-full mx-auto flex-col  my-0 sm:my-4">
                        <input onChange={passwordChangeHandler} value={password} type={`${showPassword ? 'text' : 'password'}`} name="" id="" placeholder='Enter Password' className=' mx-auto w-[70%] border-[1px] rounded-2xl p-2 sm:p-4 md:p-4 placeholder:text-gray-200 bg-transparent opacity-[0.7] text-gray-200 outline-transparent' />
                        <section className="w-[70%] mx-auto">
                            <FormGroup>
                                <FormControlLabel control={<Checkbox defaultChecked checked={showPassword}
                                    onChange={handlePasswordShowChange}
                                    inputProps={{ 'aria-label': 'controlled' }} color="warning"
                                />} label="Show Password" color="warning" />
                            </FormGroup>
                        </section>

                    </section>
                </Slide>

                {/* button */}
                <Slide right duration={1100}>
                    <section className="flex mx-auto  bg-gradient-to-br from-[#ff8f70] to-[#ff3d54] w-[70%] py-2 sm:py-4 rounded-2xl cursor-pointer" onCLick={submitHandler}>
                        <button className="mx-auto font-semibold tracking-widest">
                            LOGIN
                        </button>
                    </section>
                </Slide>
            </form>
            {/* adding the form details (forget password)*/}
            <Slide right duration={1000}>
                <section className="flex h-[20%] w-[55%]">
                    <p className='mx-auto text-blue-400 m-auto'>Forgot Password?</p>
                </section>
                {/* adding the social links */}
                <section className="flex h-[25%] flex-col mx-auto justify-between">
                    {/* google signin */}
                    <section className="flex mx-auto h-[40%] justify-center items-center">

                        <p className='text-gray-400 px-4'>Sign in with </p>
                        <GoogleIcon className='text-[#ff8f70]' style={{ fontSize: 35 }} />
                    </section>
                    {/* adding the create account */}
                    <section className="flex h-[40%]">
                        <p className="text-gray-400"> New to Blogerr BEE?</p>
                        <Link to="/signup">
                            <p className="text-gray-400 px-2 underline-offset-1 underline underline-[#ff8f70]">Create Account</p>
                        </Link>
                    </section>
                </section>
            </Slide>
        </div>
    )
}

export default LoginForm