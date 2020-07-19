import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="onboarding">
      <Head>
        <title>Scracth</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <section class="hero">
          <div class="hero-body">
            <div class="container">
              <img className="mb-6" src="/images/Logo.png" width="112" height="28" />
              <h1 class="title">
                Join over 50 millions people <br/> sharing recipes everyday
              </h1>
              <h4 class="subtitle">
                Never run out of ideas again. Try new foods, ingredients, cooking style, and more
              </h4>

              <div class="columns">
                <div class="column is-one-quarter">
                  <Link href="/login">
                    <button class="button is-success is-fullwidth">Join Scratch</button>
                  </Link>
                </div>
                <div class="column is-one-quarter">
                < button class="button is-success is-fullwidth is-outlined">Learn More</button>
                </div>
              </div>
            </div>
          </div>
        </section>
    </div>
  )
}
