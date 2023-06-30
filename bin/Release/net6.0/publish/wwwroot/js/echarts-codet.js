var echartsAry = [];
function floatingPopulationStatistics(
    elementId,
    dayAry,
    dataAry
)
{
    var chartDom = document.getElementById(elementId);
    var myChart = echarts.init(chartDom);
    var option = {
        xAxis: {
            type: 'category',
            show: true,
            boundaryGap: true,
            //data: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24]
            data: dayAry,
        },
        yAxis: {
            show: true,
            type: 'value'
        },
        grid: {
            top:'6%',
            left: '0%',
            right: '0%',
            bottom: '0%',
            containLabel: true
        },
        series: [
            {
                //data: [0, 80, 97, 170, 250, 270, 290, 320, 335, 350, 310, 280, 320, 276, 257, 235, 215, 207, 270, 290, 330, 260, 270, 180, 160],
                data: dataAry,
                type: 'line',
                smooth: 0.6,
                showSymbol: false,
                areaStyle: {
                    opacity: 0.8,
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                        {
                            offset: 0,
                            color: 'rgb(67, 120, 252)'
                        },
                        {
                            offset: 1,
                            color: 'rgb(255, 255, 255)'
                        }
                    ])
                }
            }
        ],
        tooltip: { // 鼠标悬浮提示框显示 X和Y 轴数据
            trigger: 'axis',
            backgroundColor: 'rgba(32, 33, 36,.7)',
            borderColor: 'rgba(32, 33, 36,0.20)',
            borderWidth: 1,
            textStyle: { // 文字提示样式
                color: '#fff',
                fontSize: '12'
            },
            axisPointer: { // 坐标轴虚线
                type: 'cross',
                label: {
                    backgroundColor: '#6a7985'
                }
            },
        }
    };

    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
    echartsAry.push(myChart);
}

function caseStatistics(
    elementId,
    dayAry,
    newCaseDataAry,
    handlingCasesDataAry
)
{
    var chartDom = document.getElementById(elementId);
    var myChart = echarts.init(chartDom);
    var option = {
        xAxis: {
            type: 'category',
            show: true,
            boundaryGap: true,
            //data: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24]
            data: dayAry,
        },
        yAxis: {
            show: true,
            type: 'value'
        },
        grid: {
            top: '6%',
            left: '0%',
            right: '0%',
            bottom: '0%',
            containLabel: true
        },
        series: [
            {
                //data: [0, 80, 97, 170, 250, 270, 290, 320, 335, 350, 310, 280, 320, 276, 257, 235, 215, 207, 270, 290, 330, 260, 270, 180, 160],
                name:'案件新增',
                data: newCaseDataAry,
                type: 'line',
                smooth: 0.6,
                showSymbol: false,
                lineStyle: {
                    color:'#955af4'
                },
                areaStyle: {
                    opacity: 1,
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                        {
                            offset: 0,
                            color: 'rgb(67, 120, 252)'
                        },
                        {
                            offset: 1,
                            color: 'rgb(255, 255, 255)'
                        }
                    ])
                }
            },
            {
                //data: [0, 80, 97, 170, 250, 270, 290, 320, 335, 350, 310, 280, 320, 276, 257, 235, 215, 207, 270, 290, 330, 260, 270, 180, 160],
                name: '处理统计',
                data: handlingCasesDataAry,
                type: 'line',
                smooth: 0.6,
                showSymbol: false,
                lineStyle: {
                    color: '#af7efe'
                },
                labelLayout: function () {
                    var random = Math.random() * 700
                    return {
                        x: myChart.getWidth() - random,
                        draggable: true
                    };
                },
                areaStyle: {
                    opacity: 0.3,
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                        {
                            offset: 0,
                            color: 'rgb(255, 115, 255)'
                        },
                        {
                            offset: 1,
                            color: 'rgb(255, 255, 255)'
                        }
                    ])
                }
            }
        ],
        tooltip: { // 鼠标悬浮提示框显示 X和Y 轴数据
            trigger: 'axis',
            backgroundColor: 'rgba(32, 33, 36,.7)',
            borderColor: 'rgba(32, 33, 36,0.20)',
            borderWidth: 1,
            textStyle: { // 文字提示样式
                color: '#fff',
                fontSize: '12'
            },
            formatter: function (params) {
                var val0 = params[0]["value"];
                var val1 = params[1]["value"];
                var circle = "<span style='display:inline-block;margin-right:5px;border-radius:50%;width:10px;height:10px;left:5px;background-color:{color}'></span>";
                var data0 = circle.replace('{color}', 'rgb(67, 120, 252)') + params[0]["seriesName"] + ":" + val0;
                var data1 = circle.replace('{color}', 'rgb(255, 115, 255)') + params[1]["seriesName"] + ":" + val1;
                return params[0].axisValueLabel + "<br/>" + data0 + "<br/>" + data1 + "<br/>";
            },
            axisPointer: { // 坐标轴虚线
                type: 'cross',
                label: {
                    backgroundColor: '#6a7985'
                }
            },
        }
    };

    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
    echartsAry.push(myChart);
}

function claimStatistics(
    elementId,
    monthAry,
    dataAry
)
{
    var chartDom = document.getElementById(elementId);
    var myChart = echarts.init(chartDom);
    option = {
        xAxis: {
            type: 'category',
            //data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
            data: monthAry
        },
        yAxis: {
            type: 'value'
        },
        grid: {
            top: '6%',
            left: '0%',
            right: '0%',
            bottom: '0%',
            containLabel: true
        },
        series: [
            {
                //data: [120, 200, 150, 80, 70, 110, 130, 150, 160, 180, 210, 310],
                data: dataAry,
                type: 'bar',
                barWidth: 18,
                itemStyle: {
                    normal: {
                        //柱状图柱子颜色
                        color: function (params) {
                            var colorList = ['#6D79FF', '#6D79FF', '#6D79FF', '#6D79FF', '#6D79FF', '#6D79FF'];
                            return colorList[params.dataIndex];
                        },
                        // 柱形图圆角，初始化效果
                        barBorderRadius: [10, 10, 0, 0],
                        //统计柱状图线性颜色
                        color: new echarts.graphic.LinearGradient(1, 1, 0, 0, [
                            {
                                offset: 0,
                                color: "#6D79FF"
                            },
                            {
                                offset: 1,
                                color: "#6D79FF"
                            }
                        ])
                    }
                }
            }
        ],
        tooltip: { // 鼠标悬浮提示框显示 X和Y 轴数据
            trigger: 'axis',
            backgroundColor: 'rgba(32, 33, 36,.7)',
            borderColor: 'rgba(32, 33, 36,0.20)',
            borderWidth: 1,
            textStyle: { // 文字提示样式
                color: '#fff',
                fontSize: '12'
            },
            axisPointer: { // 坐标轴虚线
                type: 'cross',
                label: {
                    backgroundColor: '#6a7985'
                }
            },
        }
    };

    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
    echartsAry.push(myChart);
}

//统计图尺寸自适应
function echartResize() {
    for (var i = 0; i < echartsAry.length; i++)
        echartsAry[i].resize();
}