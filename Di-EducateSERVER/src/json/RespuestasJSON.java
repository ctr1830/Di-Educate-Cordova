package json;

import java.util.ArrayList;
import java.util.List;

import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlRootElement;

@XmlRootElement
public class RespuestasJSON {

	@XmlElement(name="respuesta")
	private List<RespuestaJSON> respuestas;
	
	public RespuestasJSON() {
		respuestas=new ArrayList <RespuestaJSON>();
	}
	public List<RespuestaJSON> getRespuestas() {
		return respuestas;
	}
	public void setRespuestas(List<RespuestaJSON> respuestas) {
		this.respuestas=respuestas;
	}
}


