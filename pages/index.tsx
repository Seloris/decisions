import type { NextPage } from 'next'
import { title } from 'process'
import Card from './components/card'

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
      <div className="mt-6 flex max-w-4xl flex-col  items-center justify-around sm:w-full">
        {methods.map((m) => (
          <Card className="m-2 flex-1" href={m.type} title={m.title}>
            <p className="mt-4 text-xl">{m.description}</p>
          </Card>
        ))}
      </div>
    </div>
  )
}

export default Home
