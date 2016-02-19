window.onload = function(){
    var lat = 33.562145;
    var lng = 130.363510;
    var map = new GMaps({
        div: '#map',
        lat: -20.604694,
        lng: 301.020441,
        zoom: 3
    });

    map.addMarker({//ウユニ
        lat: -20.448351,
        lng: -66.841084,
        title: 'uyuni',
        icon: 'images/map_uyuni.png',
        infoWindow: {
            content: '<p>ウユニ塩湖</p>'
        }
    });

    map.addMarker({//イグアス
        lat: -23.434553,
        lng:  -46.478126,
        title: 'iguazu',
        icon: 'images/map_iguazu.png',
        infoWindow: {
            content: '<p>イグアスの滝</p>'
        }
    });

    map.addMarker({
        lat: -13.538027,
        lng:  -71.943650,
        title: 'machupicchu',
        icon: 'images/map_Machu.png',
        infoWindow: {
            content: '<p>マチュピチュ</p>'
        }
    });
    var path = [[35.771786, 140.393185],//成田
                        [19.436365 , -99.071909],//メキシコ
                        [-12.024001, -77.112014],//リマ
                        [-23.434553 , -46.478126],//サンパウロ
                        [-12.024053 , -77.112036],//リマ
                        [-13.538027 , -71.943650],//クスコ
                        [-16.508890 , -68.176900],//ラパス
                        [-20.448351 , -66.841084],//ウユニ
                        [-16.508890 , -68.176900],//ラパス
                        [-12.024053 , -77.112036],//リマ
                        [40.637039 , -73.780098],//ニューヨーク
                        [35.771786, 140.393185],//成田
                        ];

    map.drawPolyline({
      path: path,
      strokeColor: '#131540',
      strokeOpacity: 0.6,
      strokeWeight: 6
    });
};
