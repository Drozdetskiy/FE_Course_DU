// The following example creates a marker in Stockholm, Sweden using a DROP
// animation. Clicking on the marker will toggle the animation between a BOUNCE
// animation and no animation.

const WARSAW = [52.237049, 21.017532]
const MOSCOW_COORDS = [55.75222, 37.61556]
const MILAN = [45.464664, 9.188540]
const LONDON = [51.508530, -0.076132]
const PARIS = [48.864716, 2.349014]
const coordList = [WARSAW, MOSCOW_COORDS, MILAN, LONDON, PARIS]

ymaps.ready(function () {
    const map = new ymaps.Map("map", {
        center: [55.7, 20.6],
        zoom: 4,
        controls: []
    });
    coordList.forEach(
        (coords, i) => {
            let circleLayout = ymaps.templateLayoutFactory.createClass(
                `<div class="placemark_layout_container">
                    <div id="my-mark-${i}" class="circle_layout">
                        <div class="dropdown">
                            <span class="main-text">Book our tickets</span>
                        </div>
                    </div>
                </div>`
            );

            let circlePlacemark = new ymaps.Placemark(
                coords, {
                     balloonContent: "Hello"
                }, {
                    iconLayout: circleLayout,
                    iconShape: {
                        type: "Circle",
                        coordinates: [0, 0],
                        radius: 10
                    }
                }
            );
            circlePlacemark.events.add(
                "mouseenter",
                () => {this.document.getElementById(`my-mark-${i}`).classList.add("active")}
            );
            circlePlacemark.events.add(
                "mouseleave",
                () => {this.document.getElementById(`my-mark-${i}`).classList.remove("active")}
            );
            map.geoObjects.add(circlePlacemark);
        }
    )
});
