export default {
  '/graphql': (req) => {
    let params = JSON.parse(req.body)
    if (params.query.indexOf('test(')) {
      return {
        query: {
          test: true
        }
      }
    }
  }
}
