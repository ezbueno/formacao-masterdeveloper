package lambda.stream.parte2;

@FunctionalInterface
public interface Operator {
	
	int execute(int x, int y);
	
	default void say() {
		System.out.println("I am the Operator!");
	}
}
