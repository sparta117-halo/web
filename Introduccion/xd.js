
    const ctx = document.getElementById('graficaTapires').getContext('2d');

    const grafica = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['México', 'Brasil', 'Colombia', 'Perú', 'Ecuador'],
        datasets: [{
          label: 'Población estimada',
          data: [1500, 5000, 2300, 1800, 1000],
          backgroundColor: 'rgba(34, 139, 34, 0.6)', // Verde selva
          borderColor: 'rgba(34, 139, 34, 1)',
          borderWidth: 2
        }]
      },
      options: {
        responsive: true,
        scales: {
          y: {
            beginAtZero: true,
            title: {
              display: true,
              text: 'Número de individuos'
            }
          }
        }
      }
    });
