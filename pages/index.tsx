const Home = () => {
  return (
    <div>hello</div>
  )
}

export async function getServerSideProps(ctx: any) {
  ctx.res.setHeader(
    'Cache-Control',
    'public, s-maxage=10, stale-while-revalidate=59'
  )
  // Fetch data from an API
  console.log('response', ctx.res);
  const posts = await response.text();
  
  // Return the data as props
  return {
    props: { posts },
  };
}
export default Home
