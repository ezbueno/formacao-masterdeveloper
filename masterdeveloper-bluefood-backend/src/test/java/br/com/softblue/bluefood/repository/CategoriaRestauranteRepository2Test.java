package br.com.softblue.bluefood.repository;

import static org.assertj.core.api.Assertions.assertThat;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.autoconfigure.orm.jpa.TestEntityManager;
import org.springframework.test.context.ActiveProfiles;

import br.com.softblue.bluefood.domain.restaurante.CategoriaRestaurante;

@DataJpaTest
@ActiveProfiles("test")
public class CategoriaRestauranteRepository2Test {
	
	@Autowired
	private TestEntityManager testEntityManager;
	
	@Test
	public void testInsertAndDelete() throws Exception {
		assertThat(testEntityManager).isNotNull();
		
		CategoriaRestaurante cr = new CategoriaRestaurante();
		cr.setNome("Chinesa");
		cr.setImagem("chinesa.png");
		testEntityManager.persistAndFlush(cr);
		
		assertThat(cr.getId()).isNotNull();
		
		CategoriaRestaurante cr2 = testEntityManager.find(CategoriaRestaurante.class, cr.getId());
		assertThat(cr.getNome()).isEqualTo(cr2.getNome());
		
		testEntityManager.remove(cr);
		
		assertThat(testEntityManager.find(CategoriaRestaurante.class, cr.getId())).isNull();
	}
}
