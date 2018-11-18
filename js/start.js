$(document).ready(function() {
	$("#signin").validate({
		submitHandler : function(form) {
			$('#start_btn').attr('disabled','disabled');
		    form.submit();
		},
		rules : {
			name : {
				required : true,
				minlength : 3,
				remote : {
					url : "check_name.php",
					type : "post",
					data : {
						username : function() {
							return $("#name").val();
						}
					}
				}
			},
			category : {
			    required : true
			},
			num_questions : {
				required : true
			}
		},
		messages : {
			name : {
				required : "Por favor, insira seu nome",
				remote : "Nome já foi escolhido, Por favor, escolha outro nome"
			},
			category:{
                required : "Por favor, escolha sua categoria para começar o Quiz"
           },
           num_questions : {
           	   required : "Por favor, escolha o número de perguntas a serem mostradas em cada página"
           }
		},
		errorPlacement : function(error, element) {
			$(element).closest('.form-group').find('.help-block').html(error.html());
		},
		highlight : function(element) {
			$(element).closest('.form-group').removeClass('has-success').addClass('has-error');
		}
	});
});