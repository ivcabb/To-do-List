let useFirstAnimation = true; // přepínač mezi animacemi

function triggerDuckAnimation() {
  const duck = document.getElementById('duck');
  if (!duck) return;

  const animation1 = [
    'assets/duck1.1.png',
    'assets/duck1.2.png',
    'assets/duck1.1.png',
    'assets/duck1.2.png',
    'assets/duck1.1.png',
    'assets/duck1.2.png',
    'assets/duck1.1.png',
    'assets/duck1.2.png',


  ];

  const animation2 = [
    'assets/duck2.1.png',
    'assets/duck2.2.png',
    'assets/duck2.1.png',
    'assets/duck2.2.png',
    'assets/duck2.1.png',
    'assets/duck2.2.png',
    'assets/duck2.1.png',
    'assets/duck2.2.png'
  ];

  const frames = useFirstAnimation ? animation1 : animation2;
  useFirstAnimation = !useFirstAnimation;

  const original = 'assets/duck.png';
  let i = 0;

  const interval = setInterval(() => {
    if (i < frames.length) {
      duck.src = frames[i];
      i++;
    } else {
      clearInterval(interval);
      duck.src = original;
    }
  }, 100);
}