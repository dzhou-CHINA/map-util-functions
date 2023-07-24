/**
 * Inits the map
 *
 * @param {String} id 
 */
function _initMap(id) {
    window.map = new mapmost.map({
        container: id,
        style: '',
        bearing: '', // 地图初始方位，以【从北方逆时针方向测量的方位】
        pitch: '' // 地图的初始【倾斜角】，当前视线与俯视角之间的角度（0-85），俯视为0度
    });
};

function _addLayer({ id, type = 'model' }) {
    window.map.on('load', () => {
        window.map.addLayer({
            id,
            type,
            callback: (group, layer) => {
                
            }
        });
    });
};

/**
 * Adds the models to the certain Layer
 *
 * @param {String} layerId the ID of the layer that adding the models
 */
function _addBatchModel(layerId) {
    const layer = window.mapLayers[layerId];

    layer.addBatchModel(
        {
            type: 'model',
            model: {
                type: 'glb', // [gltf, glb, obj, fbx]
                url: 'the glb url',
                data: [
                    {
                        // ... other fields
                        customData: {
                            rotatex: 90,
                            rotatey: 90,
                            rotatez: 90,
                            translatex: 2,
                            translatey: 2,
                            translatez: 2
                        },
                        coordinate: [120, 119, 2] // [经，纬， 高]
                    }
                ]
            }
        },
        function(models) {
            models.children.forEach(child => {
                const { customData } = child.userData;
                const {
                    rotatex, rotatey, rotatez, translatex,
                    translatey, translatez
                } = customData;
                // 处理model一些逻辑
                // 放大、缩小、调整高度
                child.scale.set(2, 2, 2);

                // 旋转，参照系： x, y, z
                child.rotateX(rotatex / 180 * Math.PI);
                child.rotatey(rotatey / 180 * Math.PI);
                child.rotatez(rotatez / 180 * Math.PI);

                // 偏移， 参照系：x, y, z
                child.translateX(translatex);
                child.translatey(translatey);
                child.translatez(translatez);
            })
        }
    );
};

function _addModel()

function _addCircle() {

}