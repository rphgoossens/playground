package nl.whitehorses.jhipster.web.rest;

import com.codahale.metrics.annotation.Timed;
import nl.whitehorses.jhipster.domain.Brewery;
import nl.whitehorses.jhipster.service.BrewerySummaryService;
import nl.whitehorses.jhipster.service.dto.BrewerySummaryDTO;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

/**
 * BrewerySummary controller
 */
@RestController
@RequestMapping("/api")
public class BrewerySummaryResource {

    private final Logger log = LoggerFactory.getLogger(BrewerySummaryResource.class);

    private final BrewerySummaryService brewerySummaryService;

    @Autowired
    public BrewerySummaryResource(BrewerySummaryService brewerySummaryService) {
        this.brewerySummaryService = brewerySummaryService;
    }

    /**
     * GET getBrewerySummary
     */
    @GetMapping("/brewery-summary")
    @Timed
    public List<BrewerySummaryDTO> getBrewerySummary() {
        log.debug("REST request to get all Breweries");
        return brewerySummaryService.getBrewerySummary();
    }

}
