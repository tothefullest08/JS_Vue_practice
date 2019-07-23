<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
                <br>
                <button class="btn btn-primary" @click="content='appBlue'">Load Blue Template</button>
                <button class="btn btn-success" @click="content='appGreen'">Load Green Template</button>
                <button class="btn btn-danger" @click="content='appRed'">Load Red Template</button>
                <hr>

                {{content}}
                <component :is="content"></component>
                <app-blue>
                    <div>파랑입니다</div>
                </app-blue>
                <app-green>
                    <div>초록입니다</div>
                </app-green>
                <app-red>
                    <div>빨강입니다</div>
                </app-red>
            </div>
        </div>
    </div>
</template>

<script>
    import Blue from './components/Blue.vue';
    import Green from './components/Green.vue';
    import Red from './components/Red.vue';

    export default {
        data () {
            return {
                content:'appBlue'
            }
        },
        components: {
            appBlue: Blue,
            appGreen: Green,
            appRed: Red
        }
    }
</script>

<style>
</style>
