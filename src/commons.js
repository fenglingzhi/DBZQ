import ax from 'axios'

export function executeGQL(gql, val) {
  return ax.post('/graphql', { ...gql, variables: val }).then(({ data: { data } }) => data)
}
