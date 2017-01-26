$(document).ready(function () {

$("#btnShowModal").on('click', openModal);

  function openModal() {
    $('.overlay').fadeIn();
    $('.modal').slideDown();

      $("#btnClose, .overlay").on('click', closeModal);
  };



  function closeModal() {
    console.log('close');
    $('.modal').slideUp(function () {
      $('.overlay').fadeOut();

      $("#btnClose, .overlay").off('click', closeModal);
    });
  };



});
