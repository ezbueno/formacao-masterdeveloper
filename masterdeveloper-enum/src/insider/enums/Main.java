package insider.enums;

public class Main {

	public static void main(String[] args) {
		
		DiaDaSemana d1 = DiaDaSemana.Quinta;
		System.out.println(d1.isDiaUtil());
		
		DiaDaSemana d2 = DiaDaSemana.Sabado;
		System.out.println(d2.isDiaUtil());
		
		DiaDaSemana domingo = DiaDaSemana.valueOf("Domingo"); // Converte uma String para um Enum
		System.out.println(domingo);
		
		System.out.println(domingo.name()); // Retorna o nome do Enum como uma String
		
		System.out.println(DiaDaSemana.valueOf("Sexta").isDiaUtil());

	}

}
