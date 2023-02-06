const logout = async () => {
    const response = await fetch('/api/users/logout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
    });
  
    if (response.ok) {
      document.location.replace('/login');
      console.log('you successfully logged out');
    } else {
      alert(response.statusText);
    }
  };
  
  document.querySelector('#logout').addEventListener('click', logout);
var quote = document.querySelector('#bigQuote');
var auth = document.querySelector('#author');
  function getQuote() {
    let quoteIndex = Math.floor(Math.random() *1643);
    console.log(quoteIndex);
  fetch("https://type.fit/api/quotes")
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    console.log(data[quoteIndex].text);
    quote.textContent = data[quoteIndex].text;
    auth.textContent = "  - " + data[quoteIndex].author;

    
  })};


  const newMoodFormHandler = async (event) => {
    event.preventDefault();
    console.log('Daily mood eval submitted');

    const hows_today = document.querySelector('#hows-today').value;
    const improve_day = document.querySelector('#improveDay').value;
    const proud_today = document.querySelector('#moodProud').value;
    const description = document.querySelector('#descript').value;
    const quote_descript = document.querySelector('#quote-descript').value;
    
    
    if (hows_today && improve_day && proud_today && description && quote_descript) {
    const response = await fetch('/api/moods/profile', {
      method: 'POST',
      body: JSON.stringify({
        hows_today,
        improve_day,
        proud_today,
        description,
        quote_descript
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      console.log('success mood entry');
    } else {
      alert(response.statusText);
    }
  }
    // document.location.replace('/profile');
};
  
  const moodSaveBtn = document.querySelector('#mood-form-save');


    moodSaveBtn.addEventListener('click', newMoodFormHandler);

  getQuote()