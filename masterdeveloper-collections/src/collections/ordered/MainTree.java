package collections.ordered;

import java.util.Set;
import java.util.TreeSet;

public class MainTree {
	
	public static void main(String[] args) {
		
		Set<Character> alfabeto = new TreeSet<Character>();
		alfabeto.add('F');
		alfabeto.add('E');
		alfabeto.add('A');
		alfabeto.add('C');
		alfabeto.add('B');
		alfabeto.add('D');
		
		System.out.println(alfabeto);
		
		Month m1 = new Month("Janeiro", 1);
		Month m2 = new Month("Abril", 4);
		Month m3 = new Month("Fevereiro", 2);
		Month m4 = new Month("Março", 3);
		
		Set<Month> months = new TreeSet<Month>();
		months.add(m1);
		months.add(m2);
		months.add(m3);
		months.add(m4);
		
		System.out.println(months);
		
		Set<Character> alfabetoInv = new TreeSet<Character>(new InverseComparator());
		alfabetoInv.add('F');
		alfabetoInv.add('E');
		alfabetoInv.add('A');
		alfabetoInv.add('C');
		alfabetoInv.add('B');
		alfabetoInv.add('D');
		
		System.out.println(alfabetoInv);
		
	}
}
