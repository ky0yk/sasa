'use strict';

const assessmentButton = document.getElementById('assessment');
const userNameInput = document.getElementById('user-name');

assessmentButton.onclick = () => {
    //console.log(network.network.value)
    // ユーザー名をセット
    setUserName();
    // resultをセットする
    data.datasets[0].data = skillParams()
    //console.log(data.datasets[0].data)
    // グラフ作成
    CreateChart();
}

// グラフ作成
const CreateChart = () => {
    const parent = document.getElementById('chart-area')
    const children = document.getElementsByTagName('canvas')
    // すでにグラフがあるか判定
    if (children.length != 0) {
        parent.removeChild(children[0]);
    }
    const ctx = document.createElement('canvas');
    parent.appendChild(ctx);
    new Chart(ctx, config);
};


// ユーザー名をセット
const setUserName = () => {
    const userName = userNameInput.value
    options.plugins.title.text = `${userName}のSAスキル`
}

// スキルパラメーター取得
const skillParams = () => {
    // TODO ハードコードをなんとかする
    const params = [
        document.getElementById('network').network.value,
        document.getElementById('security').security.value,
        document.getElementById('data-analytics').dataAnalytics.value,
        document.getElementById('domain-knowledge').domainKnowledge.value,
        document.getElementById('application').application.value,
        document.getElementById('contents-delivery').contentsDelivery.value,
    ].map(i => parseInt(i))
    return params
}



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
            text: 'カスタムチャートタイトル',
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




