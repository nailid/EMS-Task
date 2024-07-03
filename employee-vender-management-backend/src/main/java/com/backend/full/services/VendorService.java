package com.backend.full.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.backend.full.entities.Vendor;
import com.backend.full.repositories.VendorRepository;

@Service
public class VendorService {
	@Autowired
	public VendorRepository vendorRepository;
	
	public Vendor saveVendor(Vendor vendor) {
		if (vendorRepository.findByEmail(vendor.getEmail()) != null) {
            throw new RuntimeException("Vendor with this email already exists.");
        }
        return vendorRepository.save(vendor);
    }

    public List<Vendor> getAllVendors() {
        return vendorRepository.findAll();
    }
}
