$(document).ready(function(){
	
	$("#account-form").validate({
		submitHandler : function(e) {
		    $(form).submit();
		},
		rules : {
			old_password : {
				required : true,
				remote   : {
						url: "check-email.php",
						type: "post",
						data: {
							password: function() {
								return $( "#old_password" ).val();
							},
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
			old_password : {
				required : "Por favor, insira a senha atual",
				remote : "Por favor, digite a senha atual correta"
			},
			password : {
				required : "Por favor, insira a senha"
			},
			confirm_password : {
				required : "Por favor, insira a confirmação de senha",
				equalTo: "Senha e confirmação de senha não coincidem"
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