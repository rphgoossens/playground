package nl.whitehorses.jhipster.service;

import nl.whitehorses.jhipster.domain.Beer;
import nl.whitehorses.jhipster.domain.Brewery;
import nl.whitehorses.jhipster.repository.BeerRepository;
import nl.whitehorses.jhipster.repository.BreweryRepository;
import nl.whitehorses.jhipster.service.dto.BrewerySummaryDTO;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Example;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Service
@Transactional
public class BrewerySummaryService {

    private final Logger log = LoggerFactory.getLogger(BrewerySummaryService.class);
    private final BreweryRepository breweryRepository;
    private final BeerRepository beerRepository;

    @Autowired
    public BrewerySummaryService(BreweryRepository breweryRepository, BeerRepository beerRepository) {
        this.breweryRepository = breweryRepository;
        this.beerRepository = beerRepository;
    }

    public List<BrewerySummaryDTO> getBrewerySummary() {

        List<BrewerySummaryDTO> brewerySummaries = new ArrayList<>();
        List<Brewery> breweries = breweryRepository.findAll();

        for (Brewery brewery : breweries) {

            BrewerySummaryDTO brewerySummary = new BrewerySummaryDTO();
            brewerySummary.setBrewery(brewery.getName());

            Beer beerFilter = new Beer();
            beerFilter.setBrewery(brewery);

            brewerySummary.setBeers(
                beerRepository.findAll(Example.of(beerFilter))
                    .stream().map(Beer::getName)
                    .collect(Collectors.toList()));
            brewerySummaries.add(brewerySummary);
        }

        return brewerySummaries;
    }
}
