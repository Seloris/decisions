import { NextPage } from 'next'
import Head from 'next/head'
import React, { useState } from 'react'

const STEPS = ["What's your choices ?"]

interface Choice {
  name: string
  criterias?: []
}

const WeigthedCriteria: NextPage = (props: any) => {
  const [step, setStep] = useState(0)
  const [choices, setChoices] = useState<Choice[]>([{ name: '' }, { name: '' }])

  const updateChoice = (updIndex: number, newName: string) => {
    setChoices(
      choices.map((ch: Choice, i: number) =>
        i === updIndex ? { ...ch, name: newName } : ch
      )
    )
  }

  return (
    <div>
      <Head>
        <title>Decision</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="text-3xl text-slate-500">
        {step} - {STEPS[step]}
      </div>

      <div className="mt-2 flex flex-col items-center">
        {choices.map((choice, i) => (
          <Input
            choice={choice}
            label={`Choix ${i + 1}`}
            inputChange={(v) => updateChoice(i, v)}
          ></Input>
        ))}
        <button>I have another choice</button>
        <button>I'm done</button>
      </div>
    </div>
  )
}

const Input = (props: {
  choice: Choice
  label: string
  inputChange: (val: string) => void
}) => {
  return (
    <div className="flex w-full flex-col items-start">
      <label className="text-xs uppercase text-slate-500">{props.label}</label>
      <input
        className=" text-m w-full rounded border border-slate-300 p-2 text-sm font-bold text-slate-500 hover:border-slate-400"
        onChange={(e) => props.inputChange(e.currentTarget.value)}
      />
    </div>
  )
}

export default WeigthedCriteria
