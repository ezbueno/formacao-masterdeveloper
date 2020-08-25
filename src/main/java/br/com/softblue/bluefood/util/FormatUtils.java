package br.com.softblue.bluefood.util;

import java.math.BigDecimal;
import java.text.NumberFormat;
import java.util.Locale;

public class FormatUtils {
	
	private static final Locale LOCALE_BRAZIL = new Locale("pt", "BR");
	
	public static NumberFormat newCurrencyFormat() {
		NumberFormat nf = NumberFormat.getNumberInstance(LOCALE_BRAZIL);
		nf.setMaximumFractionDigits(2); // Duas casas decimais
		nf.setMinimumFractionDigits(2); // No mínimo 2 casas decimais
		nf.setGroupingUsed(false); // Não será usado separadores de milhar. Por exemplo(1500,00)
		
		return nf;
	}
	
	public static String formatCurrency(BigDecimal number) {
		if (number == null) {
			return null;
		}
		return newCurrencyFormat().format(number);
	}
}
