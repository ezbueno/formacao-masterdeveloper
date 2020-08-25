package collections.list;

//import java.util.ArrayList;
import java.util.Collections;
import java.util.LinkedList;
import java.util.List;

public class MainList {
	
	public static void main(String[] args) {
		
		List<String> listaMercado =  new LinkedList<String>(); // new ArrayList<String>();
		listaMercado.add("macarrão");
		listaMercado.add("feijão");
		listaMercado.add("ovo");
		listaMercado.add("sal");
		
		Collections.sort(listaMercado); // ordena os elementos da lista
		
		System.out.println(listaMercado);
		
		for (String item : listaMercado) {
			System.out.println("Item: " + item);
		}
		
		System.out.println();		
		
		for (int i = 0; i < listaMercado.size(); i++) {
			String item = listaMercado.get(i);
			System.out.println("Item => " + item);
		}
		
		listaMercado.remove(0);
		System.out.println(listaMercado);
		
		listaMercado.remove("ovo");
		System.out.println(listaMercado);
		
		System.out.println(listaMercado.contains("sal"));
		System.out.println(listaMercado.contains("farinha"));
		
		int posSal = listaMercado.indexOf("sal");
		System.out.println("Posição do sal: " + posSal);
		
		int posFarinha = listaMercado.indexOf("farinha");
		System.out.println("Posição da farinha: " + posFarinha);
	}
}
