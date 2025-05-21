window.addEventListener('DOMContentLoaded', () => {
  const ctx = document.getElementById('graficoLinea').getContext('2d');

  new Chart(ctx, {
    type: 'line',
    data: {
      labels: ['2000', '2005', '2010', '2015', '2020', '2025'],
      datasets: [{
        label: 'Población estimada del tapir',
        data: [5000, 4800, 4500, 4200, 3900, 3500],
        borderColor: '#388e3c',
        backgroundColor: 'rgba(56, 142, 60, 0.2)',
        tension: 0.3,
        fill: true,
        pointBackgroundColor: '#2e7d32'
      }]
    },
    options: {
      responsive: false,
      plugins: {
        legend: {
          display: true,
          position: 'bottom'
        }
      },
      scales: {
        y: {
          beginAtZero: false
        }
      }
    }
  });
});
