use guvi;

[
{
  company_id :1,
  company_name: 'amazon',
  u_id:[1,3],
  date:"2020-10-16T16:00:00Z"
},
{
    company_id :2,
  company_name: 'zoho',
  u_id:[1,2],
  date:"2020-10-17T16:00:00Z"
},
{
   company_id :3,
  company_name: 'apple',
  u_id:[1,3],
  date:"2020-11-16T16:00:00Z"
}
,
{
    company_id :4,
  company_name: 'samsung',
  u_id:[4,5],
  date:"2020-10-18T16:00:00Z"
},
{
   company_id :5,
  company_name: 'freshworks',
  u_id:[2,3],
  date:"2020-10-20T16:00:00Z"
}
]

 db.companies.aggregate([{"$unwind":"$u_id"},{"$lookup": {
    "from": "users",
    "localField": "u_id", 
    "foreignField": "user_id",
    "as": "result"
  }}, { "$unwind": "$result" },{ "$project": {
    "user_name":"$result.user_nmae",
    "company_name": 1
  } }])

  db.companies.find(
      {
          date :
          {
              $gt: "2020-10-15T16:00:00Z",
              $lt :"2020-10-30T16:00:00Z"
          }
      }
  )

  db.task.aggregate([{"$lookup": {
    "from": "topic",
    "localField": "month", 
    "foreignField": "month",
    "as": "result"
  }},
{
    "$match":
    {
        "month": "october"
    }
},
{
    "$unwind" :"$result"
},
{
    "$project":
    {
        "topic":"$result.topic",
        "task":1,
        "month":1
    }
}])

[
    {
        "user_id":1,
        "problem_solved":12,
        "rank":4
    },
    {
        "user_id":2,
        "problem_solved":34,
        "rank":3
    },
    {
        "user_id":3,
        "problem_solved":43,
        "rank":2
    },
    {
        "user_id":4,
        "problem_solved":54,
        "rank":1
    },
    {
        "user_id":5,
        "problem_solved":5,
        "rank":5
    }
]

 db.codekata.aggregate([{"$lookup": {
    "from": "user",
    "localField": "user_id", 
    "foreignField": "user_id",
    "as": "result"
  }}
])