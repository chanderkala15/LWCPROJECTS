public with sharing class advisorController {

@AuraEnabled(cacheable=true) 
//public static List<Account> getZipCode(String ZipCode) {
   public static List<Account> getZipCode() {

   List<Account> acc = new List<Account>();
   String ZipCode = '12501';
  acc =[SELECT Id, Name, Industry, Rating,Zip_Code__c 
          FROM Account
          WHERE 	Zip_Code__c =:ZipCode]; 
   return acc;
    /*
   return [SELECT  Id, Name, Zip_Code__c 
   FROM Account]; */
  
     } 
}