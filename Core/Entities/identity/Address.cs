namespace Core.Entities.Identity
{
    public class Address
    {

        public int Id { get; set; }

        public string FirstName { get; set; }

         public string LastName { get; set; }

         public string Street { get; set; }

         public string City { get; set; }

         public string State { get; set; }

         public string ZipCode { get; set; }

         public string AppUserId { get; set; }


        //  one to one relation  appuser -- address
         public AppUser AppUser { get; set; }
    }
}