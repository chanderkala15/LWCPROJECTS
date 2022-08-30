public with sharing class AccountControllerClass1 {
 @AuraEnabled(cacheable=true)
 public static List<Account> getAccountList1() {

    List<Account> ListAccount = new List<Account>();
    //      return [SELECT Id, Name, Industry, Rating FROM Account];
      ListAccount = [SELECT Id, Name, Industry, Rating FROM Account
                    WHERE Rating = 'Warm'   
                  ];
      return ListAccount;
      
   } 

   @AuraEnabled(cacheable=true)
   public static List<Account> getAccountList2(String Rating) {

      List<Account> ListAccount = new List<Account>();
    //      return [SELECT Id, Name, Industry, Rating FROM Account];
      ListAccount = [SELECT Id, Name, Industry, Rating 
                     FROM Account
                     WHERE Rating =:Rating
                     ];
      return ListAccount;
      
   }
}

