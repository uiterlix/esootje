package nl.esootje.core.wordlist;

import java.util.Collection;
import java.util.Collections;
import java.util.HashMap;
import java.util.Map;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import org.amdatu.mongo.MongoDBService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import nl.esootje.core.Language;

@Path("wordlist")
public class WordListService {
	
	private static final Logger logger = LoggerFactory.getLogger(WordListService.class);

	private volatile MongoDBService mongo;
	
	void start() {
		logger.info("Start WordListService");
	}
	
	@GET
	@Produces({ MediaType.APPLICATION_JSON })
	public Collection<WordList> listWordLists() {
		// mongo.getDB().getCollection("WordList").find();
		WordList wordList = new WordList();
		wordList.setFromLanguage(Language.ENGLISH);
		wordList.setToLanguage(Language.DUTCH);
		wordList.setTitle("Lastige woorden");
		Map<Word, Word> words = new HashMap<>();
		words.put(new Word("one"), new Word("een"));
		words.put(new Word("two"), new Word("twee"));
		wordList.setWords(words);
		return Collections.singletonList(wordList);
	}
}
