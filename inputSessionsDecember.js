//This is a copy of the code for reference
   
const async = require('async');

var workoutEntries = [];
class workoutEntry {
  constructor(primaryKey, sortKey, user, date, workoutNumber, workoutType, excersise1, excersise2, reps1, reps2, weight2, weight2, sets1, sets2, entry, happy, iate) {
    this.pk = {};
    this.pk.S = primaryKey;
    this.sk = {};
    this.sk.S= sortKey
    this.user = {};
    this.user.S = user;
    this.date = {}; 
    this.date.S = new Date(date).toDateString();
    this.workoutNumber = {};
    this.workoutNumber.S = workoutNumber;
    this.workoutType = {};  
    this.workoutType.S = workoutType;
    this.excersise1 = {};
    this.excersise1.S = excersise1;
    this.excersise2 = {}; 
    this.excersise2.S = excersise2;
    this.reps1 = {};
    this.reps1.S = reps1;
    this.reps2 = {};
    this.reps2.S = reps2;
    this.weight1 = {};
    this.weight1.S = weight1;
    this.weight2 = {};
    this.weight2.S = weight2;
    this.sets1 = {};
    this.sets1.S = sets1;
    this.sets2 = {};
    this.sets2.S = sets2;
  }
}



workoutEntries.push(new workoutEntry('0', '1', 'Gisli', "11/13/2021", '0', "Upper Body",  'Bench Press', 'Dips', '8', '10', '85 kg', 'Bodyweight', '3', '4'));
workoutEntries.push(new workoutEntry('1', '2', 'Gisli', "12/12/2021", '1', "Lower Body",  'Squat', 'Leg Press',  '8', '10', '85 kg', '100 kg', '5', '3'));
workoutEntries.push(new workoutEntry('2', '1', 'Gisli', "12/9/2021", '2', "Upper Body",  'Pull ups', 'Ab crunches',  '4', '10', 'Bodyweight', 'Bodyweight', '4', '4'));
workoutEntries.push(new workoutEntry('3', '3', 'Gisli', "12/10/2021", '3', "Cardio",  'Jog', 'Cooldown',  '8 kilometers', '1 kilometer', 'Bodyweight', 'Bodyweight', '1', '1'));
workoutEntries.push(new workoutEntry('4', '1', 'Gisli', "12/14/2021", '4', "Upper Body",  'Bench Press', 'Dips',  '8', '10', '70 kg', 'Bodyweight', '4', '4'));
workoutEntries.push(new workoutEntry('5', '1', 'Gisli', "12/15/2021", '5', "Upper Body",  'Squat', 'Deadlift',  '8', '10', '85 kg', '100 kg', '4', '4'));
workoutEntries.push(new workoutEntry('6', '2', 'Gisli', "12/16/2021", '6', "Upper Body Body",  'Push ups', 'Plank',  '10', '1 minute', 'Bodyweight', 'Bodyweight', '5', '5'));
workoutEntries.push(new workoutEntry('7', '3', 'Gisli', "12/5/2021", '7', "Cardio",  'Run', 'Leg extensions',  '7 kilometers', '15', 'Bodyweight', '35 kg', '1', '1'));
workoutEntries.push(new workoutEntry('8', '3', 'Gisli', "12/1/2021", '8', "Cardio",  'Run', 'Dips',  '3 kilometers', '15', 'Bodyweight', 'Bodyweight', '1', '3'));
workoutEntries.push(new workoutEntry('9', '1', 'Gisli', "12/2/2021", '9', "Lower Body",  'Squat', 'Box Jumps',  '10', '10', '75 kg', 'Bodyweight', '3', '3'));
workoutEntries.push(new workoutEntry('10', '1', 'Gisli', "12/3/2021", '10', "Upper Body",  'Pull ups', 'Ab crunches', '8', '10', 'Bodyweight', 'Bodyweight', '3', '4'));
workoutEntries.push(new workoutEntry('12', '2', 'Gisli', "12/4/2021", '11', "Lower Body",  'Hip Thrust', 'Leg extensions', '8', '10', '50 kg', 'Bodyweight', '3', '4'));


console.log(workoutEntries);

var AWS = require('aws-sdk');
AWS.config = new AWS.Config();
AWS.config.region = "us-east-1";

var dynamodb = new AWS.DynamoDB();

//Create function that sends it to Dynamo

async.eachSeries(workoutEntries, function(value, callback) {
    var params = {};
    params.Item = value; 
    params.TableName = "processblog";
    
    //Taken from starter code:
    dynamodb.putItem(params, function (err, data) {
      if (err) console.log(err, err.stack); // an error occurred
      else     console.log(data);           // successful response
    });
    setTimeout(callback, 1000); 
}); 