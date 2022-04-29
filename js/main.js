

AOS.init();
AOS.init({
  // Global settings:
  disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
  initClassName: 'aos-init', // class applied after initialization
  animatedClassName: 'aos-animate', // class applied on animation
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)


  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 400, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: true, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});



Chart.register(ChartDeferred);
let popCanvas = document.getElementById('myChart');

Chart.defaults.font.family = "Cera";
Chart.defaults.font.weight = "400";
Chart.defaults.color = 'rgb(70, 2, 38)'
Chart.defaults.font.size = 20;
Chart.defaults.gridLines = true

let myChart = new Chart(document.getElementById('myChart'), {
  type: 'bar',
  data: {
    labels: ['Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь', 'Январь'],
    datasets: [
      {
        type: 'bar',
        label: 'Целевые звонки',
        data: [6, 8, 10, 28, 27, 42],
        backgroundColor: 'rgb(70, 2, 38)',
        barThickness: 47,
        hoverBackgroundColor: 'white',
        hoverBorderColor: 'rgb(70, 2, 38)',
        hoverBorderWidth: 2,
      },
      {
        type: 'line',
        label: '',
        data: [36, 22, 15, 11, 18, 11],
        borderWidth: 3,
        order: -1,
        enabled: false,
        borderColor: 'rgb(213, 172, 92)',
        borderDash: [10]
      },
      {
        type: 'bubble',
        data: [36, 22, 15, 11, 18, 11],
        radius: 17.5,
        hoverBackgroundColor: 'white',
        hoverBorderColor: 'black',
        backgroundColor: 'rgb(213, 172, 92)',
        order: -2,
      }
    ],
  },
  options: {
    animation: {
      duration: 4000
    },
    plugins: {
      title: {
        display: true,
        text: 'Целевые звонки',
        position: 'left',
        font: {
          size: 20,
          weight: '400'
        }
      },
      tooltip: {
        enabled: false
      },
      legend: {
        display: false
      },
      deferred: {
        xOffset: 150,   // defer until 150px of the canvas width are inside the viewport
        yOffset: '50%', // defer until 50% of the canvas height are inside the viewport
        delay: 500      // delay of 500 ms after the canvas is considered inside the viewport
      }
    },
    scales: {
      x: {
        grid: {
          display: false
        }
      },
      y: {
        grid: {
          display: false
        }
      }
    }
  }
});

const observer = new IntersectionObserver(entries => {
  // перебор записей
  entries.forEach(entry => {
    // если элемент появился
    if (entry.isIntersecting) {
      // добавить ему CSS-класс
      entry.target.classList.add('graphic__numberAnim');
    }
  });
});
observer.observe(document.querySelector('.graphic__number-1'));
observer.observe(document.querySelector('.graphic__number-2'));
observer.observe(document.querySelector('.graphic__number-3'));
observer.observe(document.querySelector('.graphic__number-4'));
observer.observe(document.querySelector('.graphic__number-5'));
observer.observe(document.querySelector('.graphic__number-6'));
