
// ABOUT SECTION INFORMATION
document.getElementById('tab1').addEventListener('click', () => {
  document.getElementById('info1').classList.add('show');
  document.getElementById('info1').classList.remove('hide'); // Show Tab 1
  document.getElementById('info2').classList.add('hide');
  document.getElementById('info2').classList.remove('show');
  document.getElementById('info3').classList.add('hide');
  document.getElementById('info3').classList.remove('show');
  // Mobile Tab Change
  document.getElementById('tab1').classList.add('tabSelect'); // Mobile Tab Selected
  document.getElementById('tab2').classList.remove('tabSelect');
  document.getElementById('tab3').classList.remove('tabSelect');
});
document.getElementById('tab2').addEventListener('click', () => {
  document.getElementById('info1').classList.add('hide');
  document.getElementById('info1').classList.remove('show');
  document.getElementById('info2').classList.add('show');
  document.getElementById('info2').classList.remove('hide'); // Show Tab 2
  document.getElementById('info3').classList.add('hide');
  document.getElementById('info3').classList.remove('show');
  // Mobile Tab Change
  document.getElementById('tab1').classList.remove('tabSelect');
  document.getElementById('tab2').classList.add('tabSelect'); // Mobile Tab Selected
  document.getElementById('tab3').classList.remove('tabSelect');
});
document.getElementById('tab3').addEventListener('click', () => {
  document.getElementById('info1').classList.add('hide');
  document.getElementById('info1').classList.remove('show');
  document.getElementById('info2').classList.add('hide');
  document.getElementById('info2').classList.remove('show');
  document.getElementById('info3').classList.add('show');
  document.getElementById('info3').classList.remove('hide'); // Show Tab 3
  // Mobile Tab Change
  document.getElementById('tab1').classList.remove('tabSelect');
  document.getElementById('tab2').classList.remove('tabSelect');
  document.getElementById('tab3').classList.add('tabSelect'); // Mobile Tab Selected
});

