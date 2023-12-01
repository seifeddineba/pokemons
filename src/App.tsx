import "./style.scss";
import { lazy } from "react";
import { ApolloProvider } from "@apollo/client";
import { client } from "./features/pokemons/core/apolloClient";

const Pokemons = lazy(() => import("./features/pokemons"));

function App() {
  return (
    <ApolloProvider client={client}>
      <Pokemons />
    </ApolloProvider>
  );
}

export default App;
