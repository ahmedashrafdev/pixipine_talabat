<template>
    <div class="w-full border-b border-gray-100 border-solid shadow">
        <ul class="breadcrumbs text-color text-sm px-2">
            <li class="capitalize">home</li>
            <li class="capitalize">menu</li>
        </ul>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.breadcrumbs{
    display: flex;
    & li:not(:last-child){
        margin-right: 8px;
        cursor: pointer;
        &:hover{
            @apply text-primary;
        }
        &::after{
            content:">";
            @apply text-primary;
            margin-left: 8px;
        } 
    }
    & li:last-child{
        color:#999
    }
    
}
</style>
