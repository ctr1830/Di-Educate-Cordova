package json;

import java.util.ArrayList;
import java.util.List;

import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlRootElement;

@XmlRootElement
public class UsuariossJSON {

	@XmlElement(name="usuarios")
	private List<UsuariosJSON> usuarioss;
	
	public UsuariossJSON() {
		usuarioss=new ArrayList <UsuariosJSON>();
	}
	public List<UsuariosJSON> getUsuarioss() {
		return usuarioss;
	}
	public void setUsuarioss(List<UsuariosJSON> usuarioss) {
		this.usuarioss=usuarioss;
	}
}
