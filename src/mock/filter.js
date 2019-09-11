export default {
  '/filter': (req) => {
    let params = JSON.parse(req.body)
    if (params.query.indexOf('test(')) {
      return {
        airplane: {
          area: [
            {
              name: '亚洲',
              value: '0'
            },
            {
              name: '欧洲',
              value: '1'
            },
            {
              name: '美洲',
              value: '2'
            },
            {
              name: '非洲',
              value: '3'
            },
            {
              name: '大洋洲',
              value: '4'
            },
            {
              name: '南极洲',
              value: '4'
            }
          ],
          country: [
            {
              name: '美国',
              value: '0'
            },
            {
              name: '日本',
              value: '1'
            },
            {
              name: '朝鲜',
              value: '2'
            },
            {
              name: '韩国',
              value: '3'
            },
            // {
            //   name: '缅甸',
            //   value: '4'
            // }
          ],
          property: [
            {
              name: '军用',
              value: '0'
            },
            {
              name: '民用',
              value: '1'
            },
            {
              name: '疑似军用',
              value: '2'
            },
            {
              name: '不明',
              value: '3'
            }
          ],
          type: [
            {
              name: '陆上飞机',
              value: '0'
            },
            {
              name: '水上飞机',
              value: '1'
            },
            {
              name: '水陆两栖',
              value: '2'
            },
            {
              name: '直升机',
              value: '3'
            }
          ],
          height: [
            {
              name: '<100000m',
              value: '0'
            },
            {
              name: '100000-150000m',
              value: '1'
            },
            {
              name: '150000-200000m',
              value: '2'
            },
            {
              name: '>200000m',
              value: '3'
            }
          ],
          speed: [
            {
              name: '<500km/h',
              value: '0'
            },
            {
              name: '500-1000km/h',
              value: '1'
            },
            {
              name: '>1000km/h',
              value: '2'
            }
          ]
        },
        ship: {
          area: [
            {
              name: '亚洲',
              value: '0'
            },
            {
              name: '欧洲',
              value: '1'
            },
            {
              name: '美洲',
              value: '2'
            },
            {
              name: '非洲',
              value: '3'
            },
            {
              name: '大洋洲',
              value: '4'
            }
          ],
          country: [
            {
              name: '美国',
              value: '0'
            },
            {
              name: '日本',
              value: '1'
            },
            {
              name: '朝鲜',
              value: '2'
            },
            {
              name: '韩国',
              value: '3'
            },
            {
              name: '东南亚地区国家',
              value: '4'
            }
          ],
          property: [
            {
              name: '军用',
              value: '0'
            },
            {
              name: '民用',
              value: '1'
            }
          ],
          type: [
            {
              name: '军舰类',
              value: ' 0'
            },
            {
              name: '高速类',
              value: ' 0',
              child: [
                {
                  name: '医务船等',
                  value: 0
                }
              ]
            },
            {
              name: '货轮类',
              value: ' 0',
              child: [
                {
                  name: '木材运输船等',
                  value: 0
                }
              ]
            },
            {
              name: '油轮类',
              value: ' 0',
              child: [
                {
                  name: '天然气运输船等',
                  value: 0
                }
              ]
            },
            {
              name: '渔船类',
              value: ' 0',
              child: [
                {
                  name: '捕鲸船等',
                  value: 0
                }
              ]
            },
            {
              name: '客船类',
              value: ' 0',
              child: [
                {
                  name: '客轮等',
                  value: 0
                }
              ]
            },
            {
              name: '其他',
              value: ' 0',
              child: [
                {
                  name: '浮吊',
                  value: 0
                }
              ]
            },
          ]
        },
        satellite: {
          country: [
            {
              name: '美国',
              value: '0'
            },
            {
              name: '日本',
              value: '1'
            },
            {
              name: '朝鲜',
              value: '2'
            },
            {
              name: '韩国',
              value: '3'
            },
            {
              name: '东南亚地区国家',
              value: '4'
            }
          ],
          property: [
            {
              name: '军用',
              value: '0'
            },
            {
              name: '民用',
              value: '1'
            }
          ],
          launching: [
            {
              name: '各国的发射场基地',
              value: '1'
            }
          ],
          year: '发射年份',
          type: [
            {
              name: '碎片',
              value: '0'
            },
            {
              name: '载荷',
              value: '1'
            },
            {
              name: '舰体',
              value: '2'
            },
            {
              name: '未知',
              value: '3'
            },
          ]
        },
        // buoy: {
        //   country: [
        //     {
        //       name: '美国',
        //       value: '0'
        //     },
        //     {
        //       name: '日本',
        //       value: '1'
        //     },
        //     {
        //       name: '朝鲜',
        //       value: '2'
        //     },
        //     {
        //       name: '韩国',
        //       value: '3'
        //     },
        //     {
        //       name: '东南亚地区国家',
        //       value: '4'
        //     }
        //   ],
        //   manufacturer: '制造商'
        // }
        airport: {
          country: [
            {
              name: '美国',
              value: '0'
            },
            {
              name: '日本',
              value: '1'
            },
            {
              name: '朝鲜',
              value: '2'
            },
            {
              name: '韩国',
              value: '3'
            },
            {
              name: '东南亚地区国家',
              value: '4'
            }
          ],
        },
        port: {
          country: [
            {
              name: '美国',
              value: '0'
            },
            {
              name: '日本',
              value: '1'
            },
            {
              name: '朝鲜',
              value: '2'
            },
            {
              name: '韩国',
              value: '3'
            },
            {
              name: '东南亚地区国家',
              value: '4'
            }
          ],
        },
        launching: {
          country: [
            {
              name: '美国',
              value: '0'
            },
            {
              name: '日本',
              value: '1'
            },
            {
              name: '朝鲜',
              value: '2'
            },
            {
              name: '韩国',
              value: '3'
            },
            {
              name: '东南亚地区国家',
              value: '4'
            }
          ],
        },
        theme: {
          country: [
            {
              name: '美国',
              value: '0'
            },
            {
              name: '日本',
              value: '1'
            },
            {
              name: '朝鲜',
              value: '2'
            },
            {
              name: '韩国',
              value: '3'
            },
            {
              name: '东南亚地区国家',
              value: '4'
            }
          ],
        }
      }
    }
  }
}
