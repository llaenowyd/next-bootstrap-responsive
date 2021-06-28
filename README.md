# nextjs-bootstrap-responsive demo

## stack

- NextJS
- react-redux
  - redux-toolkit is [now recommended](https://react-redux.js.org/tutorials/quick-start),
    first time trying it
  - use of immer means the reducer is written as if it were mutating
- react-bootstrap
  - first time using it, according to npm trends it's the most used component library
- SWR (useSWRInfinite)
- CSS modules
  - More experience with JSS but it might be less amenable to SSR
- prettier, eslint, stylelint, jest, enzyme

## bells and whistles

- husky pre-commit hook ensures pretty, lint and test pass when committing
- the location tracks the search entry, so that a search page can be
  shared via copying the location, however it doesn't slow anything
  down, it's not a routing update / page load
- unit tests show various techniques for mocking

## Notes

- During `npm run dev`, it says `> [PWA] PWA support is disabled`. The service engine is
  disabled if NODE_ENV=development
- Used moons instead of stars because the emoji were available. It turned out to be a bit
  trickier to test, but not sure whether that was worse than importing SVGs.
- Lots of tests but the `pages` and `store` aren't tested, ran out of time.
