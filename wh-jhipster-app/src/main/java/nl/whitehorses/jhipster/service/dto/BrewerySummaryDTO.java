package nl.whitehorses.jhipster.service.dto;

import java.io.Serializable;
import java.util.List;
import java.util.Objects;

public class BrewerySummaryDTO implements Serializable {

    private String brewery;
    private List<String> beers;

    public String getBrewery() {
        return brewery;
    }

    public void setBrewery(String brewery) {
        this.brewery = brewery;
    }

    public List<String> getBeers() {
        return beers;
    }

    public void setBeers(List<String> beers) {
        this.beers = beers;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        BrewerySummaryDTO that = (BrewerySummaryDTO) o;
        return Objects.equals(brewery, that.brewery) &&
            Objects.equals(beers, that.beers);
    }

    @Override
    public int hashCode() {

        return Objects.hash(brewery, beers);
    }

    @Override
    public String toString() {
        return "BrewerySummaryDTO{" +
            "brewery='" + brewery + '\'' +
            ", beers=" + beers +
            '}';
    }
}
