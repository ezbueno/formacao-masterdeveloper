package insider.polimorfismo;

public class Automovel extends Veiculo {
	
	@Override
	public void andar() {
		System.out.println("O automóvel está andando!");
	}
	
	public void acelerar() {
		System.out.println("O automóvel está acelerando!");
	}
}
