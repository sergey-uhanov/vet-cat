let map;

export async function initMap() {
    const position1 = { lat: 50.4194, lng: 30.4809 };
    const position2 = { lat: 50.444, lng: 30.619 };

    const { Map } = await google.maps.importLibrary("maps");
    const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");
    const { InfoWindow } = await google.maps.importLibrary("maps");


    const beachFlagImg1 = document.createElement('img');
    beachFlagImg1.src = new URL('/img/home/1.png', import.meta.url).href;


    const beachFlagImg2 = document.createElement('img');
    beachFlagImg2.src = new URL('/img/home/2.png', import.meta.url).href;

    map = new Map(document.getElementById("map"), {
        zoom: 11,
        center: position1,
        mapId: "DEMO_MAP_ID",
    });


    const marker1 = new AdvancedMarkerElement({
        map: map,
        position: position1,
        title: "Первая точка",
        content: beachFlagImg1,
    });


    const marker2 = new AdvancedMarkerElement({
        map: map,
        position: position2,
        title: "Вторая точка",
        content: beachFlagImg2,
    });

    const infoWindow = new InfoWindow({
        content: `<div class="info-window">
<span>Дополнительная важная информация!</span>
<strong>Кто грустит тот трансвистит</strong>
</div>`,
    });

    marker1.addListener("click", () => {
        infoWindow.open({
            anchor: marker1,
            map,
        });
    });

    marker2.addListener("click", () => {
        infoWindow.open({
            anchor: marker1,
            map,
        });
    });
}
