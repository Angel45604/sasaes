function tablita(){
	var grupo = document.getElementById('grupo_opcion').value;
	var grupo2, grupo3, grupo4, grupo5, grupo6, grupo7, grupo8, grupo9, grupo10 = grupo;
	var nombre = document.getElementById('nombre_opcion').value;
	var boleta = document.getElementById('boleta_opcion').value;
	document.getElementById('grupo_calificaciones').innerHTML='NO HAY NADA';
	document.getElementById('alumno_nombre').innerHTML=nombre;
	document.getElementById('alumno_boleta').innerHTML=boleta;
	if(grupo.localeCompare("3IM1")==0)
	{
		document.getElementById('grupo_calificaciones').innerHTML="\
		<table cellspacing=\"0\" cellpadding=\"4\" align=\"Center\"rules=\"cols\"border=\"1\"id=\"ctl00_mainCopy_GV_Calif\"style=\"color:Black;background-color:White;border-color:#DEDFDE;border-width:1px;border-style:Solid;border-collapse:collapse;\">\
			<tr style=\"color:White;background-color:#FF9900;font-family:Arial;font-weight:bold;\">\
				<th scope=\"col\">Grupo</th>\
				<th scope=\"col\">Materia</th>\
				<th scope=\"col\">1er Parcial</th>\
				<th scope=\"col\">2o Parcial</th>\
				<th scope=\"col\">3er Parcial</th>\
				<th scope=\"col\">Ext</th>\
				<th scope=\"col\">Final</th>\
			</tr>\
			<tr style=\"color:#333333;background-color:White;font-family:Arial;font-size:X-Small;\">\
				<td id=\"calif_grupo\">3IM1</td>\
				<td>GEOMETRIA ANALITICA</td>\
				<td>-</td>\
				<td>-</td>\
				<td id =\"calif_analitica\">\
				<select id=\"analitica\">\
						<option value=\"0\">0</option>\
						<option value=\"1\">1</option>\
						<option value=\"2\">2</option>\
						<option value=\"3\">3</option>\
						<option value=\"4\">4</option>\
						<option value=\"5\">5</option>\
						<option value=\"6\">6</option>\
						<option value=\"7\">7</option>\
						<option value=\"8\">8</option>\
						<option value=\"9\">9</option>\
						<option value=\"10\">10</option>\
				</select>\</td>\
				<td>-</td>\
				<td id =\"calif_analitica2\"><input id=\"analiticabtn\" type=\"button\" value=\"RELLENAR\" onClick=\"rellenar_analitica()\"/>\
				</td>\
			</tr>\
			<tr style=\"color:#333333;background-color:#F2F2F2;font-family:Arial;font-size:X-Small;\">\
				<td id=\"calif_grupo2\">3IM1</td>\
				<td>FISICA I</td>\
				<td>-</td>\
				<td>-</td>\
				<td id=\"calif_fisica\">\
				<select id=\"fisica\">\
					<option value=\"0\">0</option>\
					<option value=\"1\">1</option>\
					<option value=\"2\">2</option>\
					<option value=\"3\">3</option>\
					<option value=\"4\">4</option>\
					<option value=\"5\">5</option>\
					<option value=\"6\">6</option>\
					<option value=\"7\">7</option>\
					<option value=\"8\">8</option>\
					<option value=\"9\">9</option>\
					<option value=\"10\">10</option>\
				</select>\</td>\
				<td>-</td>\
				<td id=\"calif_fisica2\"><input id=\"fisicabtn\" type=\"button\" value=\"RELLENAR\" onClick=\"rellenar_fisica()\"/>\
				</td>\
			</tr>\
			<tr style=\"color:#333333;background-color:White;font-family:Arial;font-size:X-Small;\">\
				<td id=\"calif_grupo3\">3IM1</td>\
				<td>QUIMICA I</td>\
				<td>-</td>\
				<td>-</td>\
				<td id=\"calif_quimica\">\
				<select id=\"quimica\">\
						<option value=\"0\">0</option>\
						<option value=\"1\">1</option>\
						<option value=\"2\">2</option>\
						<option value=\"3\">3</option>\
						<option value=\"4\">4</option>\
						<option value=\"5\">5</option>\
						<option value=\"6\">6</option>\
						<option value=\"7\">7</option>\
						<option value=\"8\">8</option>\
						<option value=\"9\">9</option>\
						<option value=\"10\">10</option>\
					</select>\</td>\
				<td>-</td>\
				<td id=\"calif_quimica2\"><input id=\"fisicabtn\" type=\"button\" value=\"RELLENAR\" onClick=\"rellenar_quimica()\"/>\
				</td>\
			</tr>\
			<tr style=\"color:#333333;background-color:#F2F2F2;font-family:Arial;font-size:X-Small;\">\
				<td id=\"calif_grupo4\">3IM1</td>\
				<td>INGLES III</td>\
				<td>-</td>\
				<td>-</td>\
				<td id=\"calif_ingles\">\<select id=\"ingles\">\
						<option value=\"0\">0</option>\
						<option value=\"1\">1</option>\
						<option value=\"2\">2</option>\
						<option value=\"3\">3</option>\
						<option value=\"4\">4</option>\
						<option value=\"5\">5</option>\
						<option value=\"6\">6</option>\
						<option value=\"7\">7</option>\
						<option value=\"8\">8</option>\
						<option value=\"9\">9</option>\
						<option value=\"10\">10</option>\
					</select>\</td>\
				<td>-</td>\
				<td id=\"calif_ingles2\"><input id=\"fisicabtn\" type=\"button\" value=\"RELLENAR\" onClick=\"rellenar_ingles()\"/>\
				</td>\
			</tr>\
			<tr style=\"color:#333333;background-color:White;font-family:Arial;font-size:X-Small;\">\
				<td id=\"calif_grupo5\">3IM1</td>\
				<td>COMUNICACION CIENTIFICA</td>\
				<td>-</td>\
				<td>-</td>\
				<td id=\"calif_comunicacion\">\
				<select id=\"comunicacion\">\
						<option value=\"0\">0</option>\
						<option value=\"1\">1</option>\
						<option value=\"2\">2</option>\
						<option value=\"3\">3</option>\
						<option value=\"4\">4</option>\
						<option value=\"5\">5</option>\
						<option value=\"6\">6</option>\
						<option value=\"7\">7</option>\
						<option value=\"8\">8</option>\
						<option value=\"9\">9</option>\
						<option value=\"10\">10</option>\
					</select>\</td>\
				<td>-</td>\
				<td id=\"calif_comunicacion2\"><input id=\"fisicabtn\" type=\"button\" value=\"RELLENAR\" onClick=\"rellenar_comunicacion()\"/>\
				</td>\
			</tr>\
			<tr style=\"color:#333333;background-color:#F2F2F2;font-family:Arial;font-size:X-Small;\">\
				<td id=\"calif_grupo6\">3IM1</td>\
				<td>DIBUJO TECNICO I</td>\
				<td>-</td>\
				<td>-</td>\
				<td id=\"calif_dibujo\">\<select id=\"dibujo\">\
						<option value=\"0\">0</option>\
						<option value=\"1\">1</option>\
						<option value=\"2\">2</option>\
						<option value=\"3\">3</option>\
						<option value=\"4\">4</option>\
						<option value=\"5\">5</option>\
						<option value=\"6\">6</option>\
						<option value=\"7\">7</option>\
						<option value=\"8\">8</option>\
						<option value=\"9\">9</option>\
						<option value=\"10\">10</option>\
					</select>\</td>\
				<td>-</td>\
				<td id=\"calif_dibujo2\"><input id=\"fisicabtn\" type=\"button\" value=\"RELLENAR\" onClick=\"rellenar_dibujo()\"/>\
				</td>\
			</tr>\
			<tr style=\"color:#333333;background-color:White;font-family:Arial;font-size:X-Small;\">\
				<td id=\"calif_grupo7\">3IM1</td>\
				<td>ENTORNO SOCIOECONOMICO DE MEXICO</td>\
				<td>-</td>\
				<td>-</td>\
				<td id=\"calif_entorno\">\
				<select id=\"entorno\">\
						<option value=\"0\">0</option>\
						<option value=\"1\">1</option>\
						<option value=\"2\">2</option>\
						<option value=\"3\">3</option>\
						<option value=\"4\">4</option>\
						<option value=\"5\">5</option>\
						<option value=\"6\">6</option>\
						<option value=\"7\">7</option>\
						<option value=\"8\">8</option>\
						<option value=\"9\">9</option>\
						<option value=\"10\">10</option>\
					</select>\</td>\
				<td>-</td>\
				<td id=\"calif_entorno2\"><input id=\"fisicabtn\" type=\"button\" value=\"RELLENAR\" onClick=\"rellenar_entorno()\"/>\
				</td>\
			</tr>\
			<tr style=\"color:#333333;background-color:#F2F2F2;font-family:Arial;font-size:X-Small;\">\
				<td id=\"calif_grupo8\">3IM1</td>\
				<td>CIRCUITOS LOGICOS COMBINATORIOS</td>\
				<td>-</td>\
				<td>-</td>\
				<td id=\"calif_logicos\">\
				<select id=\"logicos\">\
						<option value=\"0\">0</option>\
						<option value=\"1\">1</option>\
						<option value=\"2\">2</option>\
						<option value=\"3\">3</option>\
						<option value=\"4\">4</option>\
						<option value=\"5\">5</option>\
						<option value=\"6\">6</option>\
						<option value=\"7\">7</option>\
						<option value=\"8\">8</option>\
						<option value=\"9\">9</option>\
						<option value=\"10\">10</option>\
					</select>\</td>\
				<td>-</td>\
				<td id=\"calif_logicos2\"><input id=\"fisicabtn\" type=\"button\" value=\"RELLENAR\" onClick=\"rellenar_logicos()\"/>\
				</td>\
			</tr>\
			<tr style=\"color:#333333;background-color:White;font-family:Arial;font-size:X-Small;\">\
				<td id=\"calif_grupo9\">3IM1</td>\
				<td>CIRCUITOS ELECTRONICOS</td>\
				<td>-</td>\
				<td>-</td>\
				<td id=\"calif_electronicos\">\
				<select id=\"electronicos\">\
						<option value=\"0\">0</option>\
						<option value=\"1\">1</option>\
						<option value=\"2\">2</option>\
						<option value=\"3\">3</option>\
						<option value=\"4\">4</option>\
						<option value=\"5\">5</option>\
						<option value=\"6\">6</option>\
						<option value=\"7\">7</option>\
						<option value=\"8\">8</option>\
						<option value=\"9\">9</option>\
						<option value=\"10\">10</option>\
					</select>\</td>\
				<td>-</td>\
				<td id=\"calif_electronicos2\"><input id=\"fisicabtn\" type=\"button\" value=\"RELLENAR\" onClick=\"rellenar_electronicos()\"/>\
				</td>\
			</tr>\
			<tr style=\"color:#333333;background-color:#F2F2F2;font-family:Arial;font-size:X-Small;\">\
				<td id=\"calif_grupo10\">3IM1</td>\
				<td>INSTRUMENTACION ELECTRONICA</td>\
				<td>-</td>\
				<td>-</td>\
				<td id=\"calif_instrumentacion\">\
				<select id=\"instrumentacion\">\
						<option value=\"0\">0</option>\
						<option value=\"1\">1</option>\
						<option value=\"2\">2</option>\
						<option value=\"3\">3</option>\
						<option value=\"4\">4</option>\
						<option value=\"5\">5</option>\
						<option value=\"6\">6</option>\
						<option value=\"7\">7</option>\
						<option value=\"8\">8</option>\
						<option value=\"9\">9</option>\
						<option value=\"10\">10</option>\
					</select>\</td>\
				<td>-</td>\
				<td id=\"calif_instrumentacion2\"><input id=\"fisicabtn\" type=\"button\" value=\"RELLENAR\" onClick=\"rellenar_instrumentacion()\"/>\
				</td>\
			</tr>\
		</table>";
	}
	else
	{
		if(grupo.localeCompare("3IM2")==0)
		{
			document.getElementById('grupo_calificaciones').innerHTML="\
			<table cellspacing=\"0\" cellpadding=\"4\" align=\"Center\"rules=\"cols\"border=\"1\"id=\"ctl00_mainCopy_GV_Calif\"style=\"color:Black;background-color:White;border-color:#DEDFDE;border-width:1px;border-style:Solid;border-collapse:collapse;\">\
				<tr style=\"color:White;background-color:#FF9900;font-family:Arial;font-weight:bold;\">\
					<th scope=\"col\">Grupo</th>\
					<th scope=\"col\">Materia</th>\
					<th scope=\"col\">1er Parcial</th>\
					<th scope=\"col\">2o Parcial</th>\
					<th scope=\"col\">3er Parcial</th>\
					<th scope=\"col\">Ext</th>\
					<th scope=\"col\">Final</th>\
				</tr>\
				<tr style=\"color:#333333;background-color:White;font-family:Arial;font-size:X-Small;\">\
					<td id=\"calif_grupo\">3IM2</td>\
					<td>GEOMETRIA ANALITICA</td>\
					<td>-</td>\
					<td>-</td>\
					<td id =\"calif_analitica\">\
					<select id=\"analitica\">\
							<option value=\"0\">0</option>\
							<option value=\"1\">1</option>\
							<option value=\"2\">2</option>\
							<option value=\"3\">3</option>\
							<option value=\"4\">4</option>\
							<option value=\"5\">5</option>\
							<option value=\"6\">6</option>\
							<option value=\"7\">7</option>\
							<option value=\"8\">8</option>\
							<option value=\"9\">9</option>\
							<option value=\"10\">10</option>\
					</select>\</td>\
					<td>-</td>\
					<td id =\"calif_analitica2\"><input id=\"analiticabtn\" type=\"button\" value=\"RELLENAR\" onClick=\"rellenar_analitica()\"/>\
					</td>\
				</tr>\
				<tr style=\"color:#333333;background-color:#F2F2F2;font-family:Arial;font-size:X-Small;\">\
					<td id=\"calif_grupo2\">3IM2</td>\
					<td>FISICA I</td>\
					<td>-</td>\
					<td>-</td>\
					<td id=\"calif_fisica\">\
					<select id=\"fisica\">\
						<option value=\"0\">0</option>\
						<option value=\"1\">1</option>\
						<option value=\"2\">2</option>\
						<option value=\"3\">3</option>\
						<option value=\"4\">4</option>\
						<option value=\"5\">5</option>\
						<option value=\"6\">6</option>\
						<option value=\"7\">7</option>\
						<option value=\"8\">8</option>\
						<option value=\"9\">9</option>\
						<option value=\"10\">10</option>\
					</select>\</td>\
					<td>-</td>\
					<td id=\"calif_fisica2\"><input id=\"fisicabtn\" type=\"button\" value=\"RELLENAR\" onClick=\"rellenar_fisica()\"/>\
					</td>\
				</tr>\
				<tr style=\"color:#333333;background-color:White;font-family:Arial;font-size:X-Small;\">\
					<td id=\"calif_grupo3\">3IM2</td>\
					<td>QUIMICA I</td>\
					<td>-</td>\
					<td>-</td>\
					<td id=\"calif_quimica\">\
					<select id=\"quimica\">\
							<option value=\"0\">0</option>\
							<option value=\"1\">1</option>\
							<option value=\"2\">2</option>\
							<option value=\"3\">3</option>\
							<option value=\"4\">4</option>\
							<option value=\"5\">5</option>\
							<option value=\"6\">6</option>\
							<option value=\"7\">7</option>\
							<option value=\"8\">8</option>\
							<option value=\"9\">9</option>\
							<option value=\"10\">10</option>\
						</select>\</td>\
					<td>-</td>\
					<td id=\"calif_quimica2\"><input id=\"fisicabtn\" type=\"button\" value=\"RELLENAR\" onClick=\"rellenar_quimica()\"/>\
					</td>\
				</tr>\
				<tr style=\"color:#333333;background-color:#F2F2F2;font-family:Arial;font-size:X-Small;\">\
					<td id=\"calif_grupo4\">3IM2</td>\
					<td>INGLES III</td>\
					<td>-</td>\
					<td>-</td>\
					<td id=\"calif_ingles\">\<select id=\"ingles\">\
							<option value=\"0\">0</option>\
							<option value=\"1\">1</option>\
							<option value=\"2\">2</option>\
							<option value=\"3\">3</option>\
							<option value=\"4\">4</option>\
							<option value=\"5\">5</option>\
							<option value=\"6\">6</option>\
							<option value=\"7\">7</option>\
							<option value=\"8\">8</option>\
							<option value=\"9\">9</option>\
							<option value=\"10\">10</option>\
						</select>\</td>\
					<td>-</td>\
					<td id=\"calif_ingles2\"><input id=\"fisicabtn\" type=\"button\" value=\"RELLENAR\" onClick=\"rellenar_ingles()\"/>\
					</td>\
				</tr>\
				<tr style=\"color:#333333;background-color:White;font-family:Arial;font-size:X-Small;\">\
					<td id=\"calif_grupo5\">3IM2</td>\
					<td>COMUNICACION CIENTIFICA</td>\
					<td>-</td>\
					<td>-</td>\
					<td id=\"calif_comunicacion\">\
					<select id=\"comunicacion\">\
							<option value=\"0\">0</option>\
							<option value=\"1\">1</option>\
							<option value=\"2\">2</option>\
							<option value=\"3\">3</option>\
							<option value=\"4\">4</option>\
							<option value=\"5\">5</option>\
							<option value=\"6\">6</option>\
							<option value=\"7\">7</option>\
							<option value=\"8\">8</option>\
							<option value=\"9\">9</option>\
							<option value=\"10\">10</option>\
						</select>\</td>\
					<td>-</td>\
					<td id=\"calif_comunicacion2\"><input id=\"fisicabtn\" type=\"button\" value=\"RELLENAR\" onClick=\"rellenar_comunicacion()\"/>\
					</td>\
				</tr>\
				<tr style=\"color:#333333;background-color:#F2F2F2;font-family:Arial;font-size:X-Small;\">\
					<td id=\"calif_grupo6\">3IM2</td>\
					<td>DIBUJO TECNICO I</td>\
					<td>-</td>\
					<td>-</td>\
					<td id=\"calif_dibujo\">\<select id=\"dibujo\">\
							<option value=\"0\">0</option>\
							<option value=\"1\">1</option>\
							<option value=\"2\">2</option>\
							<option value=\"3\">3</option>\
							<option value=\"4\">4</option>\
							<option value=\"5\">5</option>\
							<option value=\"6\">6</option>\
							<option value=\"7\">7</option>\
							<option value=\"8\">8</option>\
							<option value=\"9\">9</option>\
							<option value=\"10\">10</option>\
						</select>\</td>\
					<td>-</td>\
					<td id=\"calif_dibujo2\"><input id=\"fisicabtn\" type=\"button\" value=\"RELLENAR\" onClick=\"rellenar_dibujo()\"/>\
					</td>\
				</tr>\
				<tr style=\"color:#333333;background-color:White;font-family:Arial;font-size:X-Small;\">\
					<td id=\"calif_grupo7\">3IM2</td>\
					<td>ENTORNO SOCIOECONOMICO DE MEXICO</td>\
					<td>-</td>\
					<td>-</td>\
					<td id=\"calif_entorno\">\
					<select id=\"entorno\">\
							<option value=\"0\">0</option>\
							<option value=\"1\">1</option>\
							<option value=\"2\">2</option>\
							<option value=\"3\">3</option>\
							<option value=\"4\">4</option>\
							<option value=\"5\">5</option>\
							<option value=\"6\">6</option>\
							<option value=\"7\">7</option>\
							<option value=\"8\">8</option>\
							<option value=\"9\">9</option>\
							<option value=\"10\">10</option>\
						</select>\</td>\
					<td>-</td>\
					<td id=\"calif_entorno2\"><input id=\"fisicabtn\" type=\"button\" value=\"RELLENAR\" onClick=\"rellenar_entorno()\"/>\
					</td>\
				</tr>\
				<tr style=\"color:#333333;background-color:#F2F2F2;font-family:Arial;font-size:X-Small;\">\
					<td id=\"calif_grupo8\">3IM2</td>\
					<td>CIRCUITOS LOGICOS COMBINATORIOS</td>\
					<td>-</td>\
					<td>-</td>\
					<td id=\"calif_logicos\">\
					<select id=\"logicos\">\
							<option value=\"0\">0</option>\
							<option value=\"1\">1</option>\
							<option value=\"2\">2</option>\
							<option value=\"3\">3</option>\
							<option value=\"4\">4</option>\
							<option value=\"5\">5</option>\
							<option value=\"6\">6</option>\
							<option value=\"7\">7</option>\
							<option value=\"8\">8</option>\
							<option value=\"9\">9</option>\
							<option value=\"10\">10</option>\
						</select>\</td>\
					<td>-</td>\
					<td id=\"calif_logicos2\"><input id=\"fisicabtn\" type=\"button\" value=\"RELLENAR\" onClick=\"rellenar_logicos()\"/>\
					</td>\
				</tr>\
				<tr style=\"color:#333333;background-color:White;font-family:Arial;font-size:X-Small;\">\
					<td id=\"calif_grupo9\">3IM2</td>\
					<td>CIRCUITOS ELECTRONICOS</td>\
					<td>-</td>\
					<td>-</td>\
					<td id=\"calif_electronicos\">\
					<select id=\"electronicos\">\
							<option value=\"0\">0</option>\
							<option value=\"1\">1</option>\
							<option value=\"2\">2</option>\
							<option value=\"3\">3</option>\
							<option value=\"4\">4</option>\
							<option value=\"5\">5</option>\
							<option value=\"6\">6</option>\
							<option value=\"7\">7</option>\
							<option value=\"8\">8</option>\
							<option value=\"9\">9</option>\
							<option value=\"10\">10</option>\
						</select>\</td>\
					<td>-</td>\
					<td id=\"calif_electronicos2\"><input id=\"fisicabtn\" type=\"button\" value=\"RELLENAR\" onClick=\"rellenar_electronicos()\"/>\
					</td>\
				</tr>\
				<tr style=\"color:#333333;background-color:#F2F2F2;font-family:Arial;font-size:X-Small;\">\
					<td id=\"calif_grupo10\">3IM2</td>\
					<td>INSTRUMENTACION ELECTRONICA</td>\
					<td>-</td>\
					<td>-</td>\
					<td id=\"calif_instrumentacion\">\
					<select id=\"instrumentacion\">\
							<option value=\"0\">0</option>\
							<option value=\"1\">1</option>\
							<option value=\"2\">2</option>\
							<option value=\"3\">3</option>\
							<option value=\"4\">4</option>\
							<option value=\"5\">5</option>\
							<option value=\"6\">6</option>\
							<option value=\"7\">7</option>\
							<option value=\"8\">8</option>\
							<option value=\"9\">9</option>\
							<option value=\"10\">10</option>\
						</select>\</td>\
					<td>-</td>\
					<td id=\"calif_instrumentacion2\"><input id=\"fisicabtn\" type=\"button\" value=\"RELLENAR\" onClick=\"rellenar_instrumentacion()\"/>\
					</td>\
				</tr>\
			</table>";
		}
		else
		{
			if(grupo.localeCompare("3IM3")==0)
			{
				document.getElementById('grupo_calificaciones').innerHTML="\
				<table cellspacing=\"0\" cellpadding=\"4\" align=\"Center\"rules=\"cols\"border=\"1\"id=\"ctl00_mainCopy_GV_Calif\"style=\"color:Black;background-color:White;border-color:#DEDFDE;border-width:1px;border-style:Solid;border-collapse:collapse;\">\
					<tr style=\"color:White;background-color:#FF9900;font-family:Arial;font-weight:bold;\">\
						<th scope=\"col\">Grupo</th>\
						<th scope=\"col\">Materia</th>\
						<th scope=\"col\">1er Parcial</th>\
						<th scope=\"col\">2o Parcial</th>\
						<th scope=\"col\">3er Parcial</th>\
						<th scope=\"col\">Ext</th>\
						<th scope=\"col\">Final</th>\
					</tr>\
					<tr style=\"color:#333333;background-color:White;font-family:Arial;font-size:X-Small;\">\
						<td id=\"calif_grupo\">3IM3</td>\
						<td>GEOMETRIA ANALITICA</td>\
						<td>-</td>\
						<td>-</td>\
						<td id =\"calif_analitica\">\
						<select id=\"analitica\">\
								<option value=\"0\">0</option>\
								<option value=\"1\">1</option>\
								<option value=\"2\">2</option>\
								<option value=\"3\">3</option>\
								<option value=\"4\">4</option>\
								<option value=\"5\">5</option>\
								<option value=\"6\">6</option>\
								<option value=\"7\">7</option>\
								<option value=\"8\">8</option>\
								<option value=\"9\">9</option>\
								<option value=\"10\">10</option>\
						</select>\</td>\
						<td>-</td>\
						<td id =\"calif_analitica2\"><input id=\"analiticabtn\" type=\"button\" value=\"RELLENAR\" onClick=\"rellenar_analitica()\"/>\
						</td>\
					</tr>\
					<tr style=\"color:#333333;background-color:#F2F2F2;font-family:Arial;font-size:X-Small;\">\
						<td id=\"calif_grupo2\">3IM3</td>\
						<td>FISICA I</td>\
						<td>-</td>\
						<td>-</td>\
						<td id=\"calif_fisica\">\
						<select id=\"fisica\">\
							<option value=\"0\">0</option>\
							<option value=\"1\">1</option>\
							<option value=\"2\">2</option>\
							<option value=\"3\">3</option>\
							<option value=\"4\">4</option>\
							<option value=\"5\">5</option>\
							<option value=\"6\">6</option>\
							<option value=\"7\">7</option>\
							<option value=\"8\">8</option>\
							<option value=\"9\">9</option>\
							<option value=\"10\">10</option>\
						</select>\</td>\
						<td>-</td>\
						<td id=\"calif_fisica2\"><input id=\"fisicabtn\" type=\"button\" value=\"RELLENAR\" onClick=\"rellenar_fisica()\"/>\
						</td>\
					</tr>\
					<tr style=\"color:#333333;background-color:White;font-family:Arial;font-size:X-Small;\">\
						<td id=\"calif_grupo3\">3IM3</td>\
						<td>QUIMICA I</td>\
						<td>-</td>\
						<td>-</td>\
						<td id=\"calif_quimica\">\
						<select id=\"quimica\">\
								<option value=\"0\">0</option>\
								<option value=\"1\">1</option>\
								<option value=\"2\">2</option>\
								<option value=\"3\">3</option>\
								<option value=\"4\">4</option>\
								<option value=\"5\">5</option>\
								<option value=\"6\">6</option>\
								<option value=\"7\">7</option>\
								<option value=\"8\">8</option>\
								<option value=\"9\">9</option>\
								<option value=\"10\">10</option>\
							</select>\</td>\
						<td>-</td>\
						<td id=\"calif_quimica2\"><input id=\"fisicabtn\" type=\"button\" value=\"RELLENAR\" onClick=\"rellenar_quimica()\"/>\
						</td>\
					</tr>\
					<tr style=\"color:#333333;background-color:#F2F2F2;font-family:Arial;font-size:X-Small;\">\
						<td id=\"calif_grupo4\">3IM3</td>\
						<td>INGLES III</td>\
						<td>-</td>\
						<td>-</td>\
						<td id=\"calif_ingles\">\<select id=\"ingles\">\
								<option value=\"0\">0</option>\
								<option value=\"1\">1</option>\
								<option value=\"2\">2</option>\
								<option value=\"3\">3</option>\
								<option value=\"4\">4</option>\
								<option value=\"5\">5</option>\
								<option value=\"6\">6</option>\
								<option value=\"7\">7</option>\
								<option value=\"8\">8</option>\
								<option value=\"9\">9</option>\
								<option value=\"10\">10</option>\
							</select>\</td>\
						<td>-</td>\
						<td id=\"calif_ingles2\"><input id=\"fisicabtn\" type=\"button\" value=\"RELLENAR\" onClick=\"rellenar_ingles()\"/>\
						</td>\
					</tr>\
					<tr style=\"color:#333333;background-color:White;font-family:Arial;font-size:X-Small;\">\
						<td id=\"calif_grupo5\">3IM3</td>\
						<td>COMUNICACION CIENTIFICA</td>\
						<td>-</td>\
						<td>-</td>\
						<td id=\"calif_comunicacion\">\
						<select id=\"comunicacion\">\
								<option value=\"0\">0</option>\
								<option value=\"1\">1</option>\
								<option value=\"2\">2</option>\
								<option value=\"3\">3</option>\
								<option value=\"4\">4</option>\
								<option value=\"5\">5</option>\
								<option value=\"6\">6</option>\
								<option value=\"7\">7</option>\
								<option value=\"8\">8</option>\
								<option value=\"9\">9</option>\
								<option value=\"10\">10</option>\
							</select>\</td>\
						<td>-</td>\
						<td id=\"calif_comunicacion2\"><input id=\"fisicabtn\" type=\"button\" value=\"RELLENAR\" onClick=\"rellenar_comunicacion()\"/>\
						</td>\
					</tr>\
					<tr style=\"color:#333333;background-color:#F2F2F2;font-family:Arial;font-size:X-Small;\">\
						<td id=\"calif_grupo6\">3IM3</td>\
						<td>DIBUJO TECNICO I</td>\
						<td>-</td>\
						<td>-</td>\
						<td id=\"calif_dibujo\">\<select id=\"dibujo\">\
								<option value=\"0\">0</option>\
								<option value=\"1\">1</option>\
								<option value=\"2\">2</option>\
								<option value=\"3\">3</option>\
								<option value=\"4\">4</option>\
								<option value=\"5\">5</option>\
								<option value=\"6\">6</option>\
								<option value=\"7\">7</option>\
								<option value=\"8\">8</option>\
								<option value=\"9\">9</option>\
								<option value=\"10\">10</option>\
							</select>\</td>\
						<td>-</td>\
						<td id=\"calif_dibujo2\"><input id=\"fisicabtn\" type=\"button\" value=\"RELLENAR\" onClick=\"rellenar_dibujo()\"/>\
						</td>\
					</tr>\
					<tr style=\"color:#333333;background-color:White;font-family:Arial;font-size:X-Small;\">\
						<td id=\"calif_grupo7\">3IM3</td>\
						<td>ENTORNO SOCIOECONOMICO DE MEXICO</td>\
						<td>-</td>\
						<td>-</td>\
						<td id=\"calif_entorno\">\
						<select id=\"entorno\">\
								<option value=\"0\">0</option>\
								<option value=\"1\">1</option>\
								<option value=\"2\">2</option>\
								<option value=\"3\">3</option>\
								<option value=\"4\">4</option>\
								<option value=\"5\">5</option>\
								<option value=\"6\">6</option>\
								<option value=\"7\">7</option>\
								<option value=\"8\">8</option>\
								<option value=\"9\">9</option>\
								<option value=\"10\">10</option>\
							</select>\</td>\
						<td>-</td>\
						<td id=\"calif_entorno2\"><input id=\"fisicabtn\" type=\"button\" value=\"RELLENAR\" onClick=\"rellenar_entorno()\"/>\
						</td>\
					</tr>\
					<tr style=\"color:#333333;background-color:#F2F2F2;font-family:Arial;font-size:X-Small;\">\
						<td id=\"calif_grupo8\">3IM3</td>\
						<td>CIRCUITOS LOGICOS COMBINATORIOS</td>\
						<td>-</td>\
						<td>-</td>\
						<td id=\"calif_logicos\">\
						<select id=\"logicos\">\
								<option value=\"0\">0</option>\
								<option value=\"1\">1</option>\
								<option value=\"2\">2</option>\
								<option value=\"3\">3</option>\
								<option value=\"4\">4</option>\
								<option value=\"5\">5</option>\
								<option value=\"6\">6</option>\
								<option value=\"7\">7</option>\
								<option value=\"8\">8</option>\
								<option value=\"9\">9</option>\
								<option value=\"10\">10</option>\
							</select>\</td>\
						<td>-</td>\
						<td id=\"calif_logicos2\"><input id=\"fisicabtn\" type=\"button\" value=\"RELLENAR\" onClick=\"rellenar_logicos()\"/>\
						</td>\
					</tr>\
					<tr style=\"color:#333333;background-color:White;font-family:Arial;font-size:X-Small;\">\
						<td id=\"calif_grupo9\">3IM3</td>\
						<td>CIRCUITOS ELECTRONICOS</td>\
						<td>-</td>\
						<td>-</td>\
						<td id=\"calif_electronicos\">\
						<select id=\"electronicos\">\
								<option value=\"0\">0</option>\
								<option value=\"1\">1</option>\
								<option value=\"2\">2</option>\
								<option value=\"3\">3</option>\
								<option value=\"4\">4</option>\
								<option value=\"5\">5</option>\
								<option value=\"6\">6</option>\
								<option value=\"7\">7</option>\
								<option value=\"8\">8</option>\
								<option value=\"9\">9</option>\
								<option value=\"10\">10</option>\
							</select>\</td>\
						<td>-</td>\
						<td id=\"calif_electronicos2\"><input id=\"fisicabtn\" type=\"button\" value=\"RELLENAR\" onClick=\"rellenar_electronicos()\"/>\
						</td>\
					</tr>\
					<tr style=\"color:#333333;background-color:#F2F2F2;font-family:Arial;font-size:X-Small;\">\
						<td id=\"calif_grupo10\">3IM3</td>\
						<td>INSTRUMENTACION ELECTRONICA</td>\
						<td>-</td>\
						<td>-</td>\
						<td id=\"calif_instrumentacion\">\
						<select id=\"instrumentacion\">\
								<option value=\"0\">0</option>\
								<option value=\"1\">1</option>\
								<option value=\"2\">2</option>\
								<option value=\"3\">3</option>\
								<option value=\"4\">4</option>\
								<option value=\"5\">5</option>\
								<option value=\"6\">6</option>\
								<option value=\"7\">7</option>\
								<option value=\"8\">8</option>\
								<option value=\"9\">9</option>\
								<option value=\"10\">10</option>\
							</select>\</td>\
						<td>-</td>\
						<td id=\"calif_instrumentacion2\"><input id=\"fisicabtn\" type=\"button\" value=\"RELLENAR\" onClick=\"rellenar_instrumentacion()\"/>\
						</td>\
					</tr>\
				</table>";
			} else if(grupo.localeCompare("6QM3")==0)
			{
				document.getElementById('grupo_calificaciones').innerHTML="\
				<table cellspacing=\"0\" cellpadding=\"4\" align=\"Center\"rules=\"cols\"border=\"1\"id=\"ctl00_mainCopy_GV_Calif\"style=\"color:Black;background-color:White;border-color:#DEDFDE;border-width:1px;border-style:Solid;border-collapse:collapse;\">\
					<tr style=\"color:White;background-color:#FF9900;font-family:Arial;font-weight:bold;\">\
						<th scope=\"col\">Grupo</th>\
						<th scope=\"col\">Materia</th>\
						<th scope=\"col\">1er Parcial</th>\
						<th scope=\"col\">2o Parcial</th>\
						<th scope=\"col\">3er Parcial</th>\
						<th scope=\"col\">Ext</th>\
						<th scope=\"col\">Final</th>\
					</tr>\
					<tr style=\"color:#333333;background-color:White;font-family:Arial;font-size:X-Small;\">\
						<td id=\"calif_grupo\">3IM3</td>\
						<td>GENETICA MICROBIANA</td>\
						<td>-</td>\
						<td>-</td>\
						<td id =\"calif_analitica\">\
						<select id=\"analitica\">\
								<option value=\"0\">0</option>\
								<option value=\"1\">1</option>\
								<option value=\"2\">2</option>\
								<option value=\"3\">3</option>\
								<option value=\"4\">4</option>\
								<option value=\"5\">5</option>\
								<option value=\"6\">6</option>\
								<option value=\"7\">7</option>\
								<option value=\"8\">8</option>\
								<option value=\"9\">9</option>\
								<option value=\"10\">10</option>\
						</select>\</td>\
						<td>-</td>\
						<td id =\"calif_analitica2\"><input id=\"analiticabtn\" type=\"button\" value=\"RELLENAR\" onClick=\"rellenar_analitica()\"/>\
						</td>\
					</tr>\
					<tr style=\"color:#333333;background-color:#F2F2F2;font-family:Arial;font-size:X-Small;\">\
						<td id=\"calif_grupo2\">3IM3</td>\
						<td>INMUNOLOGIA</td>\
						<td>-</td>\
						<td>-</td>\
						<td id=\"calif_fisica\">\
						<select id=\"fisica\">\
							<option value=\"0\">0</option>\
							<option value=\"1\">1</option>\
							<option value=\"2\">2</option>\
							<option value=\"3\">3</option>\
							<option value=\"4\">4</option>\
							<option value=\"5\">5</option>\
							<option value=\"6\">6</option>\
							<option value=\"7\">7</option>\
							<option value=\"8\">8</option>\
							<option value=\"9\">9</option>\
							<option value=\"10\">10</option>\
						</select>\</td>\
						<td>-</td>\
						<td id=\"calif_fisica2\"><input id=\"fisicabtn\" type=\"button\" value=\"RELLENAR\" onClick=\"rellenar_fisica()\"/>\
						</td>\
					</tr>\
					<tr style=\"color:#333333;background-color:White;font-family:Arial;font-size:X-Small;\">\
						<td id=\"calif_grupo3\">3IM3</td>\
						<td>MICROBIOLOGIA DEL SUELO</td>\
						<td>-</td>\
						<td>-</td>\
						<td id=\"calif_quimica\">\
						<select id=\"quimica\">\
								<option value=\"0\">0</option>\
								<option value=\"1\">1</option>\
								<option value=\"2\">2</option>\
								<option value=\"3\">3</option>\
								<option value=\"4\">4</option>\
								<option value=\"5\">5</option>\
								<option value=\"6\">6</option>\
								<option value=\"7\">7</option>\
								<option value=\"8\">8</option>\
								<option value=\"9\">9</option>\
								<option value=\"10\">10</option>\
							</select>\</td>\
						<td>-</td>\
						<td id=\"calif_quimica2\"><input id=\"fisicabtn\" type=\"button\" value=\"RELLENAR\" onClick=\"rellenar_quimica()\"/>\
						</td>\
					</tr>\
					<tr style=\"color:#333333;background-color:#F2F2F2;font-family:Arial;font-size:X-Small;\">\
						<td id=\"calif_grupo4\">3IM3</td>\
						<td>PATOLOGIA</td>\
						<td>-</td>\
						<td>-</td>\
						<td id=\"calif_ingles\">\<select id=\"ingles\">\
								<option value=\"0\">0</option>\
								<option value=\"1\">1</option>\
								<option value=\"2\">2</option>\
								<option value=\"3\">3</option>\
								<option value=\"4\">4</option>\
								<option value=\"5\">5</option>\
								<option value=\"6\">6</option>\
								<option value=\"7\">7</option>\
								<option value=\"8\">8</option>\
								<option value=\"9\">9</option>\
								<option value=\"10\">10</option>\
							</select>\</td>\
						<td>-</td>\
						<td id=\"calif_ingles2\"><input id=\"fisicabtn\" type=\"button\" value=\"RELLENAR\" onClick=\"rellenar_ingles()\"/>\
						</td>\
					</tr>\
				</table>";
			}
		}
	}
}

function rellenar_analitica(){
	var analitica = document.getElementById('analitica').value;
	document.getElementById('calif_analitica').innerHTML=analitica;
	document.getElementById('calif_analitica2').innerHTML=analitica;
	document.getElementById('analitica').style.display= "none";
}

function rellenar_fisica(){
	var fisica = document.getElementById('fisica').value;
	document.getElementById('fisica').style.display= "none";
	document.getElementById('calif_fisica').innerHTML=fisica;
	document.getElementById('calif_fisica2').innerHTML=fisica;
}

function rellenar_quimica(){
	var quimica = document.getElementById('quimica').value;
	document.getElementById('quimica').style.display= "none";
	document.getElementById('calif_quimica').innerHTML=quimica;
	document.getElementById('calif_quimica2').innerHTML=quimica;

}

function rellenar_ingles(){
	var ingles = document.getElementById('ingles').value;
	document.getElementById('ingles').style.display= "none";
	document.getElementById('calif_ingles').innerHTML=ingles;
	document.getElementById('calif_ingles2').innerHTML=ingles;
}

function rellenar_comunicacion(){
	var comunicacion = document.getElementById('comunicacion').value;
	document.getElementById('comunicacion').style.display= "none";
	document.getElementById('calif_comunicacion').innerHTML=comunicacion;
	document.getElementById('calif_comunicacion2').innerHTML=comunicacion;
}

function rellenar_dibujo(){
	var dibujo = document.getElementById('dibujo').value;
	document.getElementById('dibujo').style.display= "none";
	document.getElementById('calif_dibujo').innerHTML=dibujo;
	document.getElementById('calif_dibujo2').innerHTML=dibujo;
}

function rellenar_entorno(){
	var entorno = document.getElementById('entorno').value;
	document.getElementById('entorno').style.display= "none";
	document.getElementById('calif_entorno').innerHTML=entorno;
	document.getElementById('calif_entorno2').innerHTML=entorno;
}

function rellenar_logicos(){
	var logicos = document.getElementById('logicos').value;
	document.getElementById('logicos').style.display= "none";
	document.getElementById('calif_logicos').innerHTML=logicos;
	document.getElementById('calif_logicos2').innerHTML=logicos;

}

function rellenar_electronicos(){
	var electronicos = document.getElementById('electronicos').value;
	document.getElementById('electronicos').style.display= "none";
	document.getElementById('calif_electronicos').innerHTML=electronicos;
	document.getElementById('calif_electronicos2').innerHTML=electronicos;
}

function rellenar_instrumentacion(){
	var instrumentacion = document.getElementById('instrumentacion').value;
	document.getElementById('instrumentacion').style.display= "none";
	document.getElementById('calif_instrumentacion').innerHTML=instrumentacion;
	document.getElementById('calif_instrumentacion2').innerHTML=instrumentacion;
}