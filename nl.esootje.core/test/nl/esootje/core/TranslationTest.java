package nl.esootje.core;

import static org.junit.Assert.*;

import java.util.Locale;

import org.junit.Test;

public class TranslationTest {

	@Test
	public void testLanguageTranslation() {
		Locale nlLocale = new Locale("nl");
		assertEquals("Nederlands", Language.DUTCH.getLabel(nlLocale));
		
		Locale enLocale = Locale.ENGLISH;
		assertEquals("Dutch", Language.DUTCH.getLabel(enLocale));
	}
}
