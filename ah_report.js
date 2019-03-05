"use strict";

/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 10
   Case Problem 3

   Author: Emmanuel Cortes Castaneda
   Date: 3.4.19  
   
   Filename: ah_report.js
   
   Functions:
   
   calcSum(donorAmt)
      A callback function that adds the current donation amount in the array to the donationTotal variable
   
   findMajorDonors(donorAmt)
      A callback function that returns the value true only if the current donation amount in the array
      is greater than or equal to 1000
      
   donorSortDescending(a, b)
      A callback function used to sort the donation amounts from the array in descending order
      
   writeDonorRow(value)
      A callback function that writes the HTML code for each table row that provides the contact
      information for the donor
      
*/

// This variable will be used to set the initial value of the donation total which will be added onto later on
var donationTotal = 0;

// This variable will calculate the donors total
donors.forEach(calcSum);

// This variable will display the donor report at the top of the page with the total donations and number of donors
var summaryTable = "<table><tr><th>Donors</th><td>" + donors.length + "</td></tr><tr><th>Total Donation</th><td>$" + donationTotal.toLocaleString() + "</td></tr></table>";

// The summaryTable variable was called into the HTML page by using a specific element
document.getElementById("donationSummary").innerHTML = summaryTable;

// This variable will find the top donors using the callback function of findMajorDonors
var majorDonors = donors.filter(findMajorDonors);

// the majorDonors variable will be sorted in descending order 
majorDonors.sort(donorSortDescending);

// This variable will create a table with 7 different table headers.
var donorTable = "<table><caption>Major Donors</caption><tr><th>Donation</th><th>Donor ID</th><th>Date</th><th>Name</th><th>Address</th><th>Phone</th><th>E-mail</th></tr>";

majorDonors.forEach(writeDonorRow);

donorTable += "</table>";

// The donorTable variable was called into the HTML page by using an element with the id of donorTable
document.getElementById("donorTable").innerHTML = donorTable;


function calcSum(donorAmt) {
      donationTotal += donorAmt[9];
}

function findMajorDonors(donorAmt) {
      return donorAmt[9] >= 1000;
}

function donorSortDescending(a, b) {
      return b[9] - a[9];
}

function writeDonorRow(value) {
      donorTable += "<tr>";
      donorTable += "<td>$" + value[9].toLocaleString() + "</td>";
      donorTable += "<td>" + value[0] + "</td>";
      donorTable += "<td>" + value[10] + "</td>";
      donorTable += "<td>" + value[2] + ", " + value[1] + "</td>";
      donorTable += "<td>" + value[3] + "<br />" + value[4] + ", " + value[5] + " " + value[6] + "</td>";
      donorTable += "<td>" + value[7] + "</td>";
      donorTable += "<td>" + value[8] + "</td>";
      donorTable += "</tr>";
}