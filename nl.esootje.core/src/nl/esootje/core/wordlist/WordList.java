package nl.esootje.core.wordlist;

import java.util.HashMap;
import java.util.Map;

import nl.esootje.core.Language;

public class WordList {

	private String identifier;
	private String owner;
	private String title; // book / page
	private Language fromLanguage;
	private Language toLanguage;
	
	private Map<Word, Word> words = new HashMap<>();

	public String getIdentifier() {
		return identifier;
	}

	public void setIdentifier(String identifier) {
		this.identifier = identifier;
	}

	public String getOwner() {
		return owner;
	}

	public void setOwner(String owner) {
		this.owner = owner;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public Language getFromLanguage() {
		return fromLanguage;
	}

	public void setFromLanguage(Language fromLanguage) {
		this.fromLanguage = fromLanguage;
	}

	public Language getToLanguage() {
		return toLanguage;
	}

	public void setToLanguage(Language toLanguage) {
		this.toLanguage = toLanguage;
	}

	public Map<Word, Word> getWords() {
		return words;
	}

	public void setWords(Map<Word, Word> words) {
		this.words = words;
	}
	
	
}
