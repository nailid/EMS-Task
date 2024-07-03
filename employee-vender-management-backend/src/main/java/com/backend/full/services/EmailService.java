package com.backend.full.services;

import org.springframework.stereotype.Service;

@Service
public class EmailService {
	public void sendEmail(String to, String subject, String body) {
        System.out.println("Sending email to: " + to);
        System.out.println("Subject: " + subject);
        System.out.println("Body: " + body);
    }
}
