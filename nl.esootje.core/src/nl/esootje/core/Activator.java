package nl.esootje.core;

import static org.amdatu.web.rest.jaxrs.AmdatuWebRestConstants.JAX_RS_RESOURCE_BASE;
import java.util.Properties;
import org.amdatu.mongo.MongoDBService;
import org.apache.felix.dm.DependencyActivatorBase;
import org.apache.felix.dm.DependencyManager;
import org.osgi.framework.BundleContext;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import nl.esootje.core.wordlist.WordListService;

public class Activator extends DependencyActivatorBase {
	
	private static final Logger logger = LoggerFactory.getLogger(Activator.class);

	@Override
	public void init(BundleContext context, DependencyManager manager) throws Exception {
		logger.info("Init esootje.core Activator");
		
		
		Properties props = new Properties();
		props.setProperty(JAX_RS_RESOURCE_BASE, "/data");
		manager.add(createComponent().setInterface(Object.class.getName(), props)
				.setImplementation(WordListService.class)
				.add(createServiceDependency().setService(MongoDBService.class).setRequired(true)));
	}

}
