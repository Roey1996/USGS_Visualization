var myChart2 = echarts.init(document.getElementById('main'));
var style1 = [{
    'featureType': 'land', //调整土地颜色
    'elementType': 'geometry',
    'stylers': {
        'color': '#081734'
    }
}, {
    'featureType': 'building', //调整建筑物颜色
    'elementType': 'geometry',
    'stylers': {
        'color': '#04406F'
    }
}, {
    'featureType': 'building', //调整建筑物标签是否可视
    'elementType': 'labels',
    'stylers': {
        'visibility': 'off'
    }
}, {
    'featureType': 'highway', //调整高速道路颜色
    'elementType': 'geometry',
    'stylers': {
        'color': '#015B99'
    }
}, {
    'featureType': 'highway', //调整高速名字是否可视
    'elementType': 'labels',
    'stylers': {
        'visibility': 'off'
    }
}, {
    'featureType': 'arterial', //调整一些干道颜色
    'elementType': 'geometry',
    'stylers': {
        'color': '#003051'
    }
}, {
    'featureType': 'arterial',
    'elementType': 'labels',
    'stylers': {
        'visibility': 'off'
    }
}, {
    'featureType': 'green',
    'elementType': 'geometry',
    'stylers': {
        'visibility': 'off'
    }
}, {
    'featureType': 'water',
    'elementType': 'geometry',
    'stylers': {
        'color': '#044161'
    }
}, {
    'featureType': 'subway', //调整地铁颜色
    'elementType': 'geometry.stroke',
    'stylers': {
        'color': '#003051'
    }
}, {
    'featureType': 'subway',
    'elementType': 'labels',
    'stylers': {
        'visibility': 'off'
    }
}, {
    'featureType': 'railway',
    'elementType': 'geometry',
    'stylers': {
        'visibility': 'off'
    }
}, {
    'featureType': 'railway',
    'elementType': 'labels',
    'stylers': {
        'visibility': 'off'
    }
}, {
    'featureType': 'all', //调整所有的标签的边缘颜色
    'elementType': 'labels.text.stroke',
    'stylers': {
        'color': '#313131'
    }
}, {
    'featureType': 'all', //调整所有标签的填充颜色
    'elementType': 'labels.text.fill',
    'stylers': {
        'color': '#FFFFFF'
    }
}, {
    'featureType': 'manmade',
    'elementType': 'geometry',
    'stylers': {
        'visibility': 'off'
    }
}, {
    'featureType': 'manmade',
    'elementType': 'labels',
    'stylers': {
        'visibility': 'off'
    }
}, {
    'featureType': 'local',
    'elementType': 'geometry',
    'stylers': {
        'visibility': 'off'
    }
}, {
    'featureType': 'local',
    'elementType': 'labels',
    'stylers': {
        'visibility': 'off'
    }
}, {
    'featureType': 'subway',
    'elementType': 'geometry',
    'stylers': {
        'lightness': -65
    }
}, {
    'featureType': 'railway',
    'elementType': 'all',
    'stylers': {
        'lightness': -40
    }
}, {
    'featureType': 'boundary',
    'elementType': 'geometry',
    'stylers': {
        'color': '#8b8787',
        'weight': '1',
        'lightness': -29
    }
}];
var centercoor = [115.97, 29.71];
myChart2.showLoading();
$.get('https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_month.geojson', function (data) {
    myChart2.hideLoading();
    option = {
        bmap: {
            center: centercoor,
            mapStyle: {
                styleJson: style1
            },
            zoom: 2,
            roam: true,
        },
        title: {
            text: '全球地震数据实时可视化',
            subtext: '最近一个月-----数据来源于:USGS',
            sublink: 'https://earthquake.usgs.gov/data/',
            x: 'center',
            textStyle: {
                fontSize: 26,
                color: '#fff'
            }
        },
        tooltip: {
            trigger: 'item',
            showDelay: 0,
            transitionDuration: 0.2,
            formatter: function (params) {

                return '名称：' + params.data.name + '<br/>' +
                    '时间：' + new Date(params.data.time).toLocaleString() + '<br/>' +
                    '震级：' + params.data.mag + '级<br/>' +
                    '地点： ' + '(' + params.data.value[0] + ', ' + params.data.value[1] + ')';
            }
        },
        toolbox: {
            show: true,
            left: 'left',
            top: 'top',
            feature: {
                mark: { show: true },
                dataView: { show: true, readOnly: false },
                restore: { show: true },
                saveAsImage: { show: true }
            }
        },
        legend: {
            orient: 'vertical',
            y: 'bottom',
            x: 'right',
            data: ['地震强度'],
            textStyle: {
                color: '#d94e5d'
            }
        },
        visualMap: {
            min: 0,
            max: 10,
            splitNumber: 5,
            //calculable: true,
            // inRange: {
            //     color: ['#50a3ba', '#eac736', '#d94e5d']
            // },
            color: ['#d94e5d', '#eac736', '#50a3ba'],
            textStyle: {
                color: '#fff'
            }
        },
        series: [
            {
                name: '地震强度',
                type: 'scatter',
                coordinateSystem: 'bmap',
                data: [],
                symbolSize: function (val, params) {
                    return params.data.mag * 2;
                },
                showEffectOn: 'render',
                rippleEffect: {
                    brushType: 'stroke'
                },
                hoverAnimation: true,
                label: {
                    normal: {
                        show: false
                    },
                    emphasis: {
                        show: false
                    }
                },
                itemStyle: {
                    normal: {
                        color: 'red',
                        shadowBlur: 10,
                        shadowColor: '#333'
                    }
                }
            },
            {
                name: 'Top 5',//地震强度最激烈的前五
                type: 'effectScatter',
                coordinateSystem: 'bmap',
                data: [],
                symbolSize: function (val, params) {
                    return params.data.mag * 2;
                },
                showEffectOn: 'render',
                rippleEffect: {
                    brushType: 'stroke'
                },
                hoverAnimation: true,
                label: {
                    normal: {
                        show: false
                    },
                    emphasis: {
                        show: false
                    }
                },
                itemStyle: {
                    normal: {
                        color: 'red',
                        shadowBlur: 10,
                        shadowColor: '#333'
                    }
                },
                zlevel: 1
            }
        ]
    };
    if (typeof data === 'string') {
        data = JSON.parse(data);
    }
    for (var n = 0; n < data.features.length; n++) {
        option.series[0].data.push({
            name: data.features[n].properties.title,
            value: data.features[n].geometry.coordinates.slice(0, 2)
                .concat(data.features[n].properties.mag),
            mag: data.features[n].properties.mag,
            time: data.features[n].properties.time
        });
    }

    option.series[1].data = option.series[0].data.sort(function (a, b) {
        return b.mag - a.mag;
    }).slice(0, 6);
    myChart2.setOption(option);
    map = myChart2.getModel().getComponent('bmap').getBMap();
    map.addControl(new BMap.NavigationControl());
    map.addControl(new BMap.ScaleControl());
    map.addControl(new BMap.MapTypeControl());
    // map.addEventListener("click",function(e){
    //     alert(e.point.lng + "," + e.point.lat);
    // });
});

// $('#countrySearch').click(function (e) {
//     e.preventDefault();
//     var _url = 'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_month.geojson';
//     $.ajax({
//         url: _url,
//         type: 'GET',
//         cache: false,
//         processData: false,
//         contentType: false
//     }).done(function (data) {
//                 window.alert("hhhhhh");
//     }).fail(function (res) {
//         console.log('fail,' + res);
//     });
// });

!function () {
    var handler = function () {
        //获取下列网站的geojson数据，异步加载 并将其加载至数组中
        $.get('https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_month.geojson', function (data) {
            option = {
                series: [
                    {data: []},
                    {data: []}
                ]
            };

            if (typeof data === 'string') {
                data = JSON.parse(data);//将数据转换为 JavaScript 对象。
            }

            for (var n = 0; n < data.features.length; n++) {//feature是json数据中，以数组形式展示
                option.series[0].data.push({
                    name: data.features[n].properties.title,
                    value: data.features[n].geometry.coordinates.slice(0, 2)//取数组中的前两个数
                        .concat(data.features[n].properties.mag),//链接上步获得的值
                    mag: data.features[n].properties.mag,//地震级数
                    time: data.features[n].properties.time//时间
                });
            }
            option.series[1].data = option.series[0].data.sort(function (a, b) {
                return b.mag - a.mag;
            }).slice(0, 6);
            myChart2.setOption(option);
        });
    };
    setInterval(handler, 300000);//五分钟更新一次数据
}();