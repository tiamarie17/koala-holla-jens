console.log( 'js' );

$( document ).ready( function(){
  console.log( 'JQ' );
  // Establish Click Listeners
  setupClickListeners()
  // load existing koalas on page load
  getKoalas();
}); // end doc ready

function setupClickListeners() {
  $( '#addButton' ).on( 'click', function(){
    console.log( 'in addButton on click' );
    // get user input and put in an object
    // NOT WORKING YET :(
    // using a test object
    let koalaToSend = {
      name: 'testName',
      age: 'testName',
      gender: 'testName',
      readyForTransfer: 'testName',
      notes: 'testName',
    };
    // call saveKoala with the new obejct
    saveKoala( koalaToSend );
  }); 
  //get button added
}

function getKoalas(){
  console.log( 'in getKoalas' );
  // ajax call to server to get koalas
<<<<<<< HEAD
  $.ajax({
    method: 'GET',
    url: '/koalas'
  })
    .then(function(response){
      console.log("GET /koalas response", response);
      for (let i = 0; i < response.length; i++) {
        
      }
    })
=======
  //add in render(response) in get .then()
>>>>>>> 095eea3080fca88a22d9a2542be0c4e938bc6892
} // end getKoalas

function saveKoala( newKoala ){
  console.log( 'in saveKoala', newKoala );
  // ajax call to server to get koalas

    newKoala = {
    name: $('#nameIn').val(),
    age: $('#ageIn').val(),
    gender: $('#genderIn').val(),
    ready_to_transfer: $('#readyForTransferIn').val(),
    notes: $('#notesIn').val()
}
    console.log(newKoala);

$.ajax({
    type: 'POST',
    url: '/koalas',
    data: newKoala
}).then( function (response) {
    console.log('response form server', response);

    $('#nameIn').val(''),
    $('#ageIn').val(''),
    $('#genderIn').val(''),
    $('#readyForTransferIn').val(''),
    $('#notesIn').val('')

    getKoalas();
    res.sendStatus(200);
})
  .catch((err)=>{
    console.log('failed to POST', err);
    res.sendStatus(500);
  })
 
}


function render(array){
  console.log('in render fn');
$('#viewKoalas').empty();;

for(let koala of array){
  $('#viewKoalas').append(`
    <tr>
      <td>${koala.name}</td>
      <td>${koala.age}</td>
      <td>${koala.gender}</td>
      <td>${koala.ready_to_transfer}</td>
      <td>
        <button id="transferBn" data-id="${koala.id}">Ready to Transfer</button>
      </td>
      <td>${koala.notes}</td>
    </tr>
  `)
};
}