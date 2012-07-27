package com.bajoneando.lnramirez.visits.services.test;

import com.bajoneando.lnramirez.visits.Visit;
import com.bajoneando.lnramirez.visits.services.VisitService;
import org.junit.Test;

import static org.mockito.Mockito.*;
import static org.junit.Assert.*;

/**
 *
 * @author lrmonterosa
 */
public class VisitServiceTest {
    
    @Test
    public void lastVisitReturnsOneObject() {
        VisitService visitService = mock(VisitService.class);
        Visit lastVisit = new Visit();
        when(visitService.getLastVisit()).thenReturn(lastVisit);
        Visit other = new Visit();
        assertEquals(other,visitService.getLastVisit());
    }
    
}
