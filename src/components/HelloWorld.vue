<template>
    <div id="header" >
        <div class="header-dev" >
            <div class="header-dev-left">
                <span class="iconfont">&#xe6e4;</span>
                <input type="text" placeholder="123456">
            </div>
            <div class="header-dev-right">
                <span class="iconfont">&#xe655;</span>
                <span class="iconfont">&#xe61a;</span>
            </div>
        </div>
        <div class="mine-header-dev" v-if="showheader1">
            <div>
                <span class="iconfont">&#xe661;</span>
                <span class="iconfont">&#xe628;</span>
                <span class="iconfont">&#xe662;</span>
                <span class="iconfont">&#xe622;</span>
            </div>
            <div>
                <span class="iconfont">&#xe61a;</span>
            </div>
        </div>
        <div class="container" id="container" :style="{'min-height':minheight+600+'px'}">
            <div class="header-menu">
                <dl>
                    <dt class="iconfont">&#xe661;</dt>
                    <dd>扫一扫</dd>
                </dl>
                <dl>
                    <dt class="iconfont">&#xe628;</dt>
                    <dd>收钱</dd>
                </dl>
                <dl>
                    <dt class="iconfont">&#xe662;</dt>
                    <dd>付钱</dd>
                </dl>
                <dl>
                    <dt class="iconfont">&#xe622;</dt>
                    <dd>卡包</dd>
                </dl>

            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            showheader1: false
        }
    },
    computed:{
        minheight () {
            return document.documentElement.clientHeight;
        }
    },
    mounted() {
        this.scrollHeader()
    },
    methods:{
        scrollHeader() {
            let domContainer = document.querySelector('#header');
            let domcon = document.querySelector('#container');

            domcon.addEventListener('scroll', e => {
                console.lo
                console.log(e, '现在是在测试domcon')
            })

            domContainer.addEventListener('scroll', e => {
                console.log(domContainer.scrolltop, '现在是在测试网页滚动的高度')
                console.log(e, '现在是在测试结果')
            })
        }
    }

}
</script>

<style>
    @import url('./hello.css');
</style>


