package lambda.stream.parte2;

public class Main {

	public static void main(String[] args) {
		
		Operator op = (x, y) -> x * y;
		System.out.println(op.execute(2, 2));
		
	}
}
