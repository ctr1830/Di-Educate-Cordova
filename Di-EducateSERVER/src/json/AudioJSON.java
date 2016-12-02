package json;

import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlRootElement;

@XmlRootElement
public class AudioJSON {
	
	@XmlElement
	private String url;
	
	public AudioJSON() {
	}
	
	public AudioJSON(String url) {
		this.url=url;
	}
	
	public String getUrl() {
		return url;
	}
	public void setUrl(String url) {
		this.url=url;
	}

}
