function encenderSistema (idSitema = '', accion = '') {
  $.ajax({
    url: './modelo/mqtt.php',
    type: 'POST',
    data: {accion: accion,
      idSistema: idSitema}
  })
	.done(function (result) {
  console.log(result)
})
	.fail(function () {
  console.log('error')
})
	.always(function () {
  console.log('complete')
})
}
