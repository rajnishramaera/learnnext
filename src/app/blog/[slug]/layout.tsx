export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <section>
      <h3> Layout : Blog</h3>
      {children}
    </section>
  )
}
