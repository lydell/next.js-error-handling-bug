# Next.js error handling bug?

1. `npm ci`
2. `npm run dev`
3. Visit <http://localhost:3000>
4. `pages/index.js` causes an error, which Next.js handles as expected. The
error overlay is rendered in development and the 500 page in production.
5. Uncomment the indicated line in `pages/_app.js`.
6. Visit <http://localhost:3000>
7. `pages/_app.js` causes an error, which Next.js handles in a different way: It
just responds with “Internal Server Error” (both in development and production).
