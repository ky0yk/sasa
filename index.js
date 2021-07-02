'use strict';

const ctx = document.getElementById('myChart')

const assessmentButton = document.getElementById('assessment');
const network = document.getElementById('network')


assessmentButton.onclick = () => {
    console.log(network.network.value)
    // resultをセットする
}

let result = [2, 3, 3, 5, 4, 3]

const data = {
    labels: [
        'ネットワーク',
        'セキュリティ',
        'データ分析',
        'ドメイン知識',
        'アプリケーション',
        '配信'
    ],
    datasets: [{
        label: 'あなた',
        data: result,
        fill: true,
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgb(255, 99, 132)',
        pointBackgroundColor: 'rgb(255, 99, 132)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgb(255, 99, 132)'
    },]
};


const config = {
    type: 'radar',
    data: data,
    options: {
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
        }
    },
};

var myChart = new Chart(ctx, config);