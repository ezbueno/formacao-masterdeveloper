package lambda.stream.parte1;

import java.util.Comparator;

public class NumberComparator implements Comparator<Integer> {

	@Override
	public int compare(Integer o1, Integer o2) {
		return -o1.compareTo(o2); // ordem decrescente
	}
}
