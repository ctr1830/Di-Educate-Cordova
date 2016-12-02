package json;

import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlRootElement;
import java.util.ArrayList;
import java.util.List;

@XmlRootElement
public class ImagenesJSON {

	@XmlElement(name="imagen")
	private List<ImagenJSON> imagenes;
	
	public ImagenesJSON() {
		imagenes=new ArrayList <ImagenJSON>();
	}
	public List<ImagenJSON> getImagenes() {
		return imagenes;
	}
	public void setImagenes(List<ImagenJSON> imagenes) {
		this.imagenes=imagenes;
	}
}

	
