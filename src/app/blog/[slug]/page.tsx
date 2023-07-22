export default function Page({ params }: { params: { slug: string } }) {
  return <div>Dynamic route: {params.slug}</div>
}
