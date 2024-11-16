// create a java script function
function shadowButton(layerName, translate) {
    let layerSource = map.getSource(layerName)
    let shadowLayerName = `${layerName}-shadow`
    map.addLayer({
        id: shadowLayerName,
        type: "fill",
        source: layerSource,
        layout: {},
        paint: {
            "fill-outline-color": "hsla(0, 0%, 0%, 0)",
            "fill-color": [
                "case",
                ["boolean", ["feature-state", "hover"], false],
                "#050505",
                "white"
            ],
            //what's happening below is the boolean value true is what's listed first, the line below is what boolean false is.
            "fill-opacity": [
                "case",
                ["boolean", ["feature-state", "hover"], false],
                0.2,
                0
            ],
            "fill-translate": [translate, translate]
        }
    });
    map.on("mousemove", layerName, (e) => {
        map.getCanvasContainer().style.cursor = 'pointer';
        if (e.features.length > 0) {
            if (hoveredStateId !== null) {
                map.setFeatureState(
                    {
                        source: layerSource,
                        id: hoveredStateId
                    },
                    { hover: false }
                );
            }
            hoveredStateId = e.features[0].id;
            map.setFeatureState(
                {
                    source: layerSource,
                    id: hoveredStateId
                },
                { hover: true }
            );
        }
    });
    map.on("mousedown", layerName, (e) => {
        map.setPaintProperty('shadowLayerName', 'fill-opacity', 0);
    });
    map.on("mouseup", layerName, (e) => {
        map.setPaintProperty('shadowLayerName', 'fill-opacity', [
            "case",
            ["boolean", ["feature-state", "hover"], false],
            0.2,
            0
        ]);
        // this is just for testing
        map.setPaintProperty(layerName, 'fill-color', [
            "case",
            ["boolean", ["feature-state", "hover"], false],
            '#' + (0x1000000 + Math.random() * 0xffffff).toString(16).substr(1, 6),
            "white"
        ])
    });

    // When the mouse leaves the state-fill layer, update the feature state of the
    // previously hovered feature.
    map.on("mouseleave", layerName, () => {
        if (hoveredStateId !== null) {
            map.setFeatureState(
                {
                    source: layerSource,
                    id: hoveredStateId
                },
                { hover: false }
            );
        }
        hoveredStateId = null;
    });
}

module.exports.shadowButton = shadowButton;