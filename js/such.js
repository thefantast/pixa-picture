
document.getElementById('suchbutton').addEventListener('click', function (e) {
  e.preventDefault();
  let myInput = document.getElementById('suchinput').value
  console.log("test")
    fetch(`https://api.unsplash.com/search/photos/?client_id=6b99c44af3b5ecf26972b41b9e4651ec31dfc4a8c13be8a8ca48eb34d8c4f8da&query=${myInput}`)
    .then(response => {
      response.json().then(json => {
        console.log(json);

        for (let i = 0; i < 10; i++){
         
          console.log("Test");
          const mytemplate = `
          <img src="${json.results[i].urls.small}" >
          `
          const myDiv = document.createElement('div');

          myDiv.innerHTML = mytemplate;

          
          document.getElementById('bildergalerie').appendChild(myDiv);



        }
        
        for(x = 0; x <= 10; x++){

            document.querySelector('#bildcontainer').appendChild()

        }

      });
    });
  
  })

