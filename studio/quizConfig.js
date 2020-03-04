export default {
  localWebHost: 'http://localhost:3000', // default Vue port
  localApiHost: 'http://localhost:3000', // default Now API port
  remoteWebHost: 'https://squizzy.deanbryen.now.sh', //squizzyurl
  match: {
    correctAnswerScore: 100,
    firstAnswerScore: 50
  },
  schema: {
    maxAnswerLength: 40,
    maxQuestionLength: 200,
    maxNumberOfChoices: 4,
    minNumberOfChoices: 2,
    defaultTimeLimit: 30
  }
}
