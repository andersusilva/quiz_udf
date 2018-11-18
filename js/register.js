$(document).ready(function(){
	
	$("#register-form").validate({
		submitHandler : function(e) {
		    $(form).submit();
		},
		rules : {
			name : {
				required : true
			},
			email : {
				required : true,
				email: true,
				remote: {
					url: "check-email.php",
					type: "post",
					data: {
						email: function() {
							return $( "#email" ).val();
						}
					}
				}
			},
			password : {
				required : true
			},
			confirm_password : {
				required : true,
				equalTo: "#password"
			}
		},
		messages : {
			name : {
				required : "Por favor, digite seu nome"
			},
			email : {
				required : "Por favor, digite seu email",
				remote : "Este email já existe registrado!"
			},
			password : {
				required : "Por favor, digite sua senha"
			},
			confirm_password : {
				required : "Por favor, confirme sua senha",
				equalTo: "As senhas não coincidem"
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