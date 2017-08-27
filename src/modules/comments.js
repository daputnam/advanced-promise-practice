import getOneComment from "./get-one-comment";
import createComment from "./create-comment";



  // 1) Long way
  function theWebRequstIsDone(response) {
    console.log("Comment response", response);
    return response.json();

  }
  function jsonIsReady(data) {
    console.log("Comment data", data);
    document.getElementById("numberOfComments").innerHTML = data.length;

  }

  function loadAllComments() {
    const webRequestPromise = fetch("/comments");
    const getJsonPromise = webRequestPromise.then(theWebRequstIsDone);
    getJsonPromise.then(jsonIsReady);
  }

  // 2) Short way
  fetch("/comments").then(function (response) {
    return response.json();
  }).then(function (data) {
    // do something with data
    document.getElementById("numberOfComments2").innerHTML = data.length;
    console.log(data);
  });


loadAllComments();

// 3) We can use promises from other modules
getOneComment(1).then(function (data) {
  document.getElementById("firstComment").innerHTML = data.body;
});


window.makeComment = function () {
  createComment({
    body: "Hey yo"
  }).then(function () {
    loadAllComments();
  }); 
};

// getOneContact(1).then(function (data) {
//   document.getElementById("contactName").innerHTML = data.name;
// });


// window.createContact = function () {
//   createContact({
//     name: "Dale Cooper",
//     occupation: "FBI Agent"
//   }).then(function () {
//     loadAllContacts();
//   });    
// };

