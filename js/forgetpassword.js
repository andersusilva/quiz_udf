$(document).ready(function(){
	$("#forgetpassword-form").validate({
		submitHandler : function(form) {
			$('#forget_btn').attr('disabled','disabled');
		    form.submit();
		},
		rules : {
			email : {
				required : true,
				email: true,
				remote:"check-email.php"
			}
		},
		messages : {
			email : {
				required : "Por favor, digite seu e-mail",
				remote : "Este e-mail não existe"
			}
		},
		errorPlacement : function(error, element) {
			$(element).closest('div').find('.help-block').html(error.html());
		},
		highlight : function(element) {
			$(element).closest('div').removeClass('has-success').addClass('has-error');
		},
		unhighlight: function(element, errorClass, validClass) {
			 $(element).closest('div').removeClass('has-error').addClass('has-success');
			 $(element).closest('div').find('.help-block').html('');
		}
	});
	
	
});