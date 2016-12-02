package json;

import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlRootElement;

@XmlRootElement
public class InfoJSON {
	
	@XmlElement
	private String username;
	@XmlElement
	private String ejercicio;
	
	public InfoJSON() {
	}
	
	public InfoJSON(String username, String ejercicio) {
		this.username=username;
		this.ejercicio=ejercicio;
	}
	
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username=username;
	}
	
	public String getEjercicio() {
		return ejercicio;
	}
	public void setEjercicio(String ejercicio) {
		this.ejercicio=ejercicio;
	}

}
