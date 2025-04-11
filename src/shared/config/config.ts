const config = {
  get graphqlUrl() {
    return process.env.NEXT_PUBLIC_GRAPHQL_API;
  },
};

export default config;
