//function to handle user securely logging out of session
//returns user to login page
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




//attempting a function to pull data from db and display user past moods to page
  var tester = document.querySelector('#moodymod');
  const getMoods = async () => {
    await fetch(`/api/moods/:id`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        // tester.textContent = data.moodData;
        data.moodData.map(({ hows_today, improve_day }) => { return { hows_today, improve_day} })
        // tester.textContent = data.moodData[2].hows_today;
      
      })
      .catch((err) => {
        console.error(err);
      });
    
  };
  getMoods();


//DOM variables needed to display randomly generated motivational quote
var quote = document.querySelector('#bigQuote');
var auth = document.querySelector('#author');
//function to fetch random quote from 3rd party api
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

//function to handle user input entered into mood form and push it to the database
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




//calls getQuote to get a new motivational quote each time page is refreshed
  getQuote()