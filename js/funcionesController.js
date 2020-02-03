function encenderSistema (idSsitema) {
  $.ajax({
    url: './modelo/mqtt.php',
    type: 'POST',
    data: {accion: 'encender'}
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
