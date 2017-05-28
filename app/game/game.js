app.controller("gameCtrl", function($scope) {
    $scope.showResults = false;

    $scope.classes = [{
        name: "",
        credits: null,
        wieghts: {
            quizWeight: null,
            quizGrade: null,
            examWeight: null,
            examGrade: null,
            homeworkWeight: null,
            homeworkGrade: null
        }
    }];

    $scope.addClass = function() {
      $scope.classes.push({});
      $scope.showResults = false;
    }

    $scope.calculate = function() {
      var classes = $scope.classes;
      var totalCredits = 0;
      var totalWeightGrade = 0;
      for(var i in classes){
        var course = classes[i];
        var weightQuizGrade = (course.weights.quizGrade * course.weights.quizWeight);
        var weightExamGrade = (course.weights.examGrade * course.weights.examWeight);
        var weightHomeworkGrade = (course.weights.homeworkGrade * course.weights.homeworkWeight);
        var totalWeightGrade = weightQuizGrade + weightExamGrade + weightHomeworkGrade;
        totalCredits += course.credits;
        totalWeightGrade += weightCourseGrade;
      }
      var totalGPA = totalWeightGrade / totalCredits;
      $scope.totalWeightGrade = totalWeightGrade;
      $scope.totalCredits = totalCredits;
      $scope.totalGPA = totalGPA;
      $scope.grade = (totalGPA * 100) / 4;
      $scope.showResults = true;
    }
});
