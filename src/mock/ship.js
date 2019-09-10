export default {
  '/ship': (req) => {
    let params = JSON.parse(req.body)
    if (params.query.indexOf('test(')) {
      return {
        // 缺资讯信息，
        // 基础信息
        base_info: {
          name: '船舶名称',
          attribute: '1', // 船舶类型（军用 0 /民用 1）
          MMSI: 'MMSI编号',
          sign_info: '注册信息',
          organization: '隶属单位',
          country: '注册国家',
          status: '船舶状态',
          tonnage: '吨位',
          width: '船宽度',
          length: '船长度',
          height: '船高度',
          speed: '最大航速',
          phone: '电话等通联'
        },
        // 航班信息
        real_time_info: {
          heading: '船首向',
          ending: '船迹向',
          speed: '航速', // 出发时间
          status: '状态（在航等）',
          longitude: '123.123123123', // 经度
          latitude: '123.123123123', // 纬度
          draught: '123123', // 吃水
          start_port: '始发港口',
          mid_port: '停靠港口',
          end_port: '目的港口',
          time: '预到时间',
          task: '船舶任务'
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
        // 设施-港口
        facility: {
          name: '港口名称',
          code: '港口代码',
          type: '机场类型',
          country: '所属地区',
          main_good: '主营货类',
          max_throughput: '最大吞吐量',
          area: '水域面积',
          opt_organization: '运行机构',
          phone: '联系电话'
        }
      }
    }
  }
}
