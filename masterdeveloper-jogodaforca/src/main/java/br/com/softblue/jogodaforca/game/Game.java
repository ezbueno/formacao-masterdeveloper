package br.com.softblue.jogodaforca.game;

import java.util.HashSet;
import java.util.Set;

import br.com.softblue.jogodaforca.core.Config;
import br.com.softblue.jogodaforca.core.Dictionary;
import br.com.softblue.jogodaforca.core.InvalidCharacterException;
import br.com.softblue.jogodaforca.core.Word;
import br.com.softblue.jogodaforca.ui.UI;

public class Game {
	
	public void start(String[] args) {
		UI.print("Bem-Vindo ao Jogo da Forca!");
		
		Dictionary dictionary = Dictionary.getInstance();
		UI.print("Dicionário usado: " + dictionary.getName());
		
		Word word = dictionary.nextWord();
		
		UI.print("A palavra tem " + word.size() + " letras");
		
		Set<Character> usedChars = new HashSet<Character>();
		
		int errorCount = 0;
		
		if (args.length > 0) {
			Config.setMaxErrors(args[0]);
		}
		
		int maxErrors = Integer.parseInt(Config.get("maxErrors"));
		
		UI.print("Você pode errar no máximo " + maxErrors + " vez(es)!");
		
		while (true) {
			UI.print(word);
			UI.printNewLine();
			
			char c;
			
			try {
				c = UI.readChar("Digite uma letra:");
				
				if (usedChars.contains(c)) {
					throw new InvalidCharacterException("Esta letra já foi utilizada!");
				}
				
				usedChars.add(c);
				
				if (word.hasChar(c)) {
					UI.print("Você acertou uma letra!");
				} else {
					errorCount++;
					
					if (errorCount < maxErrors) {
						UI.print("Você errou! Você ainda pode errar " + (maxErrors - errorCount) + " vez(es)!");
					}
				}
				
				UI.printNewLine();
				
				if (word.discovered()) {
					UI.print("PARABÉNS! Você acertou a palavra correta: " + word.getOriginalWord());
					UI.print("Fim do jogo!");
					break;
				}
				
				if (errorCount == maxErrors) {
					UI.print("Você perdeu o jogo! A palavra correta era: " + word.getOriginalWord());
					UI.print("Fim do jogo!");
					break;
				}
				
			} catch (InvalidCharacterException e) {
				UI.print("Erro: " + e.getMessage());
				UI.printNewLine();
			}
		}	
	}
}
