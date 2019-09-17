export default {
  '/buoy': (req) => {
    let params = JSON.parse(req.body)
    if (params.query.indexOf('test(')) {
      return {
        // 缺资讯信息，--allow-unrelated-histories
        // 基础信息
        base_info: {
          name: '站点名称',
          attribute: '观测站类型', // 观测站类型（军用 0 /民用 1）
          longitude: '123.123123123', // 经度
          latitude: '123.123123123', // 纬度
          buoy_model: '浮标型号',
          life: '寿命',
          weight: '重量',
          nominal_draught: '标称吃水',
          radar_area: '雷达反射面积',
          material: '材质'
        },
        // 航班信息
        real_time_info: [{
          wind_direction: '风向',
          wind_speed: '风速',
          GST: 'GST（阵风速度）',
          wave_height: '波高',
          wave_direction: '平均波方向',
          average_period: '平均周期',
          dominant_period: '主导波周期',
          sea_pressure: '海平面气压',
          air_temperature: '气温',
          sea_temperature: '海面温度',
          depth_water: '水深',
          pressure_trend: '压力趋势'
        }, {
          wind_direction: '风向',
          wind_speed: '风速',
          GST: 'GST（阵风速度）',
          wave_height: '波高',
          wave_direction: '平均波方向',
          average_period: '平均周期',
          dominant_period: '主导波周期',
          sea_pressure: '海平面气压',
          air_temperature: '气温',
          sea_temperature: '海面温度',
          depth_water: '水深',
          pressure_trend: '压力趋势'
        }, {
          wind_direction: '风向',
          wind_speed: '风速',
          GST: 'GST（阵风速度）',
          wave_height: '波高',
          wave_direction: '平均波方向',
          average_period: '平均周期',
          dominant_period: '主导波周期',
          sea_pressure: '海平面气压',
          air_temperature: '气温',
          sea_temperature: '海面温度',
          depth_water: '水深',
          pressure_trend: '压力趋势'
        }],
        // 动态
        dynamic: [],
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
        // 设施-机场
        facility: [ ],
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
