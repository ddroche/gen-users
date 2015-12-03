var data;

function renderTable() {

  var $table = $('<table>');

  $table.append(makeHeader());

  data.forEach(function(user, index){
    $table.append(makeRow(user, index));
  });

  $('.container').html($table);

}


function makeRow(user, index){
  var $tr = $('<tr>');
  $tr.append('<td>' + user.name + '</td>');
  $tr.append('<td>' + user.age + '</td>');
  $tr.append('<td>' + user.gender + '</td>');
  $tr.append('<td>' + user.location + '</td>');
  $tr.append('<td>' + user.twitter + '</td>');
  var $button = $('<button>Delete</button>');
  $button.click(function() {
    data.splice(index, 1);
    renderTable();
    $.ajax({
      method: 'DELETE',
      url: '/api/users/' + user.userID
    });
  });
  $tr.append($('<td>').html($button));
  return $tr;
}



function makeHeader(){
  var $tr = $('<tr>');
  $tr.append('<th> name </th>');
  $tr.append('<th> age </th>');
  $tr.append('<th> gender </th>');
  $tr.append('<th> location </th>');
  $tr.append('<th> twitter </th>');
  return $tr;
}

$(document).ready(function(){
  $('button').click(function(){
    $.ajax({
      method: 'GET',
      url: '/api/users'
    }).done(function(responseData) {
      data = responseData;
      renderTable();
    });
  });

});
