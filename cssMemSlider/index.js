const memesData = [
  {
    id: 1,
    src: './assets/invasion.jpg',
    descr: 'Я вам сейчас покажу, откуда готовилось нападение',
  },
  {
    id: 2,
    src: './assets/sadness.jpg',
    descr: 'Когда где-то идет война, а Франция еще не подняла белый флаг',
  },
  {
    id: 3,
    src: './assets/for the better.jpg',
    descr: 'Это же к лучшему, правда?',
  },
  {
    id: 4,
    src: './assets/modernSolutions.jpg',
    descr: 'Современные проблемы требуют современных решений',
  },
];

const sliderImgArea = document.querySelector('.slider__img-wrapper');
const sliderTextArea = document.querySelector('.slider__manage-text-inner');
const sliderControlsArea = document.querySelector('.slider__manage-controls');

const createSliderImages = (arr) => {
  arr.forEach((item) => {
    let img = document.createElement('img');
    img.src = item.src;
    img.style.width = '100%';
    img.style.height = '100%';
    img.style.flex = '0 0 auto';
    img.classList.add('slider__img');
    sliderImgArea.append(img);
  });
};

const createSliderDescriptions = (arr) => {
  arr.forEach((item) => {
    let descr = document.createElement('p');
    descr.innerHTML = item.descr;
    descr.style.width = '100%';
    descr.style.flex = '0 0 auto';
    descr.classList.add('slider__manage-descr');
    sliderTextArea.append(descr);
  });
};

const createSliderControls = (arr) => {
  arr.forEach((item) => {
    let controlOuter = document.createElement('button');
    controlOuter.classList.add('slider__control-outer');
    let controlInner = document.createElement('div');
    controlInner.classList.add('slider__control-inner');
    controlOuter.append(controlInner);
    sliderControlsArea.append(controlOuter);
  });
};

createSliderImages(memesData);
createSliderDescriptions(memesData);
createSliderControls(memesData);

const sliderControls = document.querySelectorAll('.slider__control-outer');

let count = 0;

sliderControls.forEach((item, index) => {
  item.addEventListener('click', function () {
    let imgWidth = sliderImgArea.offsetWidth;
    let descrWidth = sliderTextArea.offsetWidth;
    count = index + 1;

    if (count === 1) {
      sliderImgArea.style.transform = 'translate(0px)';
      sliderTextArea.style.transform = 'translate(0px)';
    } else {
      sliderImgArea.style.transform = 'translate(-' + index * imgWidth + 'px)';
      sliderTextArea.style.transform = 'translate(-' + index * descrWidth + 'px)';
    }
  });
});
