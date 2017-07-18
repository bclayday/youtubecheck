
{
  "intents" : [
  {
    "intent" : "GetSubsciberCount"
   },
    {
    "intent" : "GetVideoViewcount"
    },
    {
    "intent": "GetVideoViewCountSinceDate",
    "slots" : [
      {
        "name" : "SinceDate",
        "type" : "AMAZON.DATE"
      },
      {
      "intent": "AMAZON.HelpIntent"
    },
    {
      "intent": "AMAZON.StopIntent"
    },
    {
      "intent": "AMAZON.CancelIntent"
    }
    
  ]
    }
    ]
}
