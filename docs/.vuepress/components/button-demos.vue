<template>
    <div class="contentWrapper">
        <div class="componentsMessage">
            <hy-button>按钮</hy-button>
            <hy-button icon="settings" >默认按钮</hy-button>
            <hy-button icon-postition="right" icon="settings">默认样式</hy-button>
            <hy-button icon-postition="right" icon="settings" :loading="true">默认样式</hy-button>
            <hy-spread>
                <pre v-if="showCode" class="preClass"><code>{{content}}</code></pre>
            </hy-spread>
        </div>
        <div class="dispalyCode" @click="showCode=!showCode">▼ <span>显示代码</span></div>
    </div>
</template>

<script>
    import Button from '../../../src/Button.vue'
    import Spread from '../../../src/Spread'
    export default {
        components:{
            'hy-button': Button,
            'hy-spread': Spread
        },
        methods:{
            beforeEnter(el){
                el.style.transition = this.elTransition
                if (!el.dataset) el.dataset = {}
                el.dataset.oldPaddingTop = el.style.paddingTop
                el.dataset.oldPaddingBottom = el.style.paddingBottom
                el.style.height = 0
                el.style.paddingTop = 0
                el.style.paddingBottom = 0
            },
            enter(el){
                el.dataset.oldOverflow = el.style.overflow
                if (el.scrollHeight !== 0) {
                el.style.height = el.scrollHeight + 'px'
                el.style.paddingTop = el.dataset.oldPaddingTop
                el.style.paddingBottom = el.dataset.oldPaddingBottom
                } else {
                el.style.height = ''
                el.style.paddingTop = el.dataset.oldPaddingTop
                el.style.paddingBottom = el.dataset.oldPaddingBottom
                }
                el.style.overflow = 'hidden'
            },
            afterEnter(el){
                el.style.transition = ''
                el.style.height = ''
                el.style.overflow = el.dataset.oldOverflow
            },
            beforeLeave(el){
                if (!el.dataset) el.dataset = {}
                el.dataset.oldPaddingTop = el.style.paddingTop
                el.dataset.oldPaddingBottom = el.style.paddingBottom
                el.dataset.oldOverflow = el.style.overflow
                el.style.height = el.scrollHeight + 'px'
                el.style.overflow = 'hidden'
            },
            leave(el){
                if (el.scrollHeight !== 0) {
                    el.style.transition = this.elTransition
                    el.style.height = 0
                    el.style.paddingTop = 0
                    el.style.paddingBottom = 0
                }
            },
            afterLeave(el){
                el.style.transition = ''
                el.style.height = ''
                el.style.overflow = el.dataset.oldOverflow
                el.style.paddingTop = el.dataset.oldPaddingTop
                el.style.paddingBottom = el.dataset.oldPaddingBottom
            }
        },
        data(){
            return {
                elTransition :'0.5s height ease-in-out, 0.5s padding-top ease-in-out, 0.5s padding-bottom ease-in-out',
                content:
`
<hy-button>按钮</hy-button>
<hy-button icon="settings" >默认按钮</hy-button>
<hy-button icon-postition="right" icon="settings">默认样式</hy-button>
<hy-button icon-postition="right" icon="settings" :loading="true">默认样式</hy-button>`.trim(),
                showCode:false
            }
        }
    }
</script>

<style lang="scss" scoped>
.contentWrapper{
    &:hover{
        box-shadow: 0px 0px 3px 0px rgba(0,0,0,0.2);
        .dispalyCode{
            background-color: #f9fafc;
            color: rgb(194, 194, 194);
        }
    }
    .componentsMessage{
        border:1px solid #ebebeb;
        padding: 20px 20px 20px;
        overflow: hidden;
    }
    .dispalyCode{
        margin-top: -1px;
        height: 30px;
        background-color: #fff;
        border:1px solid #ebebeb;
        border-bottom-left-radius: 4px;
        border-bottom-right-radius: 4px;
        margin-bottom: 3rem;
        display: flex;
        justify-content: center;
        align-items: center;
        color:#ebebeb;
        font-size: 12px;
        > span{
            font-size: 12px;
            padding-left: 6px;
        }
    }
}
</style>