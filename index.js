'use strict';

const assessmentButton = document.getElementById('assessment');
const userNameInput = document.getElementById('user-name');

assessmentButton.onclick = () => {
    setUserName();
    setSkillParams();
    renderChart();
}

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
}

const renderChart = () => {
    const parent = document.getElementById('chart-area')
    const children = document.getElementsByTagName('canvas')
    // すでにグラフがあるか判定し、あれば全て削除
    if (parent.hasChildNodes()) {
        // HTMLコレクションのままではforEachが使えない
        Array.prototype.forEach.call(children, child => parent.removeChild(child));
    };
    const ctx = document.createElement('canvas');
    parent.appendChild(ctx);
    new Chart(ctx, config);
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
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgb(54, 162, 235)',
        pointBackgroundColor: 'rgb(54, 162, 235)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgb(54, 162, 235)'
    }]
};

const options = {
    elements: {
        line: {
            borderWidth: 3
        }
    },
    scales: {
        r: {
            angleLines: {
                display: false
            },
            suggestedMin: 1,
            suggestedMax: 5
        }
    },
    plugins: {
        title: {
            display: true,
            text: 'TBD',
            font: {
                size: 30
            }
        }
    }
}


const config = {
    type: 'radar',
    data: data,
    options: options,
};




