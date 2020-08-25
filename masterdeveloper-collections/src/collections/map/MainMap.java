package collections.map;

import java.util.Collection;
import java.util.HashMap;
import java.util.Map;
import java.util.Set;

public class MainMap {
	
	public static void main(String[] args) {
		
		Map<Integer, String> meses = new HashMap<Integer, String>();
		meses.put(1, "Janeiro");
		meses.put(2, "Fevereiro");
		meses.put(3, "Março");
		meses.put(12, "Dezembro");
		
		System.out.println(meses);
		
		String m1 = meses.get(1);
		System.out.println(m1);
		
		Set<Integer> numeros = meses.keySet();
		System.out.println(numeros);
		
		Collection <String> nomes = meses.values();
		System.out.println(nomes);
		
		Set<Map.Entry<Integer, String>> entries = meses.entrySet();
		for (Map.Entry<Integer, String> entry : entries) {
			System.out.println(entry.getKey() + " : " + entry.getValue());
		}
	}
}
