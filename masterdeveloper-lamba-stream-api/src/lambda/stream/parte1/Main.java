package lambda.stream.parte1;

import java.util.ArrayList;
//import java.util.Comparator;
import java.util.List;

public class Main {
	
	public static void main(String[] args) {
		
		List<Integer> numbers = new ArrayList<>(List.of(5, 4, 3, 2, 1));
		
		//NumberComparator comparator = new NumberComparator();
		
//		Comparator<Integer> comparator = new Comparator<Integer>() {
//			@Override
//			public int compare(Integer o1, Integer o2) {
//				return -o1.compareTo(o2); // ordem decrescente
//			}
//		};
		
		//Comparator<Integer> comparator = (o1, o2) -> -o1.compareTo(o2);
		 
		numbers.sort((o1, o2) -> -o1.compareTo(o2));
		
		System.out.println(numbers);
		
	}
}
