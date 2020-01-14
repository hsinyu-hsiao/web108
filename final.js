$(function(){
	
	// 取得 status bar 距離頁面(父元素)頂端的高度
	let fixedBar = $('#status-bar').offset().top;
	// let fixedBar = $('#status-bar').position().top;
	
	$(window).scroll(function(){
		// 視窗 Y 軸捲動值
		let scrollY = $(this).scrollTop();
    // 視窗 Y 軸最大捲動值 = 網頁文檔高度 - 視窗高度		
		let scrollMax = $(document).height() - $(this).height();
		// 視窗 X 軸寬度
		let windowWidth = $(this).width();
		// 網頁目前 Y 軸捲動(瀏覽)比例
		let nowScrolled = windowWidth * scrollY / scrollMax;
		
		// console.log(scrollY, scrollMax, windowWidth, nowScrolled);
		$('#status-bar').addClass('fixed');
		// 固定 status bar  
		// scrollY >= fixedBar ? $('#status-bar').addClass('fixed') : $('#status-bar').removeClass('fixed');
		
		// 改變 status bar 的瀏覽進度  
		$('.status-bar-now').css('width', nowScrolled);
	})
})

// chart2
var chartData = [{"visitor": 4.7, "visit": "再生能源"}, {"visitor": 35.1, "visit": "燃煤"}, {"visitor": 33.6, "visit":"天然氣"}, {"visitor": 12.8, "visit":"其他化石燃料"}, {"visitor": 10.1, "visit":"核能"}, {"visitor": 1.2, "visit":"抽蓄水力發電"}]

var visitorData = [],
    visitData = [];

for (var i = 0; i < chartData.length; i++) {
    visitorData.push(chartData[i]['visitor'])
    visitData.push(chartData[i]['visit'])
}

var myChart = new Chart(document.getElementById('mychart'), {
    type: 'doughnut',
    animation:{
        animateScale:true
    },
    data: {
        labels: visitData,
        datasets: [{
            label: 'Visitor',
            data: visitorData,
            backgroundColor: [
                "#CDDC39","#7dcfe8",
                "#b3dfe7",   "#36A2EB",
                "#3e8787",
                "#ccc6c6",
            ]
        }]
    },
    options: {
        responsive: true,
        legend: false,
        legendCallback: function(chart) {
            var legendHtml = [];
            legendHtml.push('<ul>');
            var item = chart.data.datasets[0];
            for (var i=0; i < item.data.length; i++) {
                legendHtml.push('<li>');
                legendHtml.push('<span class="chart-legend" style="background-color:' + item.backgroundColor[i] +'"></span>');
                legendHtml.push('<span class="chart-legend-label-text">' + item.data[i] + ' ％ '+chart.data.labels[i]);
                legendHtml.push('</li>');
            }

            legendHtml.push('</ul>');
            return legendHtml.join("");
        },
        tooltips: {
             enabled: true,
             mode: 'label',
             callbacks: {
                label: function(tooltipItem, data) {
                    var indice = tooltipItem.index;
                    return data.datasets[0].data[indice] + " ％ " + data.labels[indice] ;
                }
             }
         },
    }
});

$('#my-legend-con').html(myChart.generateLegend());

console.log(document.getElementById('my-legend-con'));

// Chart3
var chartData2 = [{"visitor2": 20, "visit2": "再生能源"}, {"visitor2": 30, "visit2": "燃煤"}, {"visitor2": 50, "visit2":"天然氣"}]

var visitorData2 = [],
    visitData2 = [];

for (var i = 0; i < chartData2.length; i++) {
    visitorData2.push(chartData2[i]['visitor2'])
    visitData2.push(chartData2[i]['visit2'])
}

var myChart2 = new Chart(document.getElementById('mychart2'), {
    type: 'doughnut',
    animation:{
        animateScale:true
    },
    data: {
        labels: visitData2,
        datasets: [{
            label: 'Visitor2',
            data: visitorData2,
            backgroundColor: [
                "#CDDC39","#7dcfe8",
                "#b3dfe7",
            ]
        }]
    },
    options: {
        responsive: true,
        legend: false,
        legendCallback: function(chart) {
            var legendHtml = [];
            legendHtml.push('<ul>');
            var item = chart.data.datasets[0];
            for (var i=0; i < item.data.length; i++) {
                legendHtml.push('<li>');
                legendHtml.push('<span class="chart-legend2" style="background-color:' + item.backgroundColor[i] +'"></span>');
                legendHtml.push('<span class="chart-legend-label-text">' + item.data[i] + ' ％ '+chart.data.labels[i]);
                legendHtml.push('</li>');
            }

            legendHtml.push('</ul>');
            return legendHtml.join("");
        },
        tooltips: {
             enabled: true,
             mode: 'label',
             callbacks: {
                label: function(tooltipItem, data) {
                    var indice = tooltipItem.index;
                    return data.datasets[0].data[indice] + " ％ " + data.labels[indice] ;
                }
             }
         },
    }
});

$('#my-legend-con2').html(myChart2.generateLegend());

console.log(document.getElementById('my-legend-con2'));
