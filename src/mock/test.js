export default {
  '/graphql': (req) => {
    let params = JSON.parse(req.body)
    if (params.query.indexOf('test(')) {
      return {
        query: {
          test: 'Hell world',
          title:'This is test title',
          arr:[
            'test arr1',
            {
              name:'test',
              val:'1'
            }
          ],
          obj:{
            name:'test',
            arr:[
              {
                name:'obj1',
                value:1,
                children:[
                  {
                    name:'boj_child',
                    val:'obj_c1'
                  }
                ]
              }
            ]
          }
        }
      }
    }
  }
}
