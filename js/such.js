console.log('hallo');
document.querySelector('#suchbutton').addEventListener('click', function(){
  
    let myInput =  document.querySelector('suchinput').value
  
  
    fetch(`https://api.unsplash.com/search/photos/?client_id=6b99c44af3b5ecf26972b41b9e4651ec31dfc4a8c13be8a8ca48eb34d8c4f8da&query=${myInput}`)
    .then(response => {
      response.json().then(json => {
        console.log(json);
        
      });
    });
  
  })

