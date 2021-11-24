
function Home({ip}) {
console.log(ip)
  return (
    <div>
      <p>`IP: ${ip}`</p>
    </div>
  )
}
Home.getInitialProps = async ({ req }) => {
  const ip = req.headers["x-real-ip"] || req.connection.remoteAddress;
  return { ip };
};

export default Home;