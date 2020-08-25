package collections.ordered;

public class Month implements Comparable<Month> {

	private String nome;
	private int numero;
	
	public Month(String nome, int numero) {
		this.nome = nome;
		this.numero = numero;
	}

	public String getNome() {
		return nome;
	}

	public int getNumero() {
		return numero;
	}

	@Override
	public String toString() {
		return numero + "-" + nome;
	}

	@Override
	public int compareTo(Month o) {
		if (this.numero < o.numero) {
			return -1;
		} else if (this.numero > o.numero) {
			return 1;
		}
		return 0; // retorna 0 quando ambos os números forem iguais
	}
}
