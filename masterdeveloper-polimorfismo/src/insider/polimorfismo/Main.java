package insider.polimorfismo;

public class Main {

	public static void main(String[] args) {
		/*
		Veiculo v = new Veiculo();
		v.andar();
		
		Automovel a = new Automovel();
		a.andar();
		*/
		
		Veiculo v = new Automovel();
		v.andar();
		
		Veiculo a = new Automovel();
		
		if (a instanceof Automovel) {
			Automovel auto = (Automovel) a;
			auto.acelerar();
		} else {
			System.out.println("O tipo não é compatível!");
		}
		
		Veiculo vb = new Bicicleta();
		
		if (vb instanceof Automovel) {
			Automovel auto2 = (Automovel) vb;
			auto2.acelerar();
		} else {
			System.out.println("O tipo não é compatível!");
		}
	}
}
