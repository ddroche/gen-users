var data = [
  {
    name: 'Manu',
    age: 25,
    gender: 'M',
    location: 'MPLS',
    twitter:'@manu'
  },
  {
    name: 'Manu',
    age: 25,
    gender: 'M',
    location: 'MPLS',
    twitter:'@manu'
  }

];

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
    //$.ajax();
    data.splice(index, 1);
    renderTable();
  });
  $tr.append($('<td>').html($button));
  return $tr;
}



function makeHeader(){
  var $tr = $('<tr>');
  var $th = $('<th>');
  $tr.append('<th> name </th>');
  $tr.append('<th> age </th>');
  $tr.append('<th> gender </th>');
  $tr.append('<th> location </th>');
  $tr.append('<th> twitter </th>');
  return $tr;
}

$(document).ready(function(){
  $('button').click(function(){
    //$.ajax to get data from
    renderTable();
  });

});
