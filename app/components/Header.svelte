<script>
    import Navigation from './Navigation.svelte';
    import icons from '../scripts/icons';

</script>

<div>
    <img src= {icons.fire} alt="bull logo">
    <Navigation/>
</div>

<style>
    div {
        display: flex;
        justify-content: space-between;
        width: 100%;
        background-color: gold;
    }
    img {
        width: 100px;
        height: 66px;
    }
</style>