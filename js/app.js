$( document ).ready(function(){

  console.log("connected!");

  $('#container').click(function(){
    alert('You clicked the container div')
  })

  $('#myBtn').click(function(){
    alert('You clicked me!')
    event.stopPropagation()
  })


  $('#foods').append("<li>Mac n Cheese</li><li>Pizza</li><li>Cheeseburgers</li>")

  $('#drinks').append("<li>Apple Juice</li><li>Tea</li><li>Water</li>")

  $('#addFood').click(function(){
    var newFood = $('#foodInput').val()
    if(newFood != ""){
      $('#foods').append("<li>" + newFood + "</li>")
      $('#foodInput').val('')
    }
  })

  $('#addDrink').click(function(){
    var newDrink = $('#drinkInput').val()
    if(newDrink != ""){
      $('#drinks').append("<li>" + newDrink + "</li>")
      $('#drinkInput').val('')
    }
  })












})
