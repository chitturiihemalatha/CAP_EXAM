namespace ust.chitturi.hemalatha.reuse;
 
type Guid : String(32);
 
 

aspect address{
    houseNo: Integer;
    street: String(32);
    sector: String(44);
    landmark: String(80);
    city: String(55);
    country: String(4);
}