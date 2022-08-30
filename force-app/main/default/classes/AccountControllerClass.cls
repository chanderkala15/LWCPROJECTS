public  class AccountControllerClass {

/*   @AuraEnabled(cacheable=true)
   public static List<Account> getAccountList() {

      List<Account> ListAccount = new List<Account>();
    //      return [SELECT Id, Name, Industry, Rating FROM Account];
      ListAccount = [SELECT Id, Name, Industry, Rating FROM Account
                    WHERE Rating = 'Warm'   
                  ];
      return ListAccount;
      
   }
*/
@AuraEnabled(cacheable=true)
   public static List<Account> getAccountList(String Rating) {

      List<Account> ListAccount = new List<Account>();
    //      return [SELECT Id, Name, Industry, Rating FROM Account];
      ListAccount = [SELECT Id, Name, Industry, Rating 
                     FROM Account
                     WHERE Rating =:Rating
                     ];
     // return ListAccount;
      
   }

   @AuraEnabled(cacheable=true)
   
   public static List<Account> getAccountviaID(String RecordId) {

      List<Account> acc = new List<Account>();
    //      return [SELECT Id, Name, Industry, Rating FROM Account];
      acc = [SELECT Id, Name, Industry, Rating 
                     FROM Account
                     WHERE Id =:RecordId
                     ];
      return acc;
      
   }
}