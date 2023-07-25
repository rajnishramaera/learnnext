"use client"

import { useSelector } from "react-redux"
import Link from "next/link"
import { useEffect, useState } from "react"
import React from "react"
// icon-.ico, .jpg, .jpeg, .png, .svg	change favicon for each page
const page = () => {
  const [id, setId] = useState(0)
  const ApiDataFromRedux = useSelector(
    (state: any) => state.ApiDataReducer.ApiData
  )

  useEffect(() => {
    if (ApiDataFromRedux?.userId) setId(ApiDataFromRedux.userId)
  }, [])
  console.log(ApiDataFromRedux)
  return (
    <>
      <Link href={"/dashboard"}>admin</Link>
      <h4>{id}</h4>
    </>
  )
}

export default page
