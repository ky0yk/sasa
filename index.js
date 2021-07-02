'use strict';

const assessmentButton = document.getElementById('assessment');
const network = document.getElementById('network')


assessmentButton.onclick = () => {
    console.log(network.network.value)
}