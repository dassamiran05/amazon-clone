import React, { useContext, useState } from 'react';
import { darklogo } from '../assets';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import { RotatingLines } from 'react-loader-spinner';
import { AuthContext } from '../contexts/AuthProvider/AuthProvider';
// import Loading from '../pages/Loading';


const Signin = () => {
    const initialvalues = { email: "", password: "" };
    const [formValues, setFormValues] = useState(initialvalues);
    const [formError, setFormError] = useState({});

    const [loading2, setLoading2] = useState(false);

    const {signInUser} = useContext(AuthContext);

    const navigate = useNavigate();


    const handleChangeInput = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
        // setFormError(validate(formValues));
    }

    

    

    const handleSignin = event => {
        event.preventDefault();

        setFormError({});

        const error = validate(formValues);
        setFormError(error);

        if (Object.keys(error).length === 0) {
            const userEmail = formValues.email;
            const userPass = formValues.password;

            

            setLoading2(true);
            signInUser( userEmail, userPass)
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                    console.log(user);
                    setLoading2(false);
                    if (user) {
                        toast.success('User logged in successfully');
                    }
                    setFormValues(initialvalues);
                    setTimeout(() => { navigate('/') }, 3000);
                })
                .catch((error) => {
                    const errorCode = error.code;
                    // const errorMessage = error.message;
                    if (errorCode.includes('auth/user-not-found')) {
                        toast.error("No user by this email");
                    } else if (errorCode.includes('auth/wrong-password')) {
                        toast.error('Wrong credential. !try again');
                    }
                    setLoading2(false);
                });
        }
    }




    const validate = values => {
        const errors = {};
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;


        if (!values.email) {
            errors.email = 'Enter your email';
        } else if (!regex.test(values.email)) {
            errors.email = 'This is not a valid email';
        }
        if (!values.password) {
            errors.password = 'Enter your password';
        } else if (values.password.length < 6) {
            errors.password = 'Minimum password length is 6';
        } else if (values.password.length > 10) {
            errors.password = 'Maximum password length is 10';
        }

        return errors;

    }
    return (
        <div className='w-full'>
            <div className="w-full bg-gray-100 pt-5 pb-10">
                <form onSubmit={handleSignin} className='w-[350px] mx-auto flex flex-col items-center'>
                    <Link to="/"><img src={darklogo} alt="" className='pb-3' /></Link>
                    <div className='w-full border border-zinc-200 p-6'>
                        <h2 className='font-titleFont text-2xl font-medium mb-4'>Sign in</h2>
                        <div className='flex flex-col gap-3'>
                            <div className='flex flex-col gap-2'>
                                <p className="text-sm font-medium">Email or mobile phone number</p>
                                {
                                    formError.email ?
                                        <input className="w-full lowercase py-1 border border-red-400 px-2 text-base rounded-sm outline-none focus-within:border-[#e77600] focus-within:shadow-amazonInput duration-100" type="email" name='email' onChange={handleChangeInput} value={formValues.email} />
                                        :
                                        <input className="w-full lowercase py-1 border border-zinc-400 px-2 text-base rounded-sm outline-none focus-within:border-[#e77600] focus-within:shadow-amazonInput duration-100" type="email" name='email' onChange={handleChangeInput} value={formValues.email} />
                                }
                                {formError.email && <p className='text-xs text-red-500 font-semibold tracking-wide'><span className='italic mr-2'>!</span>{formError.email}</p>}
                            </div>
                            <div className='flex flex-col gap-2'>
                                <p className="text-sm font-medium">Password</p>
                                {
                                    formError.password ?
                                        <input className="w-full lowercase py-1 border border-red-400 px-2 text-base rounded-sm outline-none focus-within:border-[#e77600] focus-within:shadow-amazonInput duration-100" type="password" name="password" onChange={handleChangeInput} value={formValues.password} />
                                        :
                                        <input className="w-full lowercase py-1 border border-zinc-400 px-2 text-base rounded-sm outline-none focus-within:border-[#e77600] focus-within:shadow-amazonInput duration-100" type="password" name="password" onChange={handleChangeInput} value={formValues.password} />

                                }
                                {formError.password && <p className='text-xs text-red-500 font-semibold tracking-wide'><span className='italic mr-2'>!</span>{formError.password}</p>}
                            </div>
                            <button className="w-full py-1.5 text-sm font-normal rounded-sm bg-gradient-to-t from-[#f7dfa5] to-[#f0c14b] hover:bg-gradient-to-b border border-zinc-400 active:border-yellow-800 active:shadow-amazonInput">Continue</button>
                            {
                                loading2 && (
                                    <div className='flex justify-center'>
                                        <RotatingLines
                                            strokeColor="#febb69"
                                            strokeWidth="5"
                                            animationDuration="0.75"
                                            width="50"
                                            visible={true}
                                        />
                                    </div>
                                )
                            }
                        </div>
                        <p className='text-xs text-black leading-4 mt-4'>By continuing, you agree to Amazon's <span className="cursor-pointer text-blue-600 hover:text-red-600 hover:underline">Conditions of Use</span> and <span className="cursor-pointer text-blue-600 hover:text-red-600 hover:underline">Privacy Notice</span>.</p>
                        <p className="text-xs text-gray-600 mt-2 cursor-pointer"><ArrowRightIcon /> <span className='text-blue-600 hover:text-red-600 hover:underline'>Need help?</span></p>
                    </div>

                    <p className='w-full text-xs text-gray-600 mt-4 flex items-center'>
                        <span className='w-1/3 h-[1px] bg-zinc-400 inline-flex'></span>
                        <span className='w-1/3 text-center'>New to Amazon</span>
                        <span className='w-1/3 h-[1px] bg-zinc-400 inline-flex'></span>
                    </p>
                    <Link to="/signup" className='w-full'>
                        <button className='w-full py-1.5 mt-4 text-sm font-normal rounded-sm bg-gradient-to-t from-slate-200 to slate-100 hover:bg-gradient-to-b border border-zinc-400 active:border-yellow-800 active:shadow-amazonInput'>Create your Amazon Account</button>
                    </Link>
                </form>
            </div>
            <div className="w-full bg-gradient-to-t from-white via-white to-zinc-200 flex flex-col items-center justify-center gap-4 py-7">
                <div className='flex items-center gap-6'>
                    <p className='text-xs text-blue-600 hover:text-orange-600 hover:underline underline-offset-1 cursor-pointer duration-100'>Conditions of use</p>
                    <p className='text-xs text-blue-600 hover:text-orange-600 hover:underline underline-offset-1 cursor-pointer duration-100'>Privacy Notice</p>
                    <p className='text-xs text-blue-600 hover:text-orange-600 hover:underline underline-offset-1 cursor-pointer duration-100'>Help</p>
                </div>
                <p className='text-xs text-gray-600'>© 1996-2023, Amazon.com, Inc. or its affiliates</p>
            </div>
        </div>
    );
};

export default Signin;