package lambda.stream.parte3;

import java.util.List;
//import java.util.stream.Collectors;


public class Main {
	
	public static void main(String[] args) {
	
		List<String> words = List.of("CARLOS", "JOSÉ", "JOÃO", "JOANA", "MARIA", "CELSO");
		
//		List<String> filteredWords = words.stream()
//			.filter(w -> w.startsWith("J"))
//			.map(w -> w.toLowerCase())
//			.collect(Collectors.toList());
//		
//		filteredWords.forEach(w -> System.out.println(w));
		
		words.stream()
			.filter(w -> w.startsWith("J"))
			.map(w -> w.toLowerCase())
			.forEach(w -> System.out.println(w));
	}
}
