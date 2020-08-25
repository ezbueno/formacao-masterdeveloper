package insider.polimorfismo;

public class Bicicleta extends Veiculo {
	
	@Override
	public void andar() {
		System.out.println("A bicicleta está andando!");
	}
	
	public void empinar() {
		System.out.println("A bicicleta está empinando!");
	}
}
