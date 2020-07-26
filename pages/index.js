import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="onboarding">
      <Head>
        <title>Scracth</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <section className="hero">
          <div className="hero-body">
            <div className="container">
              <img className="mb-6" src="/images/Logo.png" width="112" height="28" />
              <h1 className="title">
                Join over 50 millions people <br/> sharing recipes everyday
              </h1>
              <h4 className="subtitle">
                Never run out of ideas again. Try new foods, ingredients, cooking style, and more
              </h4>

              <div className="columns">
                <div className="column is-one-quarter">
                  <Link href="/login">
                    <button className="button is-success is-fullwidth">Join Scratch</button>
                  </Link>
                </div>
                <div className="column is-one-quarter">
                < button className="button is-success is-fullwidth is-outlined">Learn More</button>
                </div>
              </div>
            </div>
          </div>
        </section>
    </div>
  )
}
