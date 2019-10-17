<style scoped>
    .expand-row{
        margin-bottom: 16px;
    }
</style>
<template>
    <div>
        <Row class="expand-row">
            <Col span="8">
                <span class="expand-key">机构名称: </span>
                <span class="expand-value" v-text="row.cname"></span>
            </Col>
            <Col span="8">
                <span class="expand-key">外文名称: </span>
                <span class="expand-value" v-text="row.ename"></span>
            </Col>
            <Col span="8">
                <span class="expand-key">机构简称: </span>
                <span class="expand-value" v-text="row.abbr"></span>
            </Col>
        </Row>
        <Row class="expand-row">
            <Col span="8">
                <span class="expand-key">机构代码: </span>
                <span class="expand-value" v-text="row.code"></span>
            </Col>
            <Col span="8">
                <span class="expand-key">机构类型: </span>
                <span class="expand-value" v-text="row.type"></span>
            </Col>
            <Col span="8">
                <span class="expand-key">国家/地区: </span>
                <span class="expand-value" v-text="row.base.country.cname"></span>
            </Col>
        </Row>
        <Row class="expand-row">
            <Col span="8">
                <span class="expand-key">业务方向: </span>
                <span class="expand-value" v-text="row.business"></span>
            </Col>
            <Col span="8">
                <span class="expand-key">上级机构: </span>
                <span class="expand-value" v-text="row.superior.cname"></span>
            </Col>
            <Col span="8">
                <span class="expand-key">主管领导: </span>
                <span class="expand-value" v-text="row.leader.name"></span>
            </Col>
        </Row>
        <Row>
            <Col span="8">
                <span class="expand-key">机构网站: </span>
                <span class="expand-value" v-text="row.homepage"></span>
            </Col>
        </Row>
    </div>
</template>
<script>
    export default {
        props: {
            row: Object
        }
    }
</script>
