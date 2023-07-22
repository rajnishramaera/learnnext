import { NextPage } from "next"
import Link from "next/link"

// app/shop or app/shop/acocunts is 404 but app/accounts is this page because of the () parenthesis used in the folder

interface Props {}

const Page: NextPage<Props> = ({}) => {
  return <Link href={"/accounts"}>account</Link>
}

export default Page
