package com.devsuoerior.dsmeta.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.devsuoerior.dsmeta.entities.Sale;

public interface SaleRepository extends JpaRepository<Sale, Long> {
	
}
