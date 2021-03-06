// Make sure we wait to attach our handlers until the DOM is fully loaded.
    $(".change-devoured").on("click", function(event) {
      event.preventDefault();
      console.log("clicked devoured");
      const id = $(this).attr("data-id");
      console.log(id);
      let newDevoured = $(this).data("newdevoured");
  
      let newDevouredState= {
        devoured: newDevoured
      };
      console.log(newDevouredState);
      // Send the PUT request.
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: newDevouredState
      }).then(
        function() {
          console.log("changed to devoured", newDevoured);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    $(".create-form").on("submit", function(event) {
      console.log("submit click");
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
  
      const newBurger = {
        burger_name: $("#ca").val().trim(),
        devoured: 0
      };
  
      // Send the POST request.
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(
        function() {
          console.log("created new burger");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    // $(".delete-burger").on("click", function(event) {console.log("clicked")
    //   var id = $(this).data("id");
  
    //   // Send the DELETE request.
    //   $.ajax("/api/burgers/" + id, {
    //     type: "DELETE",
    //     data: { id }
    //   }).then(
    //     function() {
    //       console.log("deleted burger", id);
    //       // Reload the page to get the updated list
    //       location.reload();
    //     }
    //   );
    // });
  