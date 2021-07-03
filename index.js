'use strict';

const assessmentButton = document.getElementById('assessment');
const userNameInput = document.getElementById('user-name');
const chartArea = document.getElementById('chart-area');

assessmentButton.onclick = () => {
    setUserName();
    setSkillParams();
    renderChart();
    scrollToChartArea();
};

const setUserName = () => {
    const userName = userNameInput.value ? userNameInput.value : '名無しさん';
    options.plugins.title.text = `${userName}のSAスキル`;
};

const setSkillParams = () => {
    // skillItemに対応する入力値をループで取得し、配列にする
    const skillParams = Object.keys(skillItems).map(key => {
        return document.getElementById(key).level.value
    })
    data.datasets[0].data = skillParams;
};

const renderChart = () => {
    const children = document.getElementsByTagName('canvas')
    // すでにチャートがあるか判定し、あれば全て削除
    if (chartArea.hasChildNodes()) {
        // HTMLコレクションのままではforEachが使えない
        Array.prototype.forEach.call(children, child => parent.removeChild(child));
    };
    const ctx = document.createElement('canvas');
    chartArea.appendChild(ctx);
    new Chart(ctx, config);
};

const scrollToChartArea = () => {
    const chartPosition = chartArea.getBoundingClientRect();
    window.scrollTo(0, chartPosition.top);
};

const skillItems = {
    'network': 'ネットワーク',
    'security': 'セキュリティ',
    'data-analytics': 'データ分析',
    'domain-knowledge': 'ドメイン知識',
    'application': 'アプリケーション',
    'contents-delivery': '配信'
};

const labels = Object.values(skillItems);

const data = {
    labels: labels,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    datasets: [{
        label: 'あなた',
        data: null,
        fill: true,
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgb(255, 99, 132)',
        pointBackgroundColor: 'rgb(255, 99, 132)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgb(255, 99, 132)'
    }, {
        label: '部門平均',
        data: [3, 3, 3, 3, 3, 3],
        fill: true,
    }]
};

const backgroundColorPlugin = {
    id: 'custom_canvas_background_color',
    beforeDraw: (chart) => {
        const ctx = chart.canvas.getContext('2d');
        ctx.save();
        ctx.globalCompositeOperation = 'destination-over';
        ctx.fillStyle = 'white';
        ctx.fillRect(0, 0, chart.width, chart.height);
        ctx.restore();
    }
};

const options = {
    responsive: true,
    elements: {
        line: {
            borderWidth: 3
        }
    },
    scales: {
        r: {
            min: 0,
            max: 5,
            ticks: {
                stepSize: 1,
                display: false
            },
            pointLabels: {
                font: {
                    size: 20
                },
            },
        }
    },
    plugins: {
        title: {
            display: true,
            text: 'TBD',
            font: {
                size: 30
            }
        },
        legend: {
            labels: {
                font: {
                    size: 15
                }
            }
        }
    }
}


const config = {
    type: 'radar',
    data: data,
    options: options,
    plugins: [backgroundColorPlugin],
};


