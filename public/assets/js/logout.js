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

  getQuote()