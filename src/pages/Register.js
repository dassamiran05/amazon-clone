import React, { useContext, useEffect, useRef, useState } from 'react';
import { darklogo } from '../assets';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { Link } from 'react-router-dom';
import { countrycode } from '../Countrycode/Countrycode';
import { toast } from 'react-hot-toast';
import { RotatingLines } from 'react-loader-spinner';
import {avatar} from '../assets/index'
import { AuthContext } from '../contexts/AuthProvider/AuthProvider';


const Register = () => {
    const [showAll, setShowall] = useState(false);
    const [selected, setSelected] = useState("");


    const initialvalues = { name: "", phone: "", email: "", password: "" };
    const [formValues, setFormValues] = useState(initialvalues);
    const [formError, setFormError] = useState({});
    const [loading2, setLoading2] = useState(false);

    const { createUser, upadetUserProfile, varifyEmail } = useContext(AuthContext);



    //For hide of dropdown div while click on body
    const ref = useRef(null);


    useEffect(() => {
        document.body.addEventListener('mousedown', (e) => {
            if (ref.current && !ref.current.contains(e.target)) {
                setShowall(false);
            }
        })
    }, [ref]);


    const handleChangeInput = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
        // setFormError(validate(formValues));
    }

    const handleEmailVerification = () => {
        varifyEmail()
        .then(() => {})
        .catch(error => console.error(error));
    }

    const handleselect = item => {
        setSelected(item);
        setShowall(false);
    }

    const handleSignup = event => {
        event.preventDefault();

        setFormError({});

        const error = validate(formValues);
        setFormError(error);

        if (Object.keys(error).length === 0) {
            const userEmail = formValues.email;
            const userPass = formValues.password;
            const userName = formValues.name;
            // const phone = formValues.phone;



            setLoading2(true);
            createUser(userEmail, userPass)
                .then((userCredential) => {
                    upadetUserProfile(userName, avatar).then(console.log('profile updated')).catch(err => err ? console.log(err) : '');

                    // For registration
                    const user = userCredential.user;
                    setLoading2(false);
                    if (user) {
                        toast.success("Registration done, please verify email");
                    }
                    setFormValues(initialvalues);
                    handleEmailVerification();
                    // setTimeout(() => {
                    //     navigate('/signin')
                    // }, 3000);
                })
                .catch((error) => {
                    const errorCode = error.code;
                    // const errorMessage = error.message;
                    if (errorCode.includes("auth/email-already-in-use")) {
                        setLoading2(false);
                        toast.error("Email already in use, try another one")
                    }
                });
        }
    }


    const validate = values => {
        const errors = {};
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

        if (!values.name) {
            errors.name = 'Enter your name';
        }
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
        if (!values.phone) {
            errors.phone = 'Enter your phone number';
        } else if (values.phone.length !== 10) {
            errors.phone = "Phone must be 10 digit"
        }

        return errors;

    }

    return (
        <div className='w-full'>
            <div className="w-full bg-gray-100 pt-5 pb-10">
                <form onSubmit={handleSignup} className='w-[350px] mx-auto flex flex-col items-center'>
                    <Link to="/"><img src={darklogo} alt="" className='pb-3' /></Link>
                    <div className='w-full border border-zinc-200 p-6'>
                        <h2 className='font-titleFont text-2xl font-medium mb-4'>Create Account</h2>
                        <div className='flex flex-col gap-3'>
                            <div className='flex flex-col gap-2'>
                                <p className="text-sm font-medium">Your name</p>
                                {
                                    formError.name ?
                                        <input className="w-full lowercase py-1 border border-red-400 px-2 text-base rounded-sm outline-none focus-within:border-[#e77600] focus-within:shadow-amazonInput duration-100" type="text" name="name" value={formValues.name} onChange={handleChangeInput} />
                                        :
                                        <input className="w-full lowercase py-1 border border-zinc-400 px-2 text-base rounded-sm outline-none focus-within:border-[#e77600] focus-within:shadow-amazonInput duration-100" type="text" name="name" value={formValues.name} onChange={handleChangeInput} />
                                }

                                {formError.name && <p className='text-xs text-red-500 font-semibold tracking-wide'><span className='italic mr-2'>!</span>{formError.name}</p>}
                            </div>
                            <div className='flex flex-col gap-2'>
                                <p className="text-sm font-medium">Mobile number</p>
                                <div className='flex gap-2'>
                                    <div className="relative w-1/4">
                                        <span onClick={() => setShowall(!showAll)} className='text-xs flex items-center justify-center bg-gradient-to-t from-slate-200 to slate-100 hover:bg-gradient-to-b border border-zinc-400 active:border-yellow-800 active:shadow-amazonInput outline-none px-1 h-full cursor-pointer'>
                                            {/* {
                                            countrycode.map(c => <option>{c.code} {c.dial_code}</option>)
                                        } */}
                                            {selected ? `${selected.code} ${selected.dial_code}` : 'IN 91+'}
                                        </span>

                                        {
                                            showAll && (
                                                <div>
                                                    <ul className='absolute w-56 h-80 top-9 left-0 overflow-y-scroll overflow-x-hidden z-50 bg-white border-[1px] border-amazon_blue text-black flex-col gap-1' ref={ref}>
                                                        {
                                                            countrycode.map(item => <li onClick={() => handleselect(item)} className='text-sm tracking-wide font-titleFont border border-transparent hover:border-gray-500 py-1 px-2 hover:bg-gray-200 cursor-pointer duration-200 active:border-gray-500 active:bg-gray-200'>{item.name} {item.dial_code}</li>)
                                                        }

                                                    </ul>
                                                </div>
                                            )
                                        }
                                    </div>
                                    <div className="w-3/4 relative">
                                        {
                                            formError.phone ?
                                                <input className="w-full lowercase py-1 border border-red-400 px-2 text-base rounded-sm outline-none focus-within:border-[#e77600] focus-within:shadow-amazonInput duration-100" type="text" name="phone" onChange={handleChangeInput} value={formValues.phone} />
                                                :
                                                <input className="w-full lowercase py-1 border border-zinc-400 px-2 text-base rounded-sm outline-none focus-within:border-[#e77600] focus-within:shadow-amazonInput duration-100" type="text" name="phone" onChange={handleChangeInput} value={formValues.phone} />
                                        }
                                        {/* <input className="w-full lowercase py-1 border border-zinc-400 px-2 text-base rounded-sm outline-none focus-within:border-[#e77600] focus-within:shadow-amazonInput duration-100" type="text" name="phone" onChange={handleChangeInput} value={formValues.phone}/> */}
                                        {formError.phone && <p className='text-xs text-red-500 font-semibold tracking-wide absolute mt-2 left-0'><span className='italic mr-2'>!</span>{formError.phone}</p>}
                                    </div>

                                </div>


                            </div>
                            <div className='flex flex-col gap-2'>
                                <p className="text-sm font-medium">Email</p>
                                {
                                    formError.email ?
                                        <input className="w-full lowercase py-1 border border-red-400 px-2 text-base rounded-sm outline-none focus-within:border-[#e77600] focus-within:shadow-amazonInput duration-100" type="email" name="email" onChange={handleChangeInput} value={formValues.email} />
                                        :
                                        <input className="w-full lowercase py-1 border border-zinc-400 px-2 text-base rounded-sm outline-none focus-within:border-[#e77600] focus-within:shadow-amazonInput duration-100" type="email" name="email" onChange={handleChangeInput} value={formValues.email} />
                                }
                                {/* <input className="w-full lowercase py-1 border border-zinc-400 px-2 text-base rounded-sm outline-none focus-within:border-[#e77600] focus-within:shadow-amazonInput duration-100" type="email" name="email" onChange={handleChangeInput} value={formValues.email} /> */}
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
                                {
                                    formError.password ?
                                        formError.password && <p className='text-xs text-red-500 font-semibold tracking-wide'><span className='italic mr-2'>!</span>{formError.password}</p>
                                        :
                                        formValues.password.length > 6 ?
                                            ''
                                            :
                                            <p className="text-xs font-titleFont"><span className="text-blue-600 text-md mr-2 italic">i</span><span>Passwords must be at least 6 characters.</span></p>
                                }


                            </div>
                            <div className='my-3'>
                                <p className='text-xs text-black'>By enrolling your mobile phone number, you consent to receive automated security notifications via text message from Amazon. Message and data rates may apply.</p>
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
                        <div className='flex flex-col gap-1'>
                            <p className='text-xs text-black leading-4 mt-4'>Already have an account?{" "}<Link to="/signin"><span className="cursor-pointer text-blue-600 hover:text-red-600 hover:underline">Sign in</span></Link></p>
                            <p className='text-xs text-black leading-4'>
                                Buying for work? Create a free <span className="cursor-pointer text-blue-600 hover:text-red-600 hover:underline">business account</span></p>
                        </div>

                        <p className='text-xs text-black leading-4 mt-4'>By continuing, you agree to Amazon's <span className="cursor-pointer text-blue-600 hover:text-red-600 hover:underline">Conditions of Use</span> and <span className="cursor-pointer text-blue-600 hover:text-red-600 hover:underline">Privacy Notice</span>.</p>
                        <p className="text-xs text-gray-600 mt-2 cursor-pointer group"><ArrowRightIcon className="text-blue-600 group-hover:text-red-600" /> <span className='text-blue-600 group-hover:text-red-600 group-hover:underline underline-offset-1'>Need help?</span></p>
                    </div>
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

export default Register;