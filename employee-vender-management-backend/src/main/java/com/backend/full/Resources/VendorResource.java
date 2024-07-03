package com.backend.full.Resources;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.backend.full.entities.Vendor;
import com.backend.full.services.EmailService;
import com.backend.full.services.VendorService;

@RestController
@RequestMapping("/api/vendors")
public class VendorResource {
	 @Autowired
	 private VendorService vendorService;
	 
	 @Autowired
	 private EmailService emailService;
	 
	 @PostMapping
	    public ResponseEntity<Vendor> createVendor(@RequestBody Vendor vendor) {
	        Vendor createdVendor = vendorService.saveVendor(vendor);
	        return ResponseEntity.ok(createdVendor);
	    }
	 
	 @GetMapping
	    public ResponseEntity<List<Vendor>> getAllVendors() {
	        List<Vendor> vendors = vendorService.getAllVendors();
	        return ResponseEntity.ok(vendors);
	    }
	 
//	 @PostMapping("/send-email")
//	 public void sendEmailToVendors(@RequestBody List<String> vendorEmails) {
//	        for (String email : vendorEmails) {
//	            Vendor vendor = vendorService.vendorRepository.findByEmail(email);
//	            if (vendor != null) {
//	                String subject = "Payment Notification";
//	                String body = "Sending payments to vendor " + vendor.getName() 
//	                + " at upi " + vendor.getUpi();
//	                emailService.sendEmail(vendor.getEmail(), subject, body);
//	            }
//	        }
//	    }
	 
	 @PostMapping("/send-email")
	 public ResponseEntity<Map<String, Object>> sendEmailToVendors(@RequestBody List<String> vendorEmails){
		 List<String> emailsSent = new ArrayList<>();
		 List<String> emailsFailed = new ArrayList<>();
		 
		 for (String email : vendorEmails) {
	            Vendor vendor = vendorService.vendorRepository.findByEmail(email);
	            if (vendor != null) {
	                String subject = "Payment Notification";
	                String body = "Sending payments to vendor " + vendor.getName() + " at upi " + vendor.getUpi();
	                emailService.sendEmail(vendor.getEmail(), subject, body);
	                emailsSent.add(email);
	            } else {
	                emailsFailed.add(email);
	            }
	        }
		 
		 Map<String, Object> response = new HashMap<>();
		 response.put("emailsSent", emailsSent);
	     response.put("emailsFailed", emailsFailed);
	     
	     return ResponseEntity.ok(response);
	 }
	 
}
