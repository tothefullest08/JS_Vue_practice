<template>
    <div class="container">
        <Header></header>
        <hr>
        <div class="row">
            <ServerList></ServerList>
            <ServerDetail></ServerDetail>
        </div>
        <hr>
        <Footer></Footer>
    </div>
</template>

<script>

import Header from './Header.vue'
import ServerList from './ServerList.vue'
import Footer from './Footer.vue'
import ServerDetail from './ServerDetail.vue'

export default {
    components: {
        'Header' : Header,
        'ServerList': ServerList,
        'Footer': Footer,
        'ServerDetail': ServerDetail,
    }
}
</script>