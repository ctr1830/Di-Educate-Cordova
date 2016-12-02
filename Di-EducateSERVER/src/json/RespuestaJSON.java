package json;

import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlRootElement;

@XmlRootElement
public class RespuestaJSON {

	@XmlElement
	private String textoRespuesta;
	
	public RespuestaJSON() {
	}
	
	public RespuestaJSON(String textoRespuesta) {
		this.textoRespuesta=textoRespuesta;
	}
	
	public String getTextoRespuesta() {
		return textoRespuesta;
	}
	public void setTextoRespuesta(String textoRespuesta) {
		this.textoRespuesta=textoRespuesta;
	}
}


