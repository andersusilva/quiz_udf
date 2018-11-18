<?php
class Cl_DBclass
{
	/**
	 * @var $con manterá a conexão com o banco de dados
	 */
	public $con;
	
	/**
	 * Isso criará a conexão com o banco de dados
	 */
	public function __construct()
	{
		$this->con = mysqli_connect(DB_HOST, DB_USERNAME, DB_PASSWORD, DB_NAME);
		if( mysqli_connect_error()) echo "Falha ao conectar-se ao MySQL: " . mysqli_connect_error();
        /* mysqli_set_charset($con,'utf8'); */
	}
}