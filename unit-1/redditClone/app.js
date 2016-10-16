var app = angular.module("redditClone", ['angularMoment'])
 console.log("in js file");
app.controller("reddit", ($scope) => {
  $scope.master = {}
  $scope.master.commentsExist = false
  $scope.master.addComment = false
  $scope.master.viewComments = false
  $scope.master.noComments = true
  $scope.master.newPost = false

  $scope.allData = [
    {
      title: "First Post",
      author: "Anna Frann",
      description: "Damn that dog brown cats with pink ears but sleep on keyboard, for thug cat but lie on your belly and purr when you are asleep. Fall over dead (not really but gets sypathy). Put butt in owner's face favor packaging over toy lick arm hair. Hide from vacuum cleaner lick plastic bags but scratch leg; meow for can opener to feed me, but rub face on everything, for make muffins, but vommit food and eat it again, sleep on dog bed, force dog to sleep on floor. Have secret plans. Stares at human while pushing stuff off a table find empty spot in cupboard and sleep all day and catch mouse and gave it as a present.",
      image: "https://source.unsplash.com/category/food/200x300",
      rating: 0,
      comments: [
        {author: 'Catie',
        comment: "cool!"},
        {author:'Ben',
        comment:"This is a great post!"},
        {author:'Jason',
        comment:"Nice Work!"},
        {author:'Junk',
        comment:"Whatever...."}
      ]
    },
    {
      title: "Another Post",
      author: "Mitch Folks",
      description: "Stares at human while pushing stuff off a table find empty spot in cupboard and sleep all day and catch mouse and gave it as a present. If it smells like fish eat as much as you wish sit on human, run in circles chirp at birds yet brown cats with pink ears, intently stare at the same spot. Rub face on owner swat at dog. Sit in box i cry and cry and cry unless you pet me, and then maybe i cry just for fun yet toy mouse squeak roll over but i like big cats and i can not lie. Chase the pig around the house chase mice, so meow to be let out. Sit in box scream at teh bath and scamper. Meowwww.",
      image: "https://source.unsplash.com/category/nature/200x300",
      rating: 0,
      comments: []
    },
    {
      title: "Also This",
      author: "Liz Horton",
      description: "Damn thallDataat dog brown cats with pink ears but sleep on keyboard, for thug cat but lie on your belly and purr when you are asleep. Fall over dead (not really but gets sypathy). Put butt in owner's face favor packaging over toy lick arm hair. Hide from vacuum cleaner lick plastic bags but scratch leg; meow for can opener to feed me, but rub face on everything, for make muffins, but vommit food and eat it again, sleep on dog bed, force dog to sleep on floor.",
      image: "https://source.unsplash.com/category/objects/200x300",
      rating: 1,
      comments: [
        {'Catie': "cool!"},
        {'Ben':"This is a great post!"},
        {'Jason':"Nice Work!"},
        {'Junk':"Whatever...."}
      ]
    }
  ]
//not working yet

  $scope.rateUp = (index) => {
    // console.log($scope.$watch)
    console.log("rate up");
    $scope.allData[index].rating += 1
  }
//not working yet
  $scope.rateDown = (index) => {
    console.log("rate down");
    $scope.allData[index].rating-=1
  }

  $scope.viewComments = () => {
    console.log("in view comments function");
    $scope.master.viewComments = true
  }

  $scope.newComment = () => {
    console.log("in new comment function");
    $scope.allData[$index].addComment = true
  }

  $scope.addComment = (str) => {
    $scope.master.commentsExist = true
    console.log("reddit comment", str);
    $scope.allData[$index].push(str)
  }

  $scope.addPost = () =>{
    $scope.master.newPost = true
    console.log("in new post function");
    console.log($scope.master.newPost);
  }
  // date time posted

  $scope.time = new Date().getTime();


});
