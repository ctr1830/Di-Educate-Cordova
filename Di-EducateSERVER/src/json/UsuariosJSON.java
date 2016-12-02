package json;

import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlRootElement;

@XmlRootElement
public class UsuariosJSON {

	@XmlElement
	private String nombre;
	@XmlElement
	private String apellidos;
	@XmlElement
	private Integer edad;
	@XmlElement
	private String foto;
	@XmlElement
	private String aficiones;
	@XmlElement
	private String username;
	@XmlElement
	private String password;
	
	public UsuariosJSON() {
	}
	
	public UsuariosJSON(String nombre, String apellidos,Integer edad, String foto, String aficiones, String username, String password) {
		this.nombre=nombre;
		this.apellidos=apellidos;
		this.edad=edad;
		this.foto=foto;
		this.aficiones=aficiones;
		this.username=username;
		this.password=password;
	}
	
	public String getNombre() {
		return nombre;
	}
	public void setNombre(String nombre) {
		this.nombre=nombre;
	}
	public String getApellidos() {
		return apellidos;
	}
	public void setApellidos(String apellidos) {
		this.apellidos=apellidos;
	}
	public Integer getEdad() {
		return edad;
	}
	public void setEdad(Integer edad) {
		this.edad=edad;
	}
	public String getFoto() {
		return foto;
	}
	public void setFoto(String foto) {
		this.foto=foto;
	}
	public String getAficiones() {
		return aficiones;
	}
	public void setAficiones(String aficiones) {
		this.aficiones=aficiones;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username=username;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password=password;
	}
}
