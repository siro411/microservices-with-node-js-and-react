import buildClient from "../api/build-client";

const LandingPage = ({ currentUser }) => {
  // console.log('I am in the component', currentUser);
  return currentUser ? <h1>You are signed in</h1> : <h1>You are NOT signed in</h1>;
};

LandingPage.getInitialProps = async (ctx) => {
  console.log('landing page');

  const client = buildClient(ctx)
  const { data } = await client.get('/api/users/currentuser');

  return data;
}

export default LandingPage;