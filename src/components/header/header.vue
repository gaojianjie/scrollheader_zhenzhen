<template>
    <div id="myHeader" ref="header">
        <div class="header-devtd" ref="headerdev">
            <div class="header1" v-if="headerShow" ref="header1" :style="{'opacity': opact2}">
                <div class="header1-left">
                    <span class="iconfont">&#xe6e4;</span>
                    <input type="text" placeholder="zhenzhenzhenzhenzhen">
                </div>
                <div class="header1-right">
                    <span class="iconfont">&#xe655;</span>
                    <span class="iconfont">&#xe61a;</span>
                </div>
            </div>
            <div class="header2" v-if="header2Show" :style="{'opacity': opact3}">
                <div>
                    <span class="iconfont">&#xe661;</span>
                    <span class="iconfont">&#xe628;</span>
                    <span class="iconfont">&#xe662;</span>
                    <span class="iconfont">&#xe622;</span>
                </div>
                <span class="iconfont">&#xe61a;</span>
            </div>
            <div class="header-menu" ref="headermenu" :style="{'opacity': opact1}">
                <div class="menu-cont">
                    <dl><dt class="iconfont">&#xe661;</dt><dd>扫一扫</dd></dl>
                    <dl><dt class="iconfont">&#xe628;</dt><dd>收钱</dd></dl>
                    <dl><dt class="iconfont">&#xe662;</dt><dd>付钱</dd></dl>
                    <dl><dt class="iconfont">&#xe622;</dt><dd>卡包</dd></dl>
                </div>
            </div>
        </div>
        <div class="containor" :style="{'min-height':minHeight + 500 + 'px'}">
            现在是在测试
        </div>
    </div>
</template>


<script>
    export default {
        data() {
            return {
                headerShow:true,
                header2Show: false,
                opact1:1,
                opact2: 1,
                opact3: 0
            }
        },
        mounted() {
            window.onload = e => this.scrollHeader();
        },
        methods: {
            scrollHeader() {
                // 整个头部的高度
                let oHeight = this.$refs.headerdev.clientHeight;
                let oHeaderHeight = this.$refs.header1.clientHeight;
                let omenuHeight = this.$refs.headermenu.clientHeight;
                let bgoff = 0;

                // 给当前的页面加上滑动监听
                this.$refs.header.addEventListener('scroll', e => {
                    let scrollnum = this.$refs.header.scrollTop;
                    let teoHeight = (oHeaderHeight / 2);
                    this.$refs.headermenu.style.height = (omenuHeight - scrollnum) > 0 ? omenuHeight - scrollnum + 'px' : 0;
                    
                    // 如果滑动的区域小于头部所占的区域，进行操作
                    if(scrollnum < oHeight) {
                        this.opact1 = (omenuHeight - scrollnum) / omenuHeight;
                        if(scrollnum < teoHeight) {
                            bgoff = scrollnum;
                            this.opact2 = ((teoHeight-scrollnum) / teoHeight).toFixed(1);
                            this.header2Show = this.opact2 == 0 ? true : false;
                            this.headerShow = this.opact2 == 0 ? false : true;
                        } else {
                            this.opact3 = ((scrollnum-(bgoff / 2)) / oHeaderHeight).toFixed(1);
                            this.headerShow = this.opact3 == 0 ? true : false;
                            this.header2Show = this.opact3 == 0 ? false : true;
                        }
                    }
                })
            }  
        },
        computed:{
            minHeight() {
                return document.documentElement.clientHeight;
            }
        }
    }
</script>


<style>
    @import url('./header.css');
</style>

