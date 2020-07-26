import React, {useState} from 'react';
import Head from 'next/head'
import Link from 'next/link'

//components
import Input from '../components/Form/Input'
import Button from '../components/Form/Button'

export default function Register() {
    const initState = {fullname:'', email: '', password: ''};

    const [register, setRegister] = useState(initState);

    const handleChange = e => {
        const {name, value} = e.target;
        setRegister({...register, [name]: value});
    };

    return (
        <div className="login-background">
            <Head>
                <title>Register</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <section className="container">
                <div className="columns is-multiline">
                    <div className="column is-8 is-offset-2 register">
                        <div className="columns">
                            <div className="column left">
                                <img className="mb-6" src="/images/Logo-login.png" width="200" height="58" />
                            </div>
                            <div className="column right">
                                <h1 className="title is-4">Start from Scracth</h1>
                                <h4 className="subtitle">Create Account to continue.</h4>

                                <form>
                                    <Input label="Full Name" type="text" name="fullname" value={register.fullname} placeholder="John Doe" onChange={handleChange} />
                                    <Input label="Email address" type="text" name="email" value={register.email} placeholder="user@mail.com" onChange={handleChange} />
                                    <Input label="Password" type="password" name="password" value={register.password} placeholder="password" onChange={handleChange} />
                                    <Button label="Sign Up" className="button is-success is-fullwidth" />
                                </form>
                                <p className="mt-6 has-text-centered is-size-6 has-text-grey">Already have account?</p>
                                <p className="mt-1 has-text-centered is-size-6 has-text-grey">
                                    <Link href="/login">
                                        <a>Login Here</a>
                                    </Link>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
