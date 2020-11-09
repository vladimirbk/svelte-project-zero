<script>
    import Navigation from './Navigation.svelte';
    import icons from '../../scripts/icons';

</script>

<div>
    <img src= {icons.bull} alt="bull logo">
    <Navigation/>
</div>

<style>
    div {
        position: fixed;
        width: 100%;
        background-color: gold;
    }
    img {
        width: 200px;
        height: 150px;
    }
</style>