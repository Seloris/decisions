import type { NextPage } from 'next'
import Head from 'next/head'

interface DecisionMethod {
  type: 'random' | 'weight'
  title: string
  description: string
}

const methods: DecisionMethod[] = [
  {
    type: 'weight',
    title: '+/-',
    description: "Let's count",
  },
  {
    type: 'random',
    title: 'Random',
    description: 'Let the fate decide for you',
  },
]

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Decision</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <h1 className="text-6xl font-bold">Decisions</h1>

        <div className="mt-6 flex max-w-4xl flex-wrap items-center justify-around sm:w-full">
          {methods.map((m) => (
            <a
              href={m.type}
              className="mt-6 w-96 rounded-xl border p-6 text-left hover:cursor-pointer hover:text-blue-600"
            >
              <h3 className="text-2xl font-bold">{m.title}</h3>
              <p className="mt-4 text-xl">{m.description}</p>
            </a>
          ))}
        </div>
      </main>
    </div>
  )
}

export default Home
