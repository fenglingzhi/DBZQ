export default {
  '/air_plane': (req) => {
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
          take_off_base: '起飞基地',
          landing_base: '降落基地',
          start_time: '2013-09-01 13:41:52', // 出发时间
          pre_time: '2013-09-01 13:41:52', // 预计到达时间
          longitude: '123.123123123', // 经度
          latitude: '123.123123123', // 纬度
          height: '123123', // 高度
          horizontal_velocity: '水平速度',
          vertical_speed: '垂直速度',
          azimuth: '方位角'
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
          name: '机场名称',
          code: '机场代码',
          type: '机场类型',
          country: '所属国家/地区',
          date: '通航日期',
          level: '飞行区等级',
          area: '航站楼面积',
          num: '机位数量'
        }
      }
    }
  }
}
