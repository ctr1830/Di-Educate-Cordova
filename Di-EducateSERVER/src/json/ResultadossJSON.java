package json;

import java.util.ArrayList;
import java.util.List;

import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlRootElement;

@XmlRootElement
public class ResultadossJSON {

	@XmlElement(name="resultados")
	private List<ResultadosJSON> resultadoss;
	
	public ResultadossJSON() {
		resultadoss=new ArrayList <ResultadosJSON>();
	}
	public List<ResultadosJSON> getResultadoss() {
		return resultadoss;
	}
	public void setResultadoss(List<ResultadosJSON> resultadoss) {
		this.resultadoss=resultadoss;
	}
}
