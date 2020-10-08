<template>
        <div class="container">
        <article class="post-container post page">
            <header class="post-header">
                <h1 class="post-title">Hakkımda</h1>
                <p class="blog-description">Ben Önsel Aydın. Yazılım teknolojilerine merak salmış bir adamım. Node.JS, .Net, Python, JavaScript ve Drone teknolojileri ile ilgileniyorum. </p>
            </header>
        </article>
        <p><br></p>

        <h2 id="asosyalolmayaalyoruz">{A}Sosyal Ağ</h2>

        <ul>
                <li><a href="https://twitter.com/onselaydin">Twitter</a></li>
                <li><a href="https://www.facebook.com/">Facebook</a></li>
                <li><a href="https://tr.linkedin.com/in/onselaydin">LinkedIn</a></li>
        </ul>
        <p><br></p>
        </div>
</template>

<script>
export default {
    
}
</script>
<style scoped>
a {
    color: #f03838 !important;
    text-decoration: none;
}
a {
    background: transparent !important;
}
a:hover {
        color: #96dd7a !important;
}
a:-webkit-any-link:active {
    color: -webkit-activelink;
}
li {
    text-align: -webkit-match-parent;
}
ul, ol {
    list-style-position: inside;
    line-height: 1.8;
    margin: 0 0 40px 20px;
    padding: 0;
}
ul {
    list-style-type: disc;
}
</style>