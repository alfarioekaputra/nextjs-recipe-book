import Head from 'next/head'
import Link from 'next/link'

//components
import Input from '../components/Form/Input'
import Button from '../components/Form/Button'

export default function Login() {
  return (
    <div className="login-background">
        <Head>
            <title>Login</title>
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
                            <h1 className="title is-4">Welcome Back!</h1>
                            <h4 className="subtitle">Please login to continue.</h4>

                            <form>
                                <Input label="Email address" type="text" name="email" value="" placeholder="user@mail.com" onChange="change" />
                                <Input label="Password" type="password" name="password" value="" placeholder="password" onChange="change" />
                                <Button label="Login" className="button is-success is-fullwidth" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}
