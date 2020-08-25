package insider.enums;

public enum DiaDaSemana {
	
	Segunda (true),
	Terca (true),
	Quarta (true),
	Quinta (true),
	Sexta (true),
	Sabado (false),
	Domingo (false);
	
	boolean diaUtil; // Por padrão, o Enum já define o atributo como private
	
	// O Construtor também é privado por padrão, não há necessidade de colocar o modificador de visibilidade 
	DiaDaSemana(boolean diaUtil) {
		this.diaUtil = diaUtil;
	}

	public boolean isDiaUtil() {
		return diaUtil;
	}
}
