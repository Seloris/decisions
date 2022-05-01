import type { NextPage } from 'next'

interface DecisionMethod {
  type: 'random' | 'weightedCriteria'
  title: string
  description: string
}

const methods: DecisionMethod[] = [
  {
    type: 'weightedCriteria',
    title: 'Weighted Criteria Matrix',
    description:
      'Enter your criteria, weight them and see which choice has most points',
  },
  {
    type: 'random',
    title: 'Random',
    description: 'Let the fate decide for you',
  },
]

const Home: NextPage = () => {
  return (
    <div>
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
    </div>
  )
}

export default Home
