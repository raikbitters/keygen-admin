const config = {
  baseUrl: process.env.KEYGEN_API_URL || 'https://api.keygen.sh/v1',
  endpoints: {
    tokens: (account) => `/accounts/${account}/tokens`,
    products: (account) => `/accounts/${account}/products`,
    licenses: (account) => `/accounts/${account}/licenses`,
    policies: (account) => `/accounts/${account}/policies`,
  },
}

export default config;