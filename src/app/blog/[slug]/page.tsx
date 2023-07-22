import { NextPage } from "next"

interface Props {
  params: { slug: string }
}

const Page: NextPage<Props> = ({ params }) => {
  return <div>Dynamic route: {params.slug}</div>
}

export default Page
