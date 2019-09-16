export default {
  '/satellite': (req) => {
    let params = JSON.parse(req.body)
    if (params.query.indexOf('test(')) {
      return {
        // 缺资讯信息，
        // 基础信息
        base_info: {
          satellite_name: '卫星名称',
          country: '所属国家',
          satellite_attribute: '1', // 卫星用途（军用 0 /民用 1）
          manufacturer: '制造商',
          NORAD: 'NORAD编号',
          perigee: '近地点（km）',
          apogee: '远地点(km)',
          launch_time: '发射时间',
          launch_site: '发射地点',
          dry_mass: '干质量（kg）'
        },
        // 航班信息
        real_time_info: {
          RCS: 'RCS（雷达横切面）',
          longitude: '123.123123123', // 经度
          latitude: '123.123123123', // 纬度
          altitude: '海拔',
          speed: '速度',
          azimuth: '方位角',
          launching_site: '发射场',
          current_time: '当前时间'
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
        // 设施-发射场
        facility: {
          launch_site: '发射地点'
        }
      }
    }
  }
}
