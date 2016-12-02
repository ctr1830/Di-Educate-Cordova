package json;

import java.util.ArrayList;
import java.util.List;

import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlRootElement;

@XmlRootElement
public class TextoEnunciadosJSON {

		@XmlElement(name="textoEnunciado")
		private List<TextoEnunciadoJSON> textoEnunciados;
		
		public TextoEnunciadosJSON() {
			textoEnunciados=new ArrayList <TextoEnunciadoJSON>();
		}
		public List<TextoEnunciadoJSON> getTextoEnunciados() {
			return textoEnunciados;
		}
		public void setTextoEnunciados(List<TextoEnunciadoJSON> textoEnunciados) {
			this.textoEnunciados=textoEnunciados;
		}
}
