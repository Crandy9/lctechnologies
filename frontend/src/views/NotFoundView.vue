<template>
    <div class="text-is-light not-found-container" style="padding-bottom: 25rem;">
        <iframe 
            src="https://giphy.com/embed/agmheddabICHK" 
            width="480" 
            height="360" 
            frameBorder="0" 
            allowFullScreen>
        </iframe>
        <div style="padding-top: 2rem;">
            <a href="/" :class=$store.state.theme_change style="font-size: 20px;">
                {{$t('notfound')}}
            </a>
        </div>

    </div>

</template>

<style type="text/css">
a:hover{
    color: rgb(130, 130, 130);
}
</style>
    
<script>
export default {

    data() {
        return {
        }
    },

    mounted() {
        document.title = '404 Not Found';

    },

}
</script>