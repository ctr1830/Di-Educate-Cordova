package json;

import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlRootElement;

@XmlRootElement
public class ResultadosJSON {

	@XmlElement
	private boolean aprobado;
	
	public ResultadosJSON() {
	}
	
	public ResultadosJSON(boolean aprobado) {
		this.aprobado=aprobado;
	}
	
	public boolean getAprobado() {
		return aprobado;
	}
	public void setAprobado(boolean aprobado) {
		this.aprobado=aprobado;
	}
}
