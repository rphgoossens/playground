package nl.whitehorses.jhipster.web.rest;

import nl.whitehorses.jhipster.JhipsterApp;
import nl.whitehorses.jhipster.repository.BreweryRepository;
import nl.whitehorses.jhipster.service.BrewerySummaryService;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.MockitoAnnotations;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;


import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;
/**
 * Test class for the BrewerySummary REST controller.
 *
 * @see BrewerySummaryResource
 */
@RunWith(SpringRunner.class)
@SpringBootTest(classes = JhipsterApp.class)
public class BrewerySummaryResourceIntTest {

    private MockMvc restMockMvc;

    @Autowired
    private BrewerySummaryService brewerySummaryService;

    @Before
    public void setUp() {
        MockitoAnnotations.initMocks(this);

        BrewerySummaryResource brewerySummaryResource = new BrewerySummaryResource(brewerySummaryService);
        restMockMvc = MockMvcBuilders
            .standaloneSetup(brewerySummaryResource)
            .build();
    }

    /**
    * Test getBrewerySummary
    */
    @Test
    public void testGetBrewerySummary() throws Exception {
        restMockMvc.perform(get("/api/brewery-summary"))
            .andExpect(status().isOk());
    }

}
