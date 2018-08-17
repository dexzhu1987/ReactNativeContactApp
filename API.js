export const fetchUsers = async ()  => {
   
      const response = await fetch(
        `https://randomuser.me/api/?results=50&nat=ca`
      );
      const json = await response.json();
      const results = json.results;
      var contact = [];
      results.map((userData) => {contact.push({name: userData.name.first + " " + userData.name.last,phone: userData.phone });}); 
      return contact;

}



