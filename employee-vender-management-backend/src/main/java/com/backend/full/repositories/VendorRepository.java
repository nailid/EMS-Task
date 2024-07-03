package com.backend.full.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.backend.full.entities.Vendor;

public interface VendorRepository extends JpaRepository<Vendor, Long>{
	Vendor findByEmail(String email);
}
