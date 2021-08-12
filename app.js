//on onload

//i tried so many psudo codes I have so many graveyards this what i feel silly that after all that this is all i have working


const players = [
  {shape: 'O'},
  {shape:'X'}
]


$(() => { //on load
  let clicks = 0; //set clicks to zero
  // console.log(clicks);

  $('#1').one('click', (event) => {
    $(event.currentTarget)
    clicks += 1
    console.log(clicks);
    const $p = $('<p>')
    .addClass('player-one')
    .text(players[0].shape)
    $('#1').append($p)
  })

  $('#2').one('click', (event) => {
    $(event.currentTarget)
    clicks += 1
    const $p = $('<p>')
    .addClass('player-two')
    .text(players[1].shape)
    $('#2').append($p)
  })

  $('#3').one('click', (event) => {
    $(event.currentTarget)
    clicks += 1
    const $p = $('<p>')
    .addClass('player-one')
    .text(players[0].shape)
    $('#3').append($p)
  })

  $('#4').one('click', (event) => {
    $(event.currentTarget)
    clicks += 1
    const $p = $('<p>')
    .addClass('player-two')
    .text(players[1].shape)
    $('#4').append($p)
  })

  $('#5').one('click', (event) => {
    $(event.currentTarget)
    clicks += 1
    const $p = $('<p>')
    .addClass('player-one')
    .text(players[0].shape)
    $('#5').append($p)
  })
  $('#6').one('click', (event) => {
    $(event.currentTarget)
    clicks += 1
    const $p = $('<p>')
    .addClass('player-two')
    .text(players[1].shape)
    $('#6').append($p)
  })

  $('#7').one('click', (event) => {
    $(event.currentTarget)
    clicks += 1
    const $p = $('<p>')
    .addClass('player-one')
    .text(players[0].shape)
    $('#7').append($p)
  })
  $('#8').one('click', (event) => {
    $(event.currentTarget)
    clicks += 1
    const $p = $('<p>')
    .addClass('player-two')
    .text(players[1].shape)
    $('#8').append($p)
  })

  $('#9').one('click', (event) => {
    $(event.currentTarget)
    clicks += 1
    const $p = $('<p>')
    .addClass('player-one')
    .text(players[0].shape)
    $('#9').append($p)
  })
})


// const playGame = () => {
//   if(clicks % 2 !== 0){
//     const $p = $('<p>')
//     .addClass('player-one')
//     .text(players[0].shape)
//     $('#1').append($p)
//   }else{
//     .addClass('player-two')
//     .text(players[1].shape)
//     $('#1').append($p)
//   }
// }

//
// const playerTic = () => {
//   clicks += 1;
//   $('square').one('click', (event) => {
//       $(event.currentTarget)
//       const $p = $('<p>')
//       .addClass('player-one')
//       .text(players[0].shape)
//       $('#1').append($p)
// })
// }
//
// const playerTac = () => {
//   clicks += 1;
//   $('square').one('click', (event) => {
//       $(event.currentTarget)
//       const $p = $('<p>')
//       .addClass('player-one')
//       .text(players[1].shape)
//       $('.square').append($p)
// })
// }
//
//
// const playGame = () => {
// if (turn % 2 !== 0 ){
//   playerTic()
// }else{
//   playerTac()
// }
// }

// const player1 = () => {
//   for(let i = 0; i < clicks; i++){
// }

// $(() => {
//   $('#1').one('click', (event) => {
//     $(event.currentTarget)
//     const $p = $('<p>')
//     .addClass('player-one')
//     .text(players[0].shape)
//     $('#1').append($p)
//   })
//
//
//   $('#2').one('click', (event) => {
//     $(event.currentTarget)
//     const $p = $('<p>')
//     .addClass('player-two')
//     .text(players[1].shape)
//     $('#2').append($p)
//   })
// })
//
//
// const click = () =>
// $('.square').click(function() {
//     if (clicks == 0){
//         // first click
//     } else{
//         // second click
//     }
//     ++clicks;
// });

// $addPlay => {
//   const $p = $('<p>') //create p element in each square class
//   $('.square').append($p) //append empty div to square classes
//
// })

//if clicked in empty square #id return
// const playerOne = () => {
//   $('.square').on('click', onePlays)
// }

// const playerOne = () => {
//
//   const $squareOne = $('#one') //grabes the element with id of One (first box)
//
//   const $playIt = $('#1')
//   .on('click', addOh)
// }

// const addOh = () => {
//
// const $playOh =
// .addClass('player-one')
// .text('X')
// .appendTo('#1')
// }

//next click in empty square return O

//if squre had already been clicked nothing happens
