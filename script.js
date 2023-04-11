let phrases = [
    { text: 'Улица Ногина', image: 'images/photos/photo-1.jpg' },
    { text: 'Улица Строителей', image: 'images/photos/photo-2.jpg' },
    { text: 'Улица Строителей', image: 'images/photos/photo-3.jpg' },
    { text: 'Улица Строителей', image: 'images/photos/photo-4.jpg' },
    { text: 'Улица Ногина', image: 'images/photos/photo-5.jpg' },
    { text: 'Улица Строителей', image: 'images/photos/photo-6.jpg' },
    { text: 'Улица Строителей', image: 'images/photos/photo-7.jpg' },
    { text: 'Улица Ватутина', image: 'images/photos/photo-8.jpg' },
    { text: 'Улица Ватутина', image: 'images/photos/photo-9.jpg' },
  ];
  
  function getRandomElement(arr) {
    let randIndex = Math.floor(Math.random() * arr.length);
    return arr[randIndex];
  }
  
  let button = document.querySelector('.button');
  let phrase = document.querySelector('.phrase');
  let advice = document.querySelector('.advice');
  let image = document.querySelector('.image');
  
  button.addEventListener('click', function () {
    let randomElement = getRandomElement(phrases);
    smoothly(phrase, 'textContent', randomElement.text);
    smoothly(image, 'src', randomElement.image);
  
    if (randomElement.text.length > 40) {
      advice.style.fontSize = '33px';
    } else {
      advice.style.fontSize = '42px';
    }
  });
  
  for (let i = 0; i <= 2; i = i + 1) {
    smoothly(phrase, 'textContent', phrases[i].text);
    smoothly(image, 'src', phrases[i].image);
  }