# Coding Chalange Pokemon

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```
-run the app with the commande line : npm run dev


-paragraph describing how you would make Apollo Link and Redux coexist in the same app:

To merge Apollo Link and Redux in an app, I'd utilize Redux for managing global state and handling non-GraphQL data, while integrating Apollo Link specifically for GraphQL operations. I'd establish Redux as the primary state manager and create middleware or actions to dispatch GraphQL data fetched via Apollo Link into the Redux store. This strategy ensures a cohesive approach: Redux handles general application state, while Apollo Link manages GraphQL-related data fetching and caching, harmonizing their roles for efficient app functionality.
