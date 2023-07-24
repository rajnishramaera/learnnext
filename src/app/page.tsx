import Link from "next/link"

export default async function Home() {
  return (
    <main>
      <header>
        <nav className="space-x-8">
          <Link href={"/dashboard"}>Dashboard</Link>
          <Link href={"/admin"}>Admin</Link>
          <Link href={"/dashboard"}>Dashboard</Link>
        </nav>
      </header>
    </main>
  )
}
