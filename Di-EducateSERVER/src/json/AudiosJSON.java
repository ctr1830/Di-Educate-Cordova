package json;

import java.util.ArrayList;
import java.util.List;

import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlRootElement;

@XmlRootElement
public class AudiosJSON {
	
	@XmlElement(name="audio")
	private List<AudioJSON> audios;
	
	public AudiosJSON() {
		audios=new ArrayList <AudioJSON>();
	}
	
	public List<AudioJSON> getAudios() {
		return audios;
	}
	public void setAudios(List<AudioJSON> audios) {
		this.audios=audios;
	}

}

