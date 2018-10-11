const page = () => <p>Hello, world!</p>;

export default page;

page.getInitialProps = async () => {
  // This renders the error overlay in development and the 500 page in
  // production as expected.
  // await Promise.reject(new Error("page error"));
};
