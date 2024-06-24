//https://developer.mozilla.org/en-US/docs/Web/API/Document/DOMContentLoaded_event
// loads what on HTML 
document.addEventListener('DOMContentLoaded', function () {
  // Data
  const years = [
    2020, 2019, 2018, 2017, 2016, 
    2015, 2014, 2013, 2012, 2011
  ];
  const categories = [
    "No Health Insurance",
    "Did not get needed medical care",
    "No Personal Doctor",
    "Drinks 1 or more sugar-sweetened beverages per day",
    "Smoking Status (current smokers)",
    "Binge Drinking",
    "Obesity",
    "Colon cancer screening, adults age 50+ (colonoscopy)",
    "Self-reported Health Status (excellent/very good/good)",
    "Flu shot in last 12 months, adults ages 65+ (not age-adjusted)"
  ];

  const data = {
    // data in const data
    labels: years,
    datasets: [
      {
        // in seprate categories 
        label: categories[0],
        data: [
          12.6, 12.7, 11.6, 11.8, 10.9,
          12.6, 13.8, 20.9, 19.8, 18.6
        ],
        // background colors red green blue alpha 
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1
      },
      {
        label: categories[1],
        data: [
          12.4, 12.4, 11.1, 10.3, 10.5,
          9.9, 9.6, 11.2, 11.1, 10.7
        ],
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1
      },
      {
        label: categories[2],
        data: [
          28.8, 16.2, 15.6, 15.2, 16.8,
          16.3, 15.6, 19.1, 18.3, 16.9
        ],
        backgroundColor: 'rgba(255, 206, 86, 0.2)',
        borderColor: 'rgba(255, 206, 86, 1)',
        borderWidth: 1
      },
      {
        label: categories[3],
        data: [
          22.3, 22.1, 23.6, 23, 22.7,
          23.7, 22.5, 23.3, 28.2, 29.9
        ],
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1
      },
      {
        label: categories[4],
        data: [
          10.9, 11.9, 12.8, 13.4, 13.1,
          14.3, 13.9, 16.1, 15.5, 14.8
        ],
        backgroundColor: 'rgba(153, 102, 255, 0.2)',
        borderColor: 'rgba(153, 102, 255, 1)',
        borderWidth: 1
      },
      {
        label: categories[5],
        data: [
          16.6, 18.9, 17.8, 17.3, 17,
          17.2, 16.5, 18.2, 19.6, 17.9
        ],
        backgroundColor: 'rgba(255, 159, 64, 0.2)',
        borderColor: 'rgba(255, 159, 64, 1)',
        borderWidth: 1
      },
      {
        label: categories[6],
        data: [
          25.4, 24.8, 25.7, 25.1, 23.6,
          24.1, 24.7, 23.4, 24.2, 23.7
        ],
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1
      },
      {
        label: categories[7],
        data: [
          71.8, 70.7, 69.1, 69.9, 68.5,
          69.9, 69.9, 69, 68.5, 68.6
        ],
        backgroundColor: 'rgba(255, 206, 86, 0.2)',
        borderColor: 'rgba(255, 206, 86, 1)',
        borderWidth: 1
      },
      {
        label: categories[8],
        data: [
          80.8, 76.6, 76.8, 76.8, 78,
          77.4, 77.8, 76.9, 78.7, 78.2
        ],
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1
      },
      {
        label: categories[9],
        data: [
          69.8, 67.6, 62.8, 66.1, 65.4,
          65.5, 64.2, 66.8, 61.8, 67.4
        ],
        backgroundColor: 'rgba(153, 102, 255, 0.2)',
        borderColor: 'rgba(153, 102, 255, 1)',
        borderWidth: 1
      }
    ]
  };

  // Config
  const config = {
    type: 'bar',
    data: data,
    // object varible to config chart 
    options: {
      // interactive displays and cross out bars 
      responsive: true,
      // add plugin for charts to display legends and location 
      plugins: {
        // colors display on graph and diffrent categories on the graph 
        legend: {
          // position of key 
          position: 'bottom',
          
        },
        title: {
          display: true,
          text: 'Health Data'
        }
      },
      scales: {
        x: {
          // stacks gorizontal  
          // could be stacked or indivudual 
          stacked: false,
          title: {
            display: true,
            text: 'Year'
          }
        },
        y: {
          //stacks  veritcal on the data
          stacked: false,
          title: {
            display: true,
            text: 'Prevalence (%)'
          }
        }
      }
    },
  };

  // Render Chart
  var myChart = new Chart(
    document.getElementById('myChart'),
    config
  );
});
