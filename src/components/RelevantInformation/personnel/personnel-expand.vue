<style scoped>
    .expand-row{
        margin-bottom: 16px;
    }
</style>
<template>
    <div>
        <Row class="expand-row">
            <Col span="8">
                <span class="expand-key">姓名: </span>
                <span class="expand-value" v-text="row.name"></span>
            </Col>
            <Col span="8">
                <span class="expand-key">民族: </span>
                <span class="expand-value" v-text="row.nation"></span>
            </Col>
            <Col span="8">
                <span class="expand-key">性别: </span>
                <span class="expand-value" v-text="row.gender"></span>
            </Col>
        </Row>
        <Row class="expand-row">
            <Col span="8">
                <span class="expand-key">出生日期: </span>
                <span class="expand-value" v-text="row.birthday"></span>
            </Col>
            <Col span="8">
                <span class="expand-key">别名: </span>
                <span class="expand-value" v-text="row.nickname"></span>
            </Col>
            <Col span="8">
                <span class="expand-key">国籍: </span>
                <span class="expand-value" v-text="row.country"></span>
            </Col>
        </Row>
        <Row class="expand-row">
            <Col span="8">
                <span class="expand-key">宗教信仰: </span>
                <span class="expand-value" v-text="row.faith"></span>
            </Col>
            <Col span="8">
                <span class="expand-key">工作方向: </span>
                <span class="expand-value" v-text="row.job"></span>
            </Col>
            <Col span="8">
                <span class="expand-key">学历: </span>
                <span class="expand-value" v-text="row.edu"></span>
            </Col>
        </Row>
        <Row>
            <Col span="8">
                <span class="expand-key">常在城市: </span>
                <span class="expand-value" v-text="row.city"></span>
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