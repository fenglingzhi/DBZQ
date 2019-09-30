export default {
  '/ship': (req) => {
    let params = JSON.parse(req.body)
    if (params.query.indexOf('test(')) {
      return {
        // 基础信息
        base_info: {
          name: '港口名称',
          code: '港口代码',
          country: '所在国家/地区',
          longitude: '123.123123123', // 经度
          latitude: '123.123123123', // 纬度
          area: '62.2万平方米（截至2019年）',
          num: '123',
          status: '在线'
        },
        // 人员信息
        usr: {
          name: '姓名',
          nation: '民族',
          gender: '性别',
          birthday: '出生日期',
          o_name: '别名',
          country: '国籍',
          faith: '宗教信仰',
          job: '工作方向',
          edu: '学历',
          city: '常在城市'
        },
        // 机构信息
        organization: {
          name: '机构名称',
          foreign_name: '外文名称',
          short_name: '机构简称',
          code: '机构简称',
          type: '机构类型',
          country: '所在国家/地区',
          business: '业务方向',
          superior_org: '上级机构',
          leader: '主管领导',
          site: '机构网站'
        },
        // 资讯
        information: [{
          title: '标题',
          content: '内容',
          source: '来源',
          release_time: '发布时间'
        }, {
          title: '标题',
          content: '内容',
          source: '来源',
          release_time: '发布时间'
        }, {
          title: '标题',
          content: '内容',
          source: '来源',
          release_time: '发布时间'
        }, {
          title: '标题',
          content: '内容',
          source: '来源',
          release_time: '发布时间'
        }, {
          title: '标题',
          content: '内容',
          source: '来源',
          release_time: '发布时间'
        }]
      }
    }
  }
}
