const config = {
  baseUrl: 'https://api.keygen.sh/v1',
  account: '',
  endpoints: {
    tokens: (account) => `/accounts/${account}/tokens`,
    products: (account) => `/accounts/${account}/products`,
    licenses: (account) => `/accounts/${account}/licenses`,
    policies: (account) => `/accounts/${account}/policies`,
  },
}

export default config;