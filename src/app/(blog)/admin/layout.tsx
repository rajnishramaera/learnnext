import React from "react"

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <section>
      <h3> Layout : Admin</h3>
      {children}
    </section>
  )
}
