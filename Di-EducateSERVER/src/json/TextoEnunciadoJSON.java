package json;

import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlRootElement;

@XmlRootElement
public class TextoEnunciadoJSON {

		@XmlElement
		private String textoEnunciado;
		
		public TextoEnunciadoJSON() {
		}
		
		public TextoEnunciadoJSON(String textoEnunciado) {
			this.textoEnunciado=textoEnunciado;
		}
		
		public String getTextoEnunciado() {
			return textoEnunciado;
		}
		public void setTextoEnunciado(String textoEnunciado) {
			this.textoEnunciado=textoEnunciado;
		}
}
