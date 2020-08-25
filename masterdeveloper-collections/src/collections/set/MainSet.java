package collections.set;

import java.util.HashSet;
//import java.util.LinkedHashSet;
import java.util.Set;

public class MainSet {
	
	public static void main(String[] args) {
		
		/*
		Set<Integer> numeros =  new LinkedHashSet<Integer>(); //new HashSet<Integer>();
		numeros.add(1);
		numeros.add(2);
		numeros.add(10);
		numeros.add(22);
		
		for (Integer n : numeros) {
			System.out.println(n);
		}
		
		System.out.println(numeros.contains(20));
		*/
		
		Mes m1 = new Mes("Janeiro", 1);
		Mes m2 = new Mes("Fevereiro", 2);
		Mes m3 = new Mes("Março", 3);
		Mes m4 = new Mes("Abril", 4);
		Mes m5 = new Mes("Fevereiro", 2);
		
		Set<Mes> meses = new HashSet<Mes>();
		meses.add(m1);
		meses.add(m2);
		meses.add(m3);
		meses.add(m4);
		meses.add(m5);
		
		System.out.println(meses);
		
	}
}
