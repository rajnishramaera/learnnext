"use client"
import { NextPage } from "next"
import { useDispatch } from "react-redux"
import { setOrUpdateApiData } from "@/redux/slice/ApiDataSlice"

interface Props {
  children: React.ReactNode
}

async function getData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos/1")
  if (!res.ok) {
    throw new Error("Failed to fetch data")
  }
  return res.json()
}
export default async function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const dispatch = useDispatch()
  const data = await getData()

  dispatch(setOrUpdateApiData(data))
  return <main>{children}</main>
}
