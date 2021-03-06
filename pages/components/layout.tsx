import Head from 'next/head'

interface LayoutProps {
  children?: React.ReactNode
}
export default function Layout(props: LayoutProps) {
  return (
    <>
      <div className="flex min-h-screen flex-col items-center justify-center">
        <header className="flex w-full items-center border-b-2 bg-slate-100 p-4">
          <a
            href="/"
            className="text-xl hover:cursor-pointer hover:text-blue-600"
          >
            Decisions
          </a>
        </header>
        <main className="flex w-full flex-1 flex-col items-center p-10 px-20 text-center">
          {props.children}
        </main>
      </div>
    </>
  )
}
