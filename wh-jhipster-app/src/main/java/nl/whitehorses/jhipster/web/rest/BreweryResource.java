package nl.whitehorses.jhipster.web.rest;

import com.codahale.metrics.annotation.Timed;
import nl.whitehorses.jhipster.domain.Brewery;

import nl.whitehorses.jhipster.repository.BreweryRepository;
import nl.whitehorses.jhipster.web.rest.errors.BadRequestAlertException;
import nl.whitehorses.jhipster.web.rest.util.HeaderUtil;
import io.github.jhipster.web.util.ResponseUtil;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.net.URISyntaxException;

import java.util.List;
import java.util.Optional;

/**
 * REST controller for managing Brewery.
 */
@RestController
@RequestMapping("/api")
public class BreweryResource {

    private final Logger log = LoggerFactory.getLogger(BreweryResource.class);

    private static final String ENTITY_NAME = "brewery";

    private final BreweryRepository breweryRepository;

    public BreweryResource(BreweryRepository breweryRepository) {
        this.breweryRepository = breweryRepository;
    }

    /**
     * POST  /breweries : Create a new brewery.
     *
     * @param brewery the brewery to create
     * @return the ResponseEntity with status 201 (Created) and with body the new brewery, or with status 400 (Bad Request) if the brewery has already an ID
     * @throws URISyntaxException if the Location URI syntax is incorrect
     */
    @PostMapping("/breweries")
    @Timed
    public ResponseEntity<Brewery> createBrewery(@RequestBody Brewery brewery) throws URISyntaxException {
        log.debug("REST request to save Brewery : {}", brewery);
        if (brewery.getId() != null) {
            throw new BadRequestAlertException("A new brewery cannot already have an ID", ENTITY_NAME, "idexists");
        }
        Brewery result = breweryRepository.save(brewery);
        return ResponseEntity.created(new URI("/api/breweries/" + result.getId()))
            .headers(HeaderUtil.createEntityCreationAlert(ENTITY_NAME, result.getId().toString()))
            .body(result);
    }

    /**
     * PUT  /breweries : Updates an existing brewery.
     *
     * @param brewery the brewery to update
     * @return the ResponseEntity with status 200 (OK) and with body the updated brewery,
     * or with status 400 (Bad Request) if the brewery is not valid,
     * or with status 500 (Internal Server Error) if the brewery couldn't be updated
     * @throws URISyntaxException if the Location URI syntax is incorrect
     */
    @PutMapping("/breweries")
    @Timed
    public ResponseEntity<Brewery> updateBrewery(@RequestBody Brewery brewery) throws URISyntaxException {
        log.debug("REST request to update Brewery : {}", brewery);
        if (brewery.getId() == null) {
            return createBrewery(brewery);
        }
        Brewery result = breweryRepository.save(brewery);
        return ResponseEntity.ok()
            .headers(HeaderUtil.createEntityUpdateAlert(ENTITY_NAME, brewery.getId().toString()))
            .body(result);
    }

    /**
     * GET  /breweries : get all the breweries.
     *
     * @return the ResponseEntity with status 200 (OK) and the list of breweries in body
     */
    @GetMapping("/breweries")
    @Timed
    public List<Brewery> getAllBreweries() {
        log.debug("REST request to get all Breweries");
        return breweryRepository.findAll();
        }

    /**
     * GET  /breweries/:id : get the "id" brewery.
     *
     * @param id the id of the brewery to retrieve
     * @return the ResponseEntity with status 200 (OK) and with body the brewery, or with status 404 (Not Found)
     */
    @GetMapping("/breweries/{id}")
    @Timed
    public ResponseEntity<Brewery> getBrewery(@PathVariable Long id) {
        log.debug("REST request to get Brewery : {}", id);
        Brewery brewery = breweryRepository.findOne(id);
        return ResponseUtil.wrapOrNotFound(Optional.ofNullable(brewery));
    }

    /**
     * DELETE  /breweries/:id : delete the "id" brewery.
     *
     * @param id the id of the brewery to delete
     * @return the ResponseEntity with status 200 (OK)
     */
    @DeleteMapping("/breweries/{id}")
    @Timed
    public ResponseEntity<Void> deleteBrewery(@PathVariable Long id) {
        log.debug("REST request to delete Brewery : {}", id);
        breweryRepository.delete(id);
        return ResponseEntity.ok().headers(HeaderUtil.createEntityDeletionAlert(ENTITY_NAME, id.toString())).build();
    }
}
