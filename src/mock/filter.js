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
              name: '缅甸',
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
          ]
        }
      }
    }
  }
}
