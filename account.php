<?php require_once 'templates/header.php';?>
<?php 
	if( !empty( $_POST )){
		try {
			$user_obj = new Cl_User();
			$data = $user_obj->account( $_POST );
			if($data)$_SESSION['success'] = PASSOWRD_CHANAGE_SUCCESS;
		} catch (Exception $e) {
			$_SESSION['error'] = $e->getMessage();
		} 
	}
?>

	<div class="content">
     	<div class="container">
			<?php require_once 'templates/ads.php';?>
			<div class='row'>
				<div class="col-md-8 col-sm-8 col-xs-12">
					<?php require_once 'templates/mensagens.php';?>
					<h1>Minha Conta:</h1><br>
					<form action="<?php echo $_SERVER['PHP_SELF']; ?>" id="account-form" method="post" class="form-horizontal myaccount" role="form">
						<div class="form-group">
							<span for="inputEmail3" class="col-sm-4 control-span">Nome:</span>
							<div class="col-sm-8">
								<p> <?php echo $_SESSION['name']; ?> </p>
							</div>
						</div>
						<div class="form-group">
							<span for="inputPassword3" class="col-sm-4 control-span">E-mail:</span>
							<div class="col-sm-8">
								<p> <?php echo $_SESSION['email']; ?> </p>
							</div>
						</div>
						<hr>
						<div class="form-group">
							<span for="inputPassword3" class="col-sm-4 control-span">Senha Atual:</span>
							<div class="col-sm-8">
								<input name="old_password" id="old_password" type="password" class="form-control">
								<span class="help-block"></span>
							</div>
						</div>
						
						<div class="form-group">
							<span for="inputPassword3" class="col-sm-4 control-span"> Nova Senha:</span>
							<div class="col-sm-8">
								<input name="password" id="password" type="password" class="form-control">
								<span class="help-block"></span>
							</div>
						</div>
						<div class="form-group">
							<span for="inputPassword3" class="col-sm-4 control-span"> Confirme Nova Senha:</span>
							<div class="col-sm-8">
								<input name="confirm_password" id="confirm_password" type="password" class="form-control">
								<span class="help-block"></span>
							</div>
						</div>
						<input type="hidden" id="user_id" name="user_id" value="<?php echo $_SESSION['user_id']; ?>">
						<input type="hidden" id="email" value="<?php echo $_SESSION['email']; ?>" class="form-control"/>
						
						
						<div class="form-group">
							<div class="col-sm-offset-4 col-sm-8">
								<button type="submit" class="btn btn-default">Alterar Senha</button>
							</div>
						</div>
					</form>
			</div>
			<?php require_once 'templates/sidebar.php';?>
			</div>	
     	</div>
    </div> <!-- /container -->
<script src="js/jquery.validate.min.js"></script>
<script src="js/account.js"></script>    
<?php require_once 'templates/footer.php';?>
	

