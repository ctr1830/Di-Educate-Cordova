package json;

import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlRootElement;

@XmlRootElement
public class ImagenJSON {
	
	@XmlElement
	private String url;
	
	public ImagenJSON() {
	}
	
	public ImagenJSON(String url) {
		this.url=url;
	}
	
	public String getUrl() {
		return url;
	}
	public void setUrl(String url) {
		this.url=url;
	}
}

	
