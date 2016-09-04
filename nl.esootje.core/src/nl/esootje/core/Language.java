package nl.esootje.core;

import java.util.Locale;
import java.util.ResourceBundle;

public enum Language implements TranslatableEnum {
	DUTCH,
	ENGLISH,
	FRENCH,
	GERMAN;

	@Override
	public String getLabel(Locale locale) {
		return ResourceBundle.getBundle("nl/esootje/core/Language", locale).getString(name());
	}	
}
