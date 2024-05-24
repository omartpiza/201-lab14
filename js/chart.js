'use strict';

let canvasElem = document.getElementById('chart')

/* TODO:
 * - Instantiate a new AppState
 * - Use a method on that AppState to load vote data from localStorage.
 * - Create a data object for chart.js using your AppState's allProducts array.
 * - Combine the data object with configuration information for chart.js type, colors, etc
 * - Call chart.js with the configuration and the canvasElem
 *
 */
const state = new AppState();
state.loadItems();
console.log(state);

function renderChart() {
    const ctx = canvasElem.getContext('2d');
    const productNames = state.allProducts.map(product => product.name);
    const productVotes = state.allProducts.map(product => product.timesClicked);
    const productShown = state.allProducts.map(product => product.timesShown);

    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: productNames,
            datasets: [
                {
                    label: 'Votos',
                    data: productVotes,
                    backgroundColor: 'rgba(75, 192, 192, 0.2)',
                    borderColor: 'rgba(75, 192, 192, 1)',
                    borderWidth: 1
                },
                {
                    label: 'Visto',
                    data: productShown,
                    backgroundColor: 'rgba(153, 102, 255, 0.2)',
                    borderColor: 'rgba(153, 102, 255, 1)',
                    borderWidth: 1
                }
            ]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}

renderChart();