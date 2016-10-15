var app = angular.module("redditClone", [])
 console.log("in js file");
app.controller("reddit", ($scope) => {
  $scope.master = {}
  $scope.master.commentsExist = false
  $scope.master.addComment = false
  $scope.master.viewComments = false
  $scope.master.noComments = true
  $scope.master.allData = [
    {
      title: "First Post",
      author: "Anna Frann",
      description: "Damn that dog brown cats with pink ears but sleep on keyboard, for thug cat but lie on your belly and purr when you are asleep. Fall over dead (not really but gets sypathy). Put butt in owner's face favor packaging over toy lick arm hair. Hide from vacuum cleaner lick plastic bags but scratch leg; meow for can opener to feed me, but rub face on everything, for make muffins, but vommit food and eat it again, sleep on dog bed, force dog to sleep on floor. Have secret plans. Stares at human while pushing stuff off a table find empty spot in cupboard and sleep all day and catch mouse and gave it as a present.",
      image: "https://source.unsplash.com/category/food/200x300",
      rating: $scope.master.rate = 0,
      // comments: $scope.master.allData.comments = []
    },
    {
      title: "Another Post",
      author: "Mitch Folks",
      description: "Stares at human while pushing stuff off a table find empty spot in cupboard and sleep all day and catch mouse and gave it as a present. If it smells like fish eat as much as you wish sit on human, run in circles chirp at birds yet brown cats with pink ears, intently stare at the same spot. Rub face on owner swat at dog. Sit in box i cry and cry and cry unless you pet me, and then maybe i cry just for fun yet toy mouse squeak roll over but i like big cats and i can not lie. Chase the pig around the house chase mice, so meow to be let out. Sit in box scream at teh bath and scamper. Meowwww.",
      image: "https://source.unsplash.com/category/nature/200x300",
      rating: $scope.master.rate = 0,
      // comments: $scope.master.allData.comments = []
    },
    {
      title: "Bikes and Stuff",
      author: "Liz Horton",
      description: "Damn that dog brown cats with pink ears but sleep on keyboard, for thug cat but lie on your belly and purr when you are asleep. Fall over dead (not really but gets sypathy). Put butt in owner's face favor packaging over toy lick arm hair. Hide from vacuum cleaner lick plastic bags but scratch leg; meow for can opener to feed me, but rub face on everything, for make muffins, but vommit food and eat it again, sleep on dog bed, force dog to sleep on floor.",
      image: "https://source.unsplash.com/category/objects/200x300",
      rating: $scope.master.rate = 0,
      // comments: $scope.master.allData.comments = []
    }
  ]

  $scope.rateUp = () => {
    console.log("rate up");
    $scope.master.rate += 1
  }

  $scope.rateDown = () => {
        console.log("rate down");
    $scope.master.rate -= 1
  }

  $scope.viewComments = () => {
    console.log("in view comments function");
    $scope.master.viewComments = true
  }

  $scope.newComment = () => {
    console.log("in new comment function");
    $scope.master.addComment = true
  }

  // $scope.addComment = () => {
  //   var newComment = $scope.redditPost.commentToAdd
  //   $scope.master.allData.comments.push(newComment)
  // }
  //date time posted
  $scope.rightNow = new Date();


});
