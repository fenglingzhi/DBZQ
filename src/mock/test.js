export default {
  '/graphql': (req) => {
    let params = JSON.parse(req.body)
    if (params.query.indexOf('test(')) {
      return {
        query: {
          test: 'Hell world',
          title:'This is test title',
          arr:[
            {
              name:'test1',
              val:'1'
            },
            {
              name:'test2',
              val:'2'
            },
            {
              name:'test3',
              val:'3'
            },
            {
              name:'test4',
              val:'4'
            },
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
