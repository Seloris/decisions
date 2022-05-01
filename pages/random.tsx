import { NextPage } from 'next'
import Head from 'next/head'
import React, { useEffect, useState } from 'react'

interface ResultsProps {
  choices: string[]
  selectedIdx: number
}

const Results = (props: ResultsProps) => {
  const [tempSelectedIdx, setTempSelectedIdx] = useState(0)
  const [amountRollLeft, setAmountRoll] = useState(10)
  useEffect(() => {
    if (amountRollLeft > 0) {
      const timeout = setTimeout(() => {
        let next = tempSelectedIdx + 1
        if (next >= props.choices.length) next = 0
        setTempSelectedIdx(next)
        setAmountRoll(amountRollLeft - 1)
      }, 1500 / amountRollLeft)
      return () => clearTimeout(timeout)
    }
  }, [tempSelectedIdx, amountRollLeft])

  const rollFinished = amountRollLeft <= 0
  return (
    <div
      className={`mt-10 text-2xl font-semibold transition-all ${
        rollFinished ? 'text-4xl text-blue-600' : ''
      }`}
    >
      {!rollFinished && props.choices[tempSelectedIdx]}
      {rollFinished && props.choices[props.selectedIdx]}
    </div>
  )
}

interface FormProps {
  choices: string[]
  setChoices: (choices: string[]) => void
}

export const Form = (props: FormProps) => {
  const addChoice = () => {
    props.setChoices([...props.choices, `Choice ${props.choices.length + 1}`])
  }

  const updateChoice = (idx: number, val: string) => {
    props.setChoices(props.choices.map((x, i) => (i === idx ? val : x)))
  }

  const deleteChoice = (idx: number) => {
    props.setChoices(props.choices.filter((_x, i) => i !== idx))
  }

  return (
    <div className="flex w-96 flex-col bg-slate-50 p-4">
      {props.choices.map((c, i) => (
        <div key={i} className="mb-2 flex">
          <label>Choice {i + 1}</label>
          <input
            className="ml-4 flex-1"
            value={c}
            onChange={(v) => updateChoice(i, v.currentTarget.value)}
          />
          {props.choices.length > 2 && (
            <button onClick={() => deleteChoice(i)}>❌</button>
          )}
        </div>
      ))}
      <div className="flex flex-col">
        <button
          onClick={addChoice}
          type="button"
          className="bg-blue-100 p-2 hover:cursor-pointer"
        >
          Add Choice
        </button>
      </div>
    </div>
  )
}

const Random: NextPage = (props: any) => {
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null)
  const [choices, setChoices] = useState<string[]>(['Choice 1', 'Choice 2'])

  const resetSelected = () => {
    setSelectedIdx(null)
  }

  const run = () => {
    const rand = Math.floor(Math.random() * choices.length)
    setSelectedIdx(rand)
  }
  return (
    <div>
      <Head>
        <title>Decision</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 className="text-6xl font-bold">Random</h1>
      <h2 className="text-4xl font-bold text-gray-700">
        What's your choices ?
      </h2>
      {!selectedIdx && (
        <>
          <Form choices={choices} setChoices={setChoices}></Form>
          <button
            onClick={run}
            type="button"
            className="mt-2 bg-blue-600 p-2 text-white hover:cursor-pointer"
          >
            Let's go
          </button>
        </>
      )}
      {!!selectedIdx && (
        <div className="mt-10">
          <button onClick={resetSelected} className="bg-blue-200 px-4 py-2">
            Back
          </button>
          <Results choices={choices} selectedIdx={selectedIdx}></Results>
        </div>
      )}
    </div>
  )
}

export default Random
