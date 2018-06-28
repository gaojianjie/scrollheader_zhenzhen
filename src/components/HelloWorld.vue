<template>
    <div id="header" >
        <div class="header-dev" :style="{'opacity': topHeaderOp}" v-if="tophdShow">
            <div class="header-dev-left">
                <span class="iconfont">&#xe6e4;</span>
                <input type="text" placeholder="123456">
            </div>
            <div class="header-dev-right">
                <span class="iconfont">&#xe655;</span>
                <span class="iconfont">&#xe61a;</span>
            </div>
        </div>
        <div class="mine-header-dev" v-if="showheader1" :style="{'opacity': scrollHdop}">
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
            <div class="header-menu" id="header-menu" >
                <div class="menu-position-box" :style="{'opacity':menuOp}">
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
    </div>
</template>

<script>
export default {
    data() {
        return {
            showheader1: false,
			tophdShow: true,
			topHeaderOp:1, // 最下面元素实现淡出的控制变量
			menuOp:1,
			scrollHdop:0.6
        }
    },
    computed:{
        minheight () {
            return document.documentElement.clientHeight;
        }
    },
    mounted() {
        window.onload = () => {
			this.scrollHeader()
		}
    },
    methods:{
        scrollHeader() {
            let domContainer = document.querySelector('#header');
            let domcon = document.querySelector('#container');
			let oHeaderMenu = document.querySelector('#header-menu');
			let contTop = domcon.offsetTop;
			let oMenuHeight = oHeaderMenu.clientHeight;

			// 给最外层容器监听滚动事件
            domContainer.addEventListener('scroll', e => {
				let scrolltop = domContainer.scrollTop;
				oHeaderMenu.style.height = oMenuHeight - scrolltop + 'px';

				// 设置下面菜单的淡入淡出效果
				if(scrolltop < oMenuHeight) {
					let mouces = ((oMenuHeight - scrolltop) / oMenuHeight).toFixed(1)
					this.menuOp = mouces;
					if( scrolltop < (contTop / 4)) {
						this.topHeaderOp = ((contTop / 2 - scrolltop ) / (contTop / 2)).toFixed(1);
						this.topHeaderOp = this.topHeaderOp <= 0 ? 0 : this.topHeaderOp;
						this.tophdShow = true;
						this.showheader1 =  false;
					} else {
						this.scrollHdop = 1-((contTop / 2 - scrolltop) / (contTop / 2)); 
						this.tophdShow = false;
						this.showheader1 =  true;
					}
				}
            })
        }
    }

}
</script>

<style>
    @import url('./hello.css');
</style>


