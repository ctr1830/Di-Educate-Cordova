/*
 * $Id: restLogic.java Nov 3, 2016 tta1617$
 * 
 * Copyright (C) 2015 Maider Huarte Arrayago
 * 
 * This file is part of TTA1617_LS-EX_9-11S.zip.
 * 
 * TTA1617_LS-EX_9-11S.zip is based on templates by Eclipse.org and it is
 * intended for learning purposes only.
 * 
 * TTA1617_LS-EX_9-11S.zip is free software: you can redistribute it and/or
 * modify it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or (at your
 * option) any later version.
 * 
 * TTA1617_LS-EX_9-11S.zip is distributed in the hope that it will be useful, but
 * WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or
 * FITNESS FOR A PARTICULAR PURPOSE. See the GNU General Public License for more
 * details <http://www.gnu.org/licenses/>.
 */
package bl;

import dl.*;
import json.*;

import java.util.ArrayList;
import java.util.List;

import javax.annotation.PostConstruct;
import javax.ejb.Singleton;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.QueryParam;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import org.jboss.resteasy.plugins.providers.multipart.MultipartFormDataInput;

import json.UsuariosJSON;


@Singleton//Anotación de EJB compatible con Web Service
@Path("/DiEducate")
public class LogicREST {
    @Context
    private javax.servlet.http.HttpServletRequest hsr;
    private Integer username;
    private Integer ejercicio;
    
    @PersistenceContext
    EntityManager em;
	
	public LogicREST() {
	}

	@SuppressWarnings("unchecked")
	@GET
	@Produces(MediaType.APPLICATION_JSON)
	@Path("/requestCalifications")	
	public ResultadossJSON Resultados(@QueryParam("userid") Integer userid) {
	
		System.out.println("Solicitud de resultados de: "+hsr.getRemoteAddr());
		System.out.println("Id: "+userid);

		List<Usuarios> usersList=(List<Usuarios>)em.createNamedQuery("Usuarios.findAllById").setParameter("idUser", userid).getResultList();
		
		List<Resultados> resultUserList=(List<Resultados>)em.createNamedQuery("Resultados.findByUsers").setParameter("usuarios", usersList.get(0)).getResultList();
		
		ResultadossJSON resultadosJSON=new ResultadossJSON();
		List<ResultadosJSON> resultadosJSONList= new ArrayList<ResultadosJSON>();
		
		for(int i=0;i<resultUserList.size();i++){
			Resultados r=resultUserList.get(i);
			ResultadosJSON rJSON=new ResultadosJSON(r.isAprobado());
			resultadosJSONList.add(rJSON);
			System.out.println("aprobado: "+rJSON.getAprobado());
		}
		
		resultadosJSON.setResultadoss(resultadosJSONList);
		
		return resultadosJSON;
	
	}
	
	@SuppressWarnings("unchecked")
	@GET
	@Produces(MediaType.APPLICATION_JSON)
	@Path("/requestEnunciados")	
	public TextoEnunciadosJSON TextoEnunciado(@QueryParam("ejercicio") Integer id) {
	
		System.out.println("Solicitud de enuciados de: "+hsr.getRemoteAddr());
		System.out.println("Id: "+id);

		List<DatosEjercicio> ejerciciosList=(List<DatosEjercicio>)em.createNamedQuery("DatosEjercicio.findAllById").setParameter("idDatosEjercicio", id).getResultList();
		
		List<TextoEnunciado> enunciadosList=(List<TextoEnunciado>)em.createNamedQuery("TextoEnunciado.findAllByDatosEjercicio").setParameter("datosEjercicio", ejerciciosList.get(0)).getResultList();
	
		TextoEnunciadosJSON enunciadosJSON=new TextoEnunciadosJSON();
		List<TextoEnunciadoJSON> enunciadoJSONList=new ArrayList<TextoEnunciadoJSON>();
	
		for(int i=0;i<enunciadosList.size();i++){
			TextoEnunciado t=enunciadosList.get(i);
			TextoEnunciadoJSON tJSON=new TextoEnunciadoJSON(t.getTextoEnunciado());
			enunciadoJSONList.add(tJSON);
		}
	
		enunciadosJSON.setTextoEnunciados(enunciadoJSONList);
	
		return enunciadosJSON;
	
	}
	
	@SuppressWarnings("unchecked")
	@GET
	@Produces(MediaType.APPLICATION_JSON)
	@Path("/requestImagenes")	
	public ImagenesJSON Imagen(@QueryParam("ejercicio") Integer id) {
	
		System.out.println("Solicitud de imágenes de: "+hsr.getRemoteAddr());
		System.out.println("Id: "+id);

		List<DatosEjercicio> ejerciciosList=(List<DatosEjercicio>)em.createNamedQuery("DatosEjercicio.findAllById").setParameter("idDatosEjercicio", id).getResultList();
		
		List<Imagen> imagenesList=(List<Imagen>)em.createNamedQuery("Imagen.findAllByDatosEjercicio").setParameter("datosEjercicio", ejerciciosList.get(0)).getResultList();
	
		ImagenesJSON imagenesJSON=new ImagenesJSON();
		List<ImagenJSON> imagenJSONList=new ArrayList<ImagenJSON>();
	
		for(int i=0;i<imagenesList.size();i++){
			Imagen im=imagenesList.get(i);
			ImagenJSON imJSON=new ImagenJSON(im.getUrl());
			imagenJSONList.add(imJSON);
		}
	
		imagenesJSON.setImagenes(imagenJSONList);
	
		return imagenesJSON;
	
	}
	
	@SuppressWarnings("unchecked")
	@GET
	@Produces(MediaType.APPLICATION_JSON)
	@Path("/requestAudios")	
	public AudiosJSON AudioJSON(@QueryParam("ejercicio") Integer id) {
	
		System.out.println("Solicitud de audios de: "+hsr.getRemoteAddr());
		System.out.println("Id: "+id);

		List<DatosEjercicio> ejerciciosList=(List<DatosEjercicio>)em.createNamedQuery("DatosEjercicio.findAllById").setParameter("idDatosEjercicio", id).getResultList();
		
		List<Audio> audiosList=(List<Audio>)em.createNamedQuery("Audio.findAllByDatosEjercicio").setParameter("datosEjercicio", ejerciciosList.get(0)).getResultList();
	
		AudiosJSON audiosJSON=new AudiosJSON();
		List<AudioJSON> audioJSONList=new ArrayList<AudioJSON>();
	
		for(int i=0;i<audiosList.size();i++){
			Audio a=audiosList.get(i);
			AudioJSON aJSON=new AudioJSON(a.getUrl());
			audioJSONList.add(aJSON);
		}
	
		audiosJSON.setAudios(audioJSONList);
	
		return audiosJSON;
	
	}
	
	@SuppressWarnings("unchecked")
	@GET
	@Produces(MediaType.APPLICATION_JSON)
	@Path("/requestRespuestas")	
	public RespuestasJSON RespuestaJSON(@QueryParam("ejercicio") Integer id) {
	
		System.out.println("Solicitud de respuestas de: "+hsr.getRemoteAddr());
		System.out.println("Id: "+id);

		List<DatosEjercicio> ejerciciosList=(List<DatosEjercicio>)em.createNamedQuery("DatosEjercicio.findAllById").setParameter("idDatosEjercicio", id).getResultList();
		
		List<Respuesta> respuestasList=(List<Respuesta>)em.createNamedQuery("Respuesta.findAllByDatosEjercicio").setParameter("datosEjercicio", ejerciciosList.get(0)).getResultList();
	
		RespuestasJSON respuestasJSON=new RespuestasJSON();
		List<RespuestaJSON> respuestaJSONList=new ArrayList<RespuestaJSON>();
	
		for(int i=0;i<respuestasList.size();i++){
			Respuesta r=respuestasList.get(i);
			RespuestaJSON rJSON=new RespuestaJSON(r.getTextoRespuesta());
			respuestaJSONList.add(rJSON);
		}
	
		respuestasJSON.setRespuestas(respuestaJSONList);
	
		return respuestasJSON;
	
	}
	
	
	@SuppressWarnings("unchecked")
	@POST
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.TEXT_PLAIN)	
	@Path("/requestUser")
	public Response login(UsuariosJSON usuarioJ) {
		
		System.out.println("Login usuario de: "+hsr.getRemoteAddr());
		System.out.println(usuarioJ.getUsername());
		System.out.println(usuarioJ.getPassword());
		System.out.println();
		Response response;
		
		List<Usuarios> usuario=(List<Usuarios>)em.createNamedQuery("Usuarios.findByUsername").setParameter("username", usuarioJ.getUsername()).getResultList();
		if(usuario.size()==0){
			response=Response.status(200).entity("El usuario indicado no existe").build();
			return response;
		}
		else {
			if(usuario.get(0).getPassword().equals(usuarioJ.getPassword())){
				response=Response.status(200).entity("Bienvenido "+usuario.get(0).getNombre()+" a Di-Educate;"+usuario.get(0).getIdUser()).build();
				return response;
			}
			else{
				response=Response.status(200).entity("Contraseña incorrecta;null").build();
				return response;
			}
		}
		
	}
	
	@SuppressWarnings("unchecked")
	@POST
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.TEXT_PLAIN)	
	@Path("/addUsuario")
	public Response addUsuario(UsuariosJSON usuariosJSON) {

		System.out.println("Añadir usuario: "+hsr.getRemoteAddr());
		Response response;
		
		List<Usuarios> ListaUsuarios=(List<Usuarios>)em.createNamedQuery("Usuarios.findByUsername").setParameter("username", usuariosJSON.getUsername()).getResultList();
		if(ListaUsuarios.size()==0){
		
		System.out.println("Añadiendo nuevo usuario en la DDBB");
		System.out.println(usuariosJSON.getNombre());
		System.out.println(usuariosJSON.getApellidos());
		System.out.println(usuariosJSON.getEdad());
		System.out.println(usuariosJSON.getAficiones());
		System.out.println(usuariosJSON.getFoto());
		System.out.println(usuariosJSON.getUsername());
		System.out.println(usuariosJSON.getPassword());
		System.out.println();
		
		Usuarios usuario=new Usuarios();
		usuario.setNombre(usuariosJSON.getNombre());
		usuario.setApellidos(usuariosJSON.getApellidos());
		usuario.setEdad(usuariosJSON.getEdad());
		usuario.setAficiones(usuariosJSON.getAficiones());
		usuario.setFoto(usuariosJSON.getFoto());
		usuario.setUsername(usuariosJSON.getUsername());
		usuario.setPassword(usuariosJSON.getPassword());
		//Persistir objeto student en el Contexto de Persistencia
		em.persist(usuario);
		
		Integer num=usuario.getIdUser();
		System.out.println(num);
		
		Resultados resultados=new Resultados();
		DatosEjercicio datos=new DatosEjercicio();
		Resultados resultados1=new Resultados();
		DatosEjercicio datos1=new DatosEjercicio();
		Resultados resultados2=new Resultados();
		DatosEjercicio datos2=new DatosEjercicio();
		Resultados resultados3=new Resultados();
		DatosEjercicio datos3=new DatosEjercicio();
		Resultados resultados4=new Resultados();
		DatosEjercicio datos4=new DatosEjercicio();
		Resultados resultados5=new Resultados();
		DatosEjercicio datos5=new DatosEjercicio();
		Resultados resultados6=new Resultados();
		DatosEjercicio datos6=new DatosEjercicio();
		Resultados resultados7=new Resultados();
		DatosEjercicio datos7=new DatosEjercicio();
		
		
		datos.setIdDatosEjercicio(1);
		resultados.setUsuarios(usuario);
		resultados.setAprobado(false);
		resultados.setDatosEjercicio(datos);
		em.persist(resultados);
		
		datos1.setIdDatosEjercicio(2);
		resultados1.setUsuarios(usuario);
		resultados1.setAprobado(false);
		resultados1.setDatosEjercicio(datos1);
		em.persist(resultados1);
		
		datos2.setIdDatosEjercicio(3);
		resultados2.setUsuarios(usuario);
		resultados2.setAprobado(false);
		resultados2.setDatosEjercicio(datos2);
		em.persist(resultados2);
		
		datos3.setIdDatosEjercicio(4);
		resultados3.setUsuarios(usuario);
		resultados3.setAprobado(false);
		resultados3.setDatosEjercicio(datos3);
		em.persist(resultados3);
		
		datos4.setIdDatosEjercicio(5);
		resultados4.setUsuarios(usuario);
		resultados4.setAprobado(false);
		resultados4.setDatosEjercicio(datos4);
		em.persist(resultados4);
		
		datos5.setIdDatosEjercicio(6);
		resultados5.setUsuarios(usuario);
		resultados5.setAprobado(false);
		resultados5.setDatosEjercicio(datos5);
		em.persist(resultados5);
		
		datos6.setIdDatosEjercicio(7);
		resultados6.setUsuarios(usuario);
		resultados6.setAprobado(false);
		resultados6.setDatosEjercicio(datos6);
		em.persist(resultados6);
		
		datos7.setIdDatosEjercicio(8);
		resultados7.setUsuarios(usuario);
		resultados7.setAprobado(false);
		resultados7.setDatosEjercicio(datos7);
		em.persist(resultados7);
		
		response=Response.status(200).entity("Usuario añadido").build();
		
		return response;
		}
		
		else{
			
			response=Response.status(200).entity("Nombre de usuario existente. No se añadió a la base de datos").build();
			
			return response;
		}
	}
	@SuppressWarnings("unchecked")
	@POST
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.TEXT_PLAIN)	
	@Path("/addInfo")
	public Response addInfo(InfoJSON infoJSON) {
	
		System.out.println("Añadir calificación: "+hsr.getRemoteAddr());
		System.out.println("Recibiendo info...");
		Response response;
		
		username=Integer.parseInt(infoJSON.getUsername());
		ejercicio=Integer.parseInt(infoJSON.getEjercicio());
		System.out.println("usuario:"+username);
		System.out.println("ejercicio:"+username);
		
		response=Response.status(200).entity("ok").build();
		
		return response;
	}
	
	

	@SuppressWarnings("unchecked")
	@POST
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.TEXT_PLAIN)	
	@Path("/addCalificaciones")
	public Response addCalificaciones(ResultadosJSON resultadosJSON) {

		System.out.println("Añadir calificación: "+hsr.getRemoteAddr());
		Response response;
		
		List<Usuarios> usersList=(List<Usuarios>)em.createNamedQuery("Usuarios.findAllById").setParameter("idUser", username).getResultList();
		List<DatosEjercicio> ejerciciosList=(List<DatosEjercicio>)em.createNamedQuery("DatosEjercicio.findAllById").setParameter("idDatosEjercicio", ejercicio).getResultList();
		
		List<Resultados> resultUserList=(List<Resultados>)em.createNamedQuery("Resultados.findByEjercicioANDUsers")
				.setParameter("usuarios", usersList.get(0))
				.setParameter("datosEjercicio", ejerciciosList.get(0)).getResultList();
		
		System.out.println("Añadiendo calificaciones...");
		System.out.println("UserId: "+username);
		System.out.println("Ejercicio: "+ejercicio);
		System.out.println("Aprobado: "+resultadosJSON.getAprobado());
		
		resultUserList.get(0).setAprobado(resultadosJSON.getAprobado());
		
		response=Response.status(200).entity("Calificación añadida").build();
		
		return response;
	}
}